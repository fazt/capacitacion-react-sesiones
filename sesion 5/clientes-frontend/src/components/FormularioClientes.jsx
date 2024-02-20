import { useState } from "react";

const FormularioClientes = () => {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();

  const enviandoDatos = () => {
    // promises -> async/await
    fetch("http://localhost:3000/clientes", {
      method: "POST",
      body: JSON.stringify({
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setNombre("");
        setApellido("");
        setEmail("");
      });
  };

  return (
    <div>
      <h1>Agregar datos al formulario </h1>

      <div>
        <label htmlFor="nombre">NOMBRE</label>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <label htmlFor="apellido">APELLIDO</label>
        <input
          value={apellido}
          type="text"
          placeholder="Apellido del cliente"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />

        <label htmlFor="email">E-MAIL</label>
        <input
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input type="submit" value="Enviar" onClick={enviandoDatos} />
      </div>
    </div>
  );
};

export default FormularioClientes;
