import { createContext } from "react";
import { RegFormContextType } from "../interfaces/interfaces";

//1. Se crea el contexto
export const RegFormContext = createContext<RegFormContextType | undefined>(undefined);
