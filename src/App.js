import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';



function App() {
  return (
      <div className='bg-neutral-50  dark:bg-neutral-900'>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer /> 
      </div>
  );
}

export default App;
