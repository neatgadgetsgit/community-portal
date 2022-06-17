import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Aside from "./components/aside/aside";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
		<Navigation />
		<Header />
		<div className="flex_container">
			<Main />
			<Aside />
		</div>
		<Footer />
    </div>
  );
}

export default App;
