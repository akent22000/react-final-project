import { Outlet, useOutletContext } from "react-router-dom";
import KittyCard from "./KittyCard";
import CharacterForm from "./CharacterForm";

function Home({ }) {
  const kittys = useOutletContext();
  const onAdd = useOutletContext();

  const displaykittys = kittys.map(kitty =>
    <KittyCard key={kitty.id} kitty={kitty} />);

  return (
    <main>
      <h1>Home</h1>
      {/* <Outlet context={kittys} /> */}

      <ul className="cards">{displaykittys}</ul>
    </main>
  );
};

export default Home;
