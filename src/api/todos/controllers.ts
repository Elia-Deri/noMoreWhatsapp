import { axiosInstance } from "src/api/axiosInstance";
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
