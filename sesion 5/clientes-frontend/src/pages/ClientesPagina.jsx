import FormularioClientes from "../components/FormularioClientes";
import TablaClientes from "../components/TablaClientes";

function ClientesPagina() {
  return (
    <div>
      <h1>Pagina de Clientes</h1>

      <FormularioClientes />

      <TablaClientes />
    </div>
  );
}
export default ClientesPagina;
