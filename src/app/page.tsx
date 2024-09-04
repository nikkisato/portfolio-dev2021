import Hero from '../Component/Hero/Hero';
import About from '../Component/About/About';
import Projects from '../Component/Projects/Projects';
import Nav from '../Component/Nav/Nav';
import Contact from '../Component/Contact/Contact';
import Footer from '../Component/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
