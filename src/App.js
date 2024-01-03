import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Rolam from './components/Rolam';
import Munkaim from './components/Munkaim';
import Kapcsolat from './components/Kapcsolat';
import Footer from './components/Footer';
import 'react-vertical-timeline-component/style.min.css';
import IsmerjenMeg from './components/IsmerjenMeg';

function App() {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <IsmerjenMeg/>
      <Rolam/>
      <Munkaim/>
      <Kapcsolat/>
      <Footer/>
    </div>
  );
}

export default App;
