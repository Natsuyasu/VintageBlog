import { useState } from "react";
import "./App.css";
import MainInterface from "./components/MainInterface";
import Header from "./components/Header";
import AudioPlayer from "./components/MusicPlayer2";

function App() {
  //const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <MainInterface />
      <AudioPlayer />
    </>
  );
}

export default App;
