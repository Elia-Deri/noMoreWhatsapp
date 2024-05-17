export interface Todo {
  name: string;
  description?: string;
  deadline?: Date;
  location: string;
  contact?: { name: string; phoneNumber: string };
  done: boolean;
}
