import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";


//App Structure
// App
// ├── Header
// ├── NavBar
// ├── Home - Kittys
// │   └── KittyCard - Kitty
// ├── Profile - Kitty
// ├── CharacterForm


function App() {
  const [kittys, setKittys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/kittys")
      .then(r => r.json())
      .then(data => setKittys(data))
      .catch(error => console.error(error));
  }, []);

  const onAdd = (newKitty) => {
    setKittys([...kittys, newKitty])
  }

  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <Outlet context={{ kittys: kittys, setKittys: setKittys, onAdd: onAdd }} />
    </>
  );
};
export default App

