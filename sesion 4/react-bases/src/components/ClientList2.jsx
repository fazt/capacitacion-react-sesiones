import { ClientItem2 } from "./ClientItem2";

export function ClientList2(params) {
  return (
    <div>
      <h1>LISTADO DE {params.nombre}</h1>
      <ClientItem2
        nombre="Jorge"
        apellido="Osuna"
        correo="abc@gmail.com"
        numero="666"
      />
    </div>
  );
}
