import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Blog from "./Components/Blog";
function App() {
  return <div className="App">
    <Header/>
    <Blog/>
    <Footer/>
  </div>;
}

export default App;
