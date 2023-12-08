import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Rolam from './components/Rolam';
import Munkaim from './components/Munkaim';
import Kapcsolat from './components/Kapcsolat';
import Footer from './components/Footer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <Rolam/>
      <Munkaim/>
      <Kapcsolat/>
      <Footer/>
    </div>
  );
}

export default App;
