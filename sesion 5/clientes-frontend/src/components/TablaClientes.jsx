import { useEffect, useState } from "react";

function TablaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("http://172.30.31.37:3000/clientes")
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
      });
  }, []);

  return (
    <div>
      <h1>Listado</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "lightblue",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Nombre
            </th>
            <th
              style={{
                backgroundColor: "lightblue",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Apellido
            </th>
            <th
              style={{
                backgroundColor: "lightblue",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Correo
            </th>
            <th
              style={{
                backgroundColor: "lightblue",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
            {
                clientes.map(cliente => {
                    return (
                        <tr>
                            <td>
                                {cliente.Nombre}
                            </td>
                            <td>
                                {cliente.Apellido}
                            </td>
                            <td>
                                {cliente.Email}
                            </td>
                            <td>
                                <button>Eliminar</button>
                                <button>Editar</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
}

export default TablaClientes;
