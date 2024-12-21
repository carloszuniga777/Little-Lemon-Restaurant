import './InputButtonPrimary.css'

interface Props{
    name:string,
    backgroundColor?: string;
    textColor?: string,
    hoverColor?: string;   
}

export const InputButtonPrimary = ({ 
  name, 
  backgroundColor = '#007bff', 
  textColor = '#ffffff', 
  hoverColor = '#0056b3' 
}: Props) => {
  return (
    <div 
      className={`formulario-submit`} 
      style={{
        '--btn-bg-color': backgroundColor,
        '--btn-text-color': textColor,
        '--btn-hover-color': hoverColor,
      } as React.CSSProperties} // Aseguramos que las variables CSS sean válidas
    >
      <input
        type="submit"
        className="formulario-btn"
        value={name}
      />
    </div>
  );
};
