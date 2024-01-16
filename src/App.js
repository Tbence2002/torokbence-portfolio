import React, {Suspense, lazy, useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import 'react-vertical-timeline-component/style.min.css';

const Rolam = lazy(() => import('./components/Rolam'));
const Munkaim = lazy(() => import('./components/Munkaim'));
const Kapcsolat = lazy(() => import('./components/Kapcsolat'));
const Footer = lazy(() => import('./components/Footer'));
const IsmerjenMeg = lazy(() => import('./components/IsmerjenMeg'));

function App() {
  const [next, setNext] = useState(1);

  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <Suspense fallback={<div>Betöltés...</div>}>
       <IsmerjenMeg/>
      </Suspense>

      <Suspense fallback={<div>Betöltés...</div>}>
        <Rolam/>
      </Suspense>

      <Suspense fallback={<div>Betöltés...</div>}>
        <Munkaim next={next} setNext={setNext}/>
      </Suspense>

      <Suspense fallback={<div>Betöltés...</div>}>
        <Kapcsolat/>
      </Suspense>

      <Suspense fallback={<div>Betöltés...</div>}>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
