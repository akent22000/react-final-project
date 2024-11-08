import { Outlet, useOutletContext } from "react-router-dom";
import KittyCard from "./KittyCard";


function Home() {
  const { kittys } = useOutletContext();

  const displaykittys = kittys.map(kitty =>
    <KittyCard key={kitty.id} kitty={kitty} />);

  return (
    <main>
      <h1 className="pageName">Home</h1>
      <ul className="cards">{displaykittys}</ul>
    </main>
  );
};

export default Home;



