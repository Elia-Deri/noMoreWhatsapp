import { Todo } from "src/utils/types/todos";
import { axiosInstance } from "src/components/axiosInstance";

export async function getTodos() {
  return (await axiosInstance.get("todos")).data as Todo[];
}

export function createTodo() {
  return axiosInstance.post("todos/createTodo");
}
