import React from "react";
import MenuLayout from "./layout/MenuLayout";


export default function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<MenuLayout />} />
    </Routes>
    </Router>
  )
}
