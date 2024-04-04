import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Testimonials from './components/testimonials/testimonials.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';
import Hero from './components/hero/hero.js';
import Services from './components/services/services.js';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
