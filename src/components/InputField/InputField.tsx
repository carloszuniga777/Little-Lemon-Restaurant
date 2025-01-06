
import { UseFormRegister, FieldError, Path, FieldValues } from 'react-hook-form';
import './InputField.css';
//import { useState } from 'react';

// Hacemos InputField un componente genérico con T como tipo para los valores del formulario
interface InputFieldProps<T extends FieldValues> {
  label: string;
  id: Path<T>;  
  type: string;
  register: UseFormRegister<T>;  
  errors?: { [key in keyof T]?: FieldError };  
  required?: boolean;
  valueProp?: string
}

export const InputField = <T extends FieldValues>({ label, id, type, register, errors, required = false}: InputFieldProps<T>) => {
  
  return (
    <div className="InputField-campo">
      <label htmlFor={String(id)} className="InputField-label">
        <span className="InputField-span">
          {label}
          {required && <abbr aria-label="required" className="InputField-requerido">*</abbr>}
        </span>
        <div className="InputField-input-container">
          <input type={type} id={String(id)} className="InputField-input" {...register(id)}/>
        </div>
      </label>
      {errors?.[id]?.message && <p style={{ color: "red", fontSize: '0.7rem'}}>{errors[id]?.message}</p>}
    </div>
  );
};

