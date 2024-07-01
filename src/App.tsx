import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar/Navbar";
import Menu from "./componentes/Menu/menu";
import { Banner } from "./componentes/Banner/Banner";
import { Services } from "./componentes/ServicesPage/Services";
import { Carousel } from "./componentes/Carousel/Carousel";
import { Location } from "./componentes/Location/Location";
import { Footer } from "./componentes/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="app">
        <Navbar
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          closeDropdown={closeDropdown}
        />
        <Menu isOpen={isOpen} closeDropdown={closeDropdown} />
        <Banner />
        <Services />
        <Carousel />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;
