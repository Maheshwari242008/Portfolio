import Navbar from './components/navbar/navbar';
import Home from './components/Home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Exp from './components/Experience/exp';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="exp">
        <Exp />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}


export default App;
