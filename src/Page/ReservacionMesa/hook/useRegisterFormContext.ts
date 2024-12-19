import { RegFormContext } from "../context/RegisterFormContext"
import { useContext } from 'react';
import { RegFormContextType } from "../interfaces/interfaces";

//Custom hook para usar el context hook
export const useRegisterFormContext = (): RegFormContextType => {
  const context = useContext(RegFormContext);
  if (!context) {
      throw new Error("useRegisterFormContext debe usarse dentro de RegisterFormProvider");
  }
  return context;
};