import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";


//create character example
// Cinnamoroll
// https://images.surferseo.art/875d2b5b-6648-4d3c-a3bf-a4e9b7f7271f.webp
// Cinnamoroll is a bit shy, he can spread happiness wherever he goes and make friends with everyone he meets
// March 6
// Dancing like his favorite pop idols



function CharacterForm() {
  const { onAdd } = useOutletContext();

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
      .then(data => onAdd(data))

    setName('')
    setImage('')
    setBio('')
    setBirthday('')
    setLikes('')
  }

  return (
    <div>
      <h1 className="pageName">Create a New Character!</h1>

      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text"
            id="fname"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder={"Character name"} />
          <input type="text"
            id="fname"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="Image URL" />
          <input type="text"
            id="fname"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Bio" />
          <input type="text"
            id="fname"
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            placeholder="Birthday" />
          <input type="text"
            id="fname"
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
