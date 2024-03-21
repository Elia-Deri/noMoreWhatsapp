import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  QueryClient,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

export function useMutationInvalidation<T>(
  options: UseMutationOptions<unknown, AxiosError, T, unknown>,
  queryKey: (string | number)[],
  successMessage: string
) {
  const queryClient = new QueryClient();

  return useMutation<unknown, AxiosError, T, unknown>({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      toast.success(successMessage);
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
    ...options,
  });
}
