import http from "http";
import randomNumber from "./libs/randomNumber.js";

http
  .createServer(function (request, response) {
    // obteniendo informacion del usuario
    console.log(request.url);
    console.log("Alguien llego a la pagina".rainbow);

    // generar numero aleatorio y devolver al cliente
    let number = randomNumber();

    // responder al cliente
    response.write(number.toString());
    response.end();
  })
  .listen(3000);

console.log("Servidor iniciado".magenta);
