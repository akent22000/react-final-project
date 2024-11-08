import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const [kitty, setKitty] = useState([]);
  const params = useParams();
  const kitttyId = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/kittys/${kitttyId}`)
      .then(r => r.json())
      .then(kitty => setKitty(kitty))
      .catch(error => console.error(error))
  }, [kitttyId]);


  return (
    <div className="container">
      <h1 className="pageName">About Me</h1>
      <div className="profileContainer">
        <h4>{kitty.name}</h4>
        <p><b>About Me:</b> {kitty.bio}</p>
        <p><b>Birthday:</b> {kitty.birthday}</p>
        <p><b>Likes:</b> {kitty.likes}</p>
      </div>
    </div>
  );
}

export default Profile;
