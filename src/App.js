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


function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Catering />;
    }
    if (currentPage === "Portfolio") {
      return <Landing />;
    }
    if (currentPage === "Contact") {
      return <Menu />;
    }
    if (currentPage === "Movie") {
      return <OrderContact />;
    }
    if (currentPage === "Movie") {
      return <ContactForm />;
    }
    if (currentPage === "Movie") {
      return <Footer/>;
    }
  };

  

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="back">
      <Hero></Hero>
      <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
      <main id="Main">{renderPage()}</main>
      <About/>
      <Catering/>
      <Landing/>
      <Menu/>
      <OrderContact/>
      <ContactForm/>
      <Footer/>
    </div>
    
    
  );
}

export default App;