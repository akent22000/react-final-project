import { Outlet, useOutletContext } from "react-router-dom";
import KittyCard from "./KittyCard";

function Home() {
  const kittys = useOutletContext();
  const displaykittys = kittys.map(kitty =>
    <KittyCard key={kitty.id} kitty={kitty} />);

  return (
    <main>
      <Outlet context={kittys} />
      <ul className="cards">{displaykittys}</ul>
    </main>
  );
};

export default Home;
