import moment from "moment";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import {
  Control,
  Controller,
  FieldValues,
  FormState,
  Path,
  RegisterOptions,
} from "react-hook-form";

export function FormDatePicker<T extends FieldValues>({
  name,
  control,
  formState,
  label,
  required = false,
  rules,
  datePickerProps,
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
  datePickerProps?: DatePickerProps<moment.Moment>;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required, ...rules }}
      render={({ field }) => (
        <DatePicker
          format="DD/MM/YYYY"
          value={field.value ? moment(field.value) : undefined}
          onChange={field.onChange}
          label={label}
          slotProps={{
            field: {
              clearable: true,
              onClear: () => field.onChange(undefined),
            },
            textField: {
              size: "small",
              fullWidth: true,
              error: formState.isSubmitted && !!formState.errors[name],
            },
          }}
          {...datePickerProps}
        />
      )}
    />
  );
}
