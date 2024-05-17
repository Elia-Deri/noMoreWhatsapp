import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  Controller,
  FieldValues,
  FormState,
  Path,
  RegisterOptions,
} from "react-hook-form";

export function FormTextField<T extends FieldValues>({
  name,
  control,
  formState,
  label,
  required = false,
  rules,
  textFieldProps,
  type = "text",
}: {
  name: Path<T>;
  control: Control<T>;
  formState: FormState<T>;
  label: string;
  required?: boolean;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  type?: TextFieldProps["type"];
  textFieldProps?: TextFieldProps;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required, ...rules }}
      render={({ field }) => (
        <TextField
          size="small"
          fullWidth
          error={formState.isSubmitted && !!formState.errors[name]}
          value={field.value || ""}
          onChange={field.onChange}
          label={label}
          required={required}
          type={type}
          {...textFieldProps}
        />
      )}
    />
  );
}
