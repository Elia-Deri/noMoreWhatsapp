import { Todo } from "src/utils/types/todos";
import { axiosInstance } from "src/components/axiosInstance";

export async function getTodos() {
  return (await axiosInstance.get("todos")).data as Todo[];
}

export function createTodo({
  name,
  description,
  deadline,
  location,
  contact,
  done,
}: {
  name: string;
  description?: string;
  deadline?: number;
  location: string;
  contact?: { name?: string; phoneNumber?: `0${number}-${number}-${number}` };
  done: boolean;
}) {
  return axiosInstance.post("todos/createTodo", {
    name,
    description,
    deadline,
    location,
    contact,
    done,
  });
}
