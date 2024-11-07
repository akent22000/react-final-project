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
  //[] array destructuring, setter function
  const [kittys, setKittys] = useState([]);

  //fetch array objects
  useEffect(() => {
    fetch("http://localhost:6001/kittys")
      .then(r => r.json())
      .then(data => setKittys(data))
      .catch(error => console.error(error));
  }, []); //<-- array dependency
  //The side effect will only run the first time our component renders!

  //useEffect(() => {}): No dependencies array
  //Run the side effect every time our component renders (whenever state or props change)
  //useEffect(() => {}, []): Empty dependencies array
  //Run the side effect only the first time our component renders
  //useEffect(() => {}, [variable1, variable2]): Dependencies array with elements in it
  //Run the side effect any time the variable(s) change

  //use the spread operator to access kittys array, add newKitty object to kittys array 
  //Here, we're using the spread operator (...) to make a copy of our foods array, and insert each element into a new array.
  const onAdd = (newKitty) => {
    setKittys([...kittys, newKitty])
  }

  //pass objects key value pairs to context 
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

