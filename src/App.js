import { useState } from 'react';
import About from './Components/About';
import CateringAndEvents from './Components/CateringAndEvents';
import Hero from './Components/Hero';
import Landing from './Components/Landing';
import LocationAndInfo from './Components/LocationAndInfo';
import Menu from './Components/Menu';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import "./App.css";


function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
   if (currentPage === "Main") {
      return <Landing />;
    }
    if (currentPage === "Location & Info") {
      return <LocationAndInfo />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Menu") {
      return <Menu />;
    }
    if (currentPage === "Catering & Events") {
      return <CateringAndEvents />;
    }
    if (currentPage === "Gallery") {
      return <Gallery />;
    }
    
  };

  

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="back">
      <Hero></Hero>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main className="Main" id="Main">{renderPage()}</main>
      <body className="Body">
        <div className="BodyContainer">
        </div>
      </body>
      <Footer/>
      </div>
  
     

   

      
 
   
    
    
  );
}

export default App;