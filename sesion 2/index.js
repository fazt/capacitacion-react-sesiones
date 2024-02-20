import express from "express";
import { writeFileSync, readFileSync } from "fs";
import { v4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/productos", (request, response) => {
  response.send("Listado de productos");
});

app.post("/productos", (request, response) => {
  response.send("Creando un producto");
});

app.get("/categorias", (request, response) => {
  response.send("Listado de categorías");
});

app.get("/usuarios", (request, response) => {
  const users = readFileSync("usuarios.json", "utf-8");
  response.json(JSON.parse(users));
});

app.post("/usuarios", (request, response) => {
  const newUser = request.body;

  //   leer archivo
  const data = readFileSync("usuarios.json", "utf-8");
  //   console.log(data);

  if (!data) {
    newUser.id = v4();
    writeFileSync("usuarios.json", JSON.stringify([newUser]));
  } else {
    const users = JSON.parse(data);
    newUser.id = v4();
    users.push(newUser);
    writeFileSync("usuarios.json", JSON.stringify(users));
  }

  response.send("Usuario creado");
});


app.get(
  "/usuarios/:usuarioId",
  (request, response) => {
    const userId = request.params.usuarioId

    const users = JSON.parse(readFileSync("usuarios.json", "utf-8"));
    const userFound = users.find(user => user.id === userId)

    if (!userFound) {
        response.send("Usuario no encontrado")
    } else {
        response.json(userFound)
    }

  }
);

app.delete('/usuarios/:id', (request, response) => {
    const userId = request.params.id
    response.send('Eliminando usuario ' + userId)
})

app.put('/usuarios/:id', (request, response) => {
    const userId = request.params.id
    response.send('Actualizando usuario ' + userId)
})

app.get("/facturas", (request, response) => {
  response.send("Listado de facturas");
});

app.listen(3000);
console.log("Servidor Iniciado");
