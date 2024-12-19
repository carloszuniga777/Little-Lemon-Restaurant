import { FormControl, InputBase, InputLabel, NativeSelect, styled } from "@mui/material";
import { FieldError, FieldValues, Path, Controller, Control } from "react-hook-form";



const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


interface Props<T extends FieldValues> {
  label: string;
  dataOption: {
      display: string;
      value: number | string;
  }[];
  name: Path<T>;
  errors?: { [key in keyof T]?: FieldError };
  required?: boolean;
  control?: Control<T>;
}


export const SelectField = <T extends FieldValues>({
    label,
    dataOption,
    required,
    name,
    control,
    errors
}: Props<T>) => {

    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel variant="standard" htmlFor="uncontrolled-native" shrink={true}>
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {label}
                    {required && <abbr aria-label="required" style={{ color: "red", fontSize: '1rem', marginLeft:'0.4rem'}}>*</abbr>}
                </span>
            </InputLabel>

            <Controller
                control={control}
                name={name}
                render={({ field}) => (
                    <NativeSelect
                        {...field} // Aquí pasamos el controlador de React Hook Form  | field: { onChange, onBlur, value, name, ref } https://www.react-hook-form.com/api/usecontroller/controller/
                        inputProps={{
                            name: label,
                            id: 'uncontrolled-native',
                        }}
                        input={<BootstrapInput />}
                    >
                        {dataOption.map(option => {
                            return (
                                <option key={option.display} value={option.value}>
                                    {option.display}
                                </option>
                            );
                        })}
                    </NativeSelect>
                )}
            />
            {errors?.[name] && <p style={{ color: "red", fontSize: '0.7rem'}}>{errors[name]?.message}</p>}
        </FormControl>
    );
};



