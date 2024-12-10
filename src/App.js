import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { BubbleComponent } from './components/BubbleComponent';



function App() {
  return (
      <div className='bg-neutral-50  dark:bg-neutral-900'>
        <BubbleComponent />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer /> 
      </div>
  );
}

export default App;





  