import apiClient, { CanceledError } from "@/services/apiClient";
import { useEffect, useState } from "react";

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

    setLoading(true);

    apiClient
      .get("", {
        signal: controller.signal,
        params: {
          language: "en",
          length: 5,
          words: 1,
        },
      })
      .then((res) => {
        setWords(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { words, error, isLoading };
};

export default useWords;
