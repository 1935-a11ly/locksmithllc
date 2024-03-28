import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
// import About from './components/aboutus/aboutus.js';
// import Contact from './components/contact/contact.js';
// import Footer from './components/footer/footer.js';
import Hero from './components/hero/hero.js';
// import Services from './components/services/services.js';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      {/* <About/>
      <Contact/>
      <Footer/>
      <Services/> */}
    </div>
  );
}

export default App;
