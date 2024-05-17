import { IoMdAdd } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { Grid, TextField, Typography } from "@mui/material";

import { useCreateTodoMutation } from "src/api/todos";
import { DialogComponent } from "src/components/DialogComponent";
import { FormTextField } from "src/components/Forms/FormTextField";
import { FormDatePicker } from "src/components/Forms/FormDatePicker";

type AddTodoValues = {
  name: string;
  description?: string;
  deadLine?: moment.Moment;
  location: string;
  contact?: {
    name?: string;
    phoneNumber?: `0${number}-${number}-${number}`;
  };
  done: boolean;
};

export function AddTodoForm({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const createTodoMutation = useCreateTodoMutation();

  const { handleSubmit, control, reset, formState } = useForm<AddTodoValues>();

  const handleAddTodo = (values: AddTodoValues) => {
    createTodoMutation.mutate(
      {
        name: values.name,
        location: values.location,
        done: false,
        description: values.description,
        deadline: values.deadLine?.valueOf(),
        contact: values.contact,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <DialogComponent
      open={open}
      setOpen={setOpen}
      title="הוספת משימה"
      acceptFun={handleSubmit(handleAddTodo)}
      acceptText="הוסף"
      acceptIcon={<IoMdAdd />}
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormTextField
              control={control}
              formState={formState}
              name="name"
              required
              label="שם משימה"
            />
          </Grid>

          <Grid item xs={12}>
            <FormTextField
              control={control}
              formState={formState}
              textFieldProps={{ multiline: true }}
              name="description"
              label="תיאור"
            />
          </Grid>

          <Grid item xs={6}>
            <FormTextField
              control={control}
              formState={formState}
              name="location"
              required
              label="מיקום"
            />
          </Grid>

          <Grid item xs={6}>
            <FormDatePicker
              control={control}
              formState={formState}
              name="deadLine"
              label="דדליין"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">איש קשר:</Typography>
          </Grid>

          <Grid item xs={5} ml={"5%"}>
            <FormTextField
              control={control}
              formState={formState}
              name="contact.name"
              label="שם"
            />
          </Grid>

          <Grid item xs={6.4}>
            <Grid container spacing={2}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <Controller
                  name="contact.phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      size="small"
                      fullWidth
                      error={
                        formState.isSubmitted &&
                        !!formState.errors.contact?.phoneNumber
                      }
                      value={field.value || ""}
                      onChange={(e) => {
                        const value = e.target.value.replace(/-/g, "");
                        let newValue = value;

                        if (
                          Number.isNaN(+value.charAt(value.length - 1)) ||
                          !/^\d{0,7}$/.test(value) ||
                          value.length > 7
                        ) {
                          return;
                        }

                        if (value.length > 3) {
                          const firstPart = value.slice(0, 3);
                          const secondPart = value.slice(3);

                          newValue = firstPart + "-" + secondPart;
                        }

                        field.onChange(newValue);
                      }}
                      label="טלפון"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </DialogComponent>
  );
}
