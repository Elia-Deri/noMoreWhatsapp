import { useQuery } from "@tanstack/react-query";
import { createTodo, getTodos } from "./controllers";
import { useMutationInvalidation } from "src/components/useMutationInvalidation";

export function useTodosQuery() {
  return useQuery({ queryFn: getTodos, queryKey: ["Todos"] });
}

export function useCreateTodoMutation() {
  return useMutationInvalidation({ mutationFn: createTodo }, ["Todos"]);
}
