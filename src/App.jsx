import { useState } from "react";
import NavScroll from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavScroll />
      <ItemListContainer greeting=" Hello World Coder House Primera Entrega" />
    </div>
  );
}

export default App;
