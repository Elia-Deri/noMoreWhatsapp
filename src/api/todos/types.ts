export interface Todo {
  _id: string;
  name: string;
  description?: string;
  deadline?: Date;
  location: string;
  contact?: { name: string; phoneNumber: string };
  done: boolean;
}

export type CreateTodo = {
  name: string;
  description?: string;
  deadline?: number;
  location: string;
  contact?: { name?: string; phoneNumber?: string };
  done: boolean;
};
