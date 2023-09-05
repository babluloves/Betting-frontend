import React from "react";
import { Header, Fotter } from "../component";
import Dashboard from "../pages/Dashboard"

export default function MenuLayout() {
  return (
    <div>
      <Header />
      <Dashboard/>
      <Fotter/>
    </div>
  );
}
