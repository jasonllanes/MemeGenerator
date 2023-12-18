import React from "react";
import Data from "./Data";

export default function Meme() {
  function click() {
    console.log("click");
  }

  const [image, setImage] = React.useState("");

  function getMeme() {
    const memesArray = Data.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[randomMeme].url);
    setImage(memesArray[randomMeme].url);
  }

  return (
    <main className="meme">
      <form className="form">
        <input type="text" className="form-inputs" placeholder="Top Text" />
        <input type="text" className="form-inputs" placeholder="Bottom Text" />
        <button type="button" className="form-button" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </form>
      <img src={image} alt="" className="meme-image" />
    </main>
  );
}
