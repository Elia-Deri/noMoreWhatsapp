import { axiosInstance } from "src/components/axiosInstance";
import { CreateTodo } from "./types";

export function createTodo({
  name,
  description,
  deadline,
  location,
  contact,
  done,
}: CreateTodo) {
  return axiosInstance.post("todos/createTodo", {
    name,
    description,
    deadline,
    location,
    contact,
    done,
  });
}
