
import "./Page.css";
import { Especialidades } from "./Especialidades/Especialidades";
import { Presentacion } from "./Presentacion/Presentacion";
import { Clientes } from "./Clientes/Clientes";
import { Acerca } from "./Acerca/Acerca";
import { Footer } from "./Footer/Footer";

export const Page = () => {
  return (
    <main className="main">
      <Presentacion/>
      <Especialidades/>
      <Clientes/>
      <Acerca/>
      <Footer/>
    </main>
  );
};
