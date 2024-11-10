import { useQuery } from "@tanstack/react-query";

import { fetchData } from "src/utils/apiEndpoints";

export function usePhonesQuery() {
  return useQuery({
    queryFn: () =>
      fetchData<{ _id: string; name: string; data: string[] }>("utils/phones"),
    queryKey: ["phones"],
    select: (data: { _id: string; name: string; data: string[] }) => data.data,
  });
}
