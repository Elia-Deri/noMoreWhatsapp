import { axiosInstance } from "../components/axiosInstance";

export async function getBackConnection() {
  const res = await axiosInstance.get("hi");

  return res.data;
}

export async function createData() {
  return await axiosInstance.post("db/addDoc");
}
