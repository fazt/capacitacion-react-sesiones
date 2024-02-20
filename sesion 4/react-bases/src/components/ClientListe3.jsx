import { useEffect, useState } from "react";
import { ClienItem1 } from "./ClienItem1";

export function ClientList3(props) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clientes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setClientes(data);
      });
  }, []);

  return (
    <div>
      <h1>LISTADO DE {props.nombre}</h1>
      {clientes.map((cliente) => {
        return (
          <ClienItem1
            nombre={cliente.Nombre}
            apellido={cliente.Apellido}
            correo={cliente.Email}
            numero={cliente.Numero}
          />
        );
      })}
    </div>
  );
}
