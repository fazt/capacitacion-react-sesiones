import React from "react";
import { render } from "react-dom";
import { ClientList1 } from "./components/ClientList1";
import { ClientList2 } from "./components/ClientList2";
import { ClientList3 } from "./components/ClientListe3";

function App() {
  return (
    <div>
      <ClientList1 nombre="JORGE" />
      <ClientList2 nombre="Alonso" />
      <ClientList3 nombre="Fazt" />
    </div>
  );
}

render(App(), document.getElementById("root"));
