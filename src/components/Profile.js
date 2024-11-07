import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {

  //We can now use the data contained in our params object to access the specific piece of data we want to display! We can interpolate the id of the user into a fetch request URL and fetch that user's specific information from our backend

  const [kitty, setKitty] = useState({});
  const params = useParams();
  const kitttyId = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/kittys/${kitttyId}`)
      .then(r => r.json())
      .then(kitty => setKitty(kitty))
      .catch(error => console.error(error))
  }, [kitttyId]);// <-- WHAT IS THIS DOING?
  //Now, if you try running the code again, the side effect will only run when the count variable changes.

  //useEffect(
  // 1st arg: side effect (callback function)
  //() => console.log("useEffect called"),
  // 2nd arg: dependencies array
  //[count]
  //);


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
