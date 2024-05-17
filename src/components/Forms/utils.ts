import { FieldValues, FormState, Path } from "react-hook-form";

export function isFormError<T extends FieldValues>(
  formState: FormState<T>,
  name: Path<T>
) {
  return formState.isSubmitted && !!formState.errors[name];
}
