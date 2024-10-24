import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

function CharacterForm() {
  const kittys = useOutletContext();
  const onAdd = useOutletContext();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [likes, setLikes] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:6001/kittys', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },

      body: JSON.stringify({
        name: name,
        image: image,
        bio: bio,
        birthday: birthday,
        likes: likes,
      }),
    })
      .then((r) => r.json())
      .then(data => onAdd(data)) //THIS STATE UPDATE IS REQUIRED!!!

  }


  return (
    <div>
      <h1>Create a New Character!</h1>

      <div className="new-plant-form">
        <form onSubmit={handleSubmit}>
          <input type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"Character name"} />
          <input type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="Image URL" />
          <input type="text"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Bio" />
          <input type="text"
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            placeholder="Birthday" />
          <input type="text"
            name="likes"
            onChange={(e) => setLikes(e.target.value)}
            value={likes}
            placeholder="Likes" />
          <button type="submit" >Add Character</button>
        </form>
      </div>
    </div>
  );
}

export default CharacterForm;
