export function ClienItem1({ nombre, apellido, correo, numero }) {
  return (
    <div style={{background: "skyblue", margin: 2}}>
      <h2>
        NOMBRE {nombre} APELLIDO {apellido}
      </h2>
      <h2>CORREO{correo}</h2>
      <h2>NUMERO {numero}</h2>
    </div>
  );
}
