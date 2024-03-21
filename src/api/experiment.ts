import { useQuery } from "@tanstack/react-query";
import { createData, getBackConnection } from "./controller";
import { useMutationInvalidation } from "../components/useMutationInvalidation";

export function useExperimentQuery() {
  return useQuery({ queryFn: getBackConnection, queryKey: ["exp"] });
}

export function useTestNewDocMutation() {
  return useMutationInvalidation({ mutationFn: createData }, ["exp"], "לול");
}
