import { useEffect, useState } from "react";

function TablaProductos() {
    const [productos, setproductos] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/productos")
        .then((response) => response.json())
        .then((data) => {
          setproductos(data);
        });
    }, []);
  
    return (
      <div>
        <h1>Catalogo de Productos</h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "yellow",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                Id
              </th>
              <th
                style={{
                  backgroundColor: "yellow",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                Nombre
              </th>
              <th
                style={{
                  backgroundColor: "yellow",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                Precio
              </th>
              <th
                style={{
                  backgroundColor: "yellow",
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
                  productos.map(productos => {
                      return (
                          <tr>
                              <td>
                                  {productos.Id}
                              </td>
                              <td>
                                  {productos.Nombre}
                              </td>
                              <td>
                                  {productos.Precio}
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
  
  export default TablaProductos;