import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputLabel } from "@mui/material";
import dayjs from "dayjs";



interface DatePickerFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  errors?: { [key in keyof T]?: FieldError };
  required: boolean;
}

export const DatePickerField = <T extends FieldValues>({
  control,
  name,
  label,
  errors,
  required,
}: DatePickerFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  marginTop: "0.6rem",
                  marginBottom: "0.6rem",
                  paddingLeft: "0.5rem",
                  width: "100%",
                }}
              >
                      <InputLabel variant="standard" htmlFor="uncontrolled-native" shrink={true}>
                        <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                          {label}
                          {required && <abbr aria-label="required" className="formulario-requerido">*</abbr>}
                        </span>
                      </InputLabel>

                      <DatePicker
                        value={value ? dayjs(value) : null}
                        onChange={(date) => {
                          onChange(date ? date.toDate() : null);            // Convierte el valor Dayjs a Date antes de enviarlo
                        }}
                        format={"DD-MM-YYYY"}
                      />

                      {errors?.[name] && <p style={{ color: "red", fontSize: '0.7rem'}}>{errors[name]?.message}</p>}
              </div>
            </LocalizationProvider>
      )}
    />
  );
};


