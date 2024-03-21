import { useExperimentQuery, useTestNewDocMutation } from "./api/experiment";

export function ExperimentComponent() {
  const { data, isLoading } = useExperimentQuery();
  const newDocMutation = useTestNewDocMutation();

  if (isLoading) return <p>בטעינה...</p>;

  const addNewDoc = () => {
    newDocMutation.mutate({});
  };

  return (
    <>
      <p>{data}</p>
      <button onClick={addNewDoc}>בדוק</button>
    </>
  );
}
