import { useState } from "react";
import "./App.css";
import Mainwindow from "./components/mainwindow";
import Header from "./components/Header";
import AudioPlayer from "./components/MusicPlayer2";

function App() {
  //const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Mainwindow />
      <AudioPlayer />
    </>
  );
}

export default App;
