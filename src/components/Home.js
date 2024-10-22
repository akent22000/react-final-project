
import React, { useState, useEffect } from "react";
import KittyList from "./KittyList";

function Home() {

  const [showForm, setShowForm] = useState(false);
  const [kittys, setKittys] = useState([])


  useEffect(() => {
    fetch('http://localhost:6001/kittys')
      .then((r) => r.json())
      .then((kittys) => setKittys(kittys))

  }, [])



  return (
    <KittyList
      kittys={kittys} />
  );
}

export default Home;
