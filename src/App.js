
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Skills } from './components/Skills';


function App() {
  return (
      <div className='bg-neutral-50 h-full dark:bg-neutral-900'>
        <Navbar />
        <Header />
        <Skills />
      
      </div>
  );
}

export default App;
