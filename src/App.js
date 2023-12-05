import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Kapcsolat from './components/Kapcsolat';
import Munkaim from './components/Munkaim';
import Rolam from './components/Rolam';

function App() {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <Rolam/>
      <Munkaim/>
      <Kapcsolat/>
    </div>
  );
}

export default App;
