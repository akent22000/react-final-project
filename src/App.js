import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";


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


  const contextObj = {
    name: "Amanda",
    kittys: kittys,
    onAdd: onAdd,
  }

  ///look up context lab in useState


  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <Outlet context={contextObj} />
    </>
  );
};
export default App

