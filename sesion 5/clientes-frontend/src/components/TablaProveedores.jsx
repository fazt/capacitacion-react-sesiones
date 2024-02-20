import { useEffect, useState } from "react"

function TablaProveedores(){

    const [proveedores, setProveedores] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/proveedores")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setProveedores(data);
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
                  Direccion
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
                    proveedores.map(proveedor => {
                        return (
                            <tr>
                                <td>
                                    {proveedor.Nombre}
                                </td>
                                <td>
                                    {proveedor.Direccion}
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

export default TablaProveedores