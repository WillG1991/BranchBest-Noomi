import { useState } from 'react';
import About from './Components/About';
import Catering from './Components/Catering';
import Hero from './Components/Hero';
import Landing from './Components/Landing';
import Menu from './Components/Menu';
import Nav from './Components/Nav';
import OrderContact from './Components/OrderContact';
import ContactForm from './Components/Contact';
import Footer from './Components/Footer';
import "./App.css";


function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Catering") {
      return <Catering />;
    }
    if (currentPage === "Landing") {
      return <Landing />;
    }
    if (currentPage === "Menu") {
      return <Menu />;
    }
    if (currentPage === "OrderContact") {
      return <OrderContact />;
    }
    if (currentPage === "Contact") {
      return <ContactForm />;
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