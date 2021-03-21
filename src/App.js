import './App.css';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';
import Nav from './Component/Nav/Nav';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className='app'>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
