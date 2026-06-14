import { useEffect } from "react";
import { toaster } from "@/components/ui/toaster";

export interface Toast {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const useToastListener = (toast: Toast) => {
  useEffect(() => {
    if (toast && toast.message?.length > 0) {
      queueMicrotask(() => {
        // Remove any existing toasts on screen
        toaster.dismiss();

        // Create and display a new toast
        toaster.create({
          description: toast.message,
          type: toast.type,
          closable: true,
        });
      });
    }
  }, [toast]);
};

export default useToastListener;
