import React, {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rolam from './components/Rolam';
import Munkaim from './components/Munkaim';
import Kapcsolat from './components/Kapcsolat';
import Footer from './components/Footer';
import IsmerjenMeg from './components/IsmerjenMeg';
import './App.css';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const [next, setNext] = useState(1);

  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <IsmerjenMeg/>
      <Rolam/>
      <Munkaim next={next} setNext={setNext}/>
      <Kapcsolat/>
      <Footer/>
    </div>
  );
}

export default App;
