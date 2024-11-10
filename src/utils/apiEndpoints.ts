import { axiosInstance } from "src/components/axiosInstance";

export async function fetchData<T>(route: string) {
  return (await axiosInstance.get<T>(route)).data;
}
