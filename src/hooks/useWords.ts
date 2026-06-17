import apiClient, { CanceledError } from "@/services/apiClient";
import { useEffect, useState } from "react";
import wordleDictionary, { isValidAnswer } from "@/utils/dictionary";

export interface Word {
  category: string;
  language: string;
  length: number;
  word: string;
}

const useWords = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const requestLimit = 5;
    let attempts = 0;

    setLoading(true);

    const fetchValidWord = () => {
      apiClient
        .get("", {
          signal: controller.signal,
          params: {
            category: "wordle",
            language: "en",
            length: 5,
            type: "uppercase",
            words: 1,
          },
        })
        .then((res) => {
          const data = res.data;
          const response = <Word>data[0];

          // Ensure the fetched word exists in the local answer key (from dictionary)
          if (response && isValidAnswer(response.word.toLowerCase())) {
            setWords(data);
            setLoading(false);
            console.log(response);
            return;
          }

          if (attempts < requestLimit) {
            attempts++;
            console.warn(`${response.word} is not a valid Wordle answer`);

            // Recursive call until a valid answer is returned
            setTimeout(() => {
              if (!controller.signal.aborted) fetchValidWord();
            }, 300);
          } else {
            console.error(
              "Max API retries reached. Falling back to local word list."
            );

            const localRandomWord = {
              category: "local-fallback",
              language: "en",
              length: 5,
              word: wordleDictionary.answerKey[
                Math.floor(Math.random() * wordleDictionary.answerKey.length)
              ].toUpperCase(),
            };

            setWords([localRandomWord]);
            console.log(localRandomWord);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    };

    fetchValidWord();

    return () => controller.abort();
  }, []);

  return { words, error, isLoading };
};

export default useWords;
