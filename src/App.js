
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';


function App() {
  return (
      <div className='bg-neutral-50 h-full dark:bg-neutral-900'>
        <Navbar />
        <Header />
      
      </div>
  );
}

export default App;
