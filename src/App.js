import './App.css';
import Navegation from './Components/Navegation';
import Hability from './Components/Hability';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Course from './Components/Course';
import Adress from './Components/Adress';
import About from './Components/About';

function App() {
  return (
    <div className="App">
        <Navegation />
        <div id="AllContent">
          <header>
            <About />
          </header>
          <main>
            <div id="containerMain">
              <section id="sectionLeft">
                <Adress />
                <Course />
                <Contact />
              </section>
              <section id="sectionRight">
                <Education />
                <Experience />
                <Hability />
              </section>
            </div>
          </main>
        </div>
    </div>
  );
}

export default App;
