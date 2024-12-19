// Tipos del estado y las acciones del reducer

//1. Tipando el State

export type State = {
  user: {
      nombre: string,
      apellido: string,
      telefono: string,
      email: string
  };
  mesa: {
    ocasion: string,
    fecha: Date | null,
    hora: string,
    invitados: string
  }
  card: {
      numeroTarjeta: string;
      nombreTarjeta: string;
      expirationDate: string;
      cvv: string;
  };
  resumenPago: boolean;
  percent: number;
};


//2. Tipando el Action  

interface SetDataUserAction {
  type: 'SET_DATA_USER';
  data: State['user'];
}

interface SetDataCardAction {
  type: 'SET_DATA_CARD';
  data: State['card'];
}
                               
interface SetReservarMesaAction {
  type: 'SET_RESERVAR_MESA';
  data: State['mesa'];
}

interface SetResumenPagoAction{
  type: 'SET_RESUMEN_PAGO';
  data: State['resumenPago'];
}

interface ChangePercentAction {
  type: "CHANGE_PERCENT";
  data: State['percent'];
}

export type Action =
              |SetDataUserAction 
              |SetDataCardAction
              |SetReservarMesaAction
              |SetResumenPagoAction
              |ChangePercentAction



//3. Tipando el Context              

export type RegFormContextType = {  
  state: State, 
  dispatch: React.Dispatch<Action>
  };


