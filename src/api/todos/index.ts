import { useQuery } from "@tanstack/react-query";
import { createTodo } from "./controllers";
import { useMutationInvalidation } from "src/components/useMutationInvalidation";
import { fetchData } from "src/utils/apiEndpoints";
import { Todo } from "./types";

export function useTodosQuery() {
  return useQuery({
    queryFn: () => fetchData<Todo[]>("todos"),
    queryKey: ["todos"],
  });
}

export function useCreateTodoMutation() {
  return useMutationInvalidation({ mutationFn: createTodo }, ["todos"]);
}
