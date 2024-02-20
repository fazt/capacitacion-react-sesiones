import { ClienItem1 } from "./ClienItem1";

export function ClientList1(params) {
  return (
    <div>
      <h1>LISTADO DE {params.nombre}</h1>
      <ClienItem1
        nombre="Jorge"
        apellido="Osuna"
        correo="abc@gmail.com"
        numero="666"
      />
    </div>
  );
}
