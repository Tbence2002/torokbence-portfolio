import React, {useState, Suspense} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import 'react-vertical-timeline-component/style.min.css';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary';

const Rolam = React.lazy(()=> import("./components/Rolam"));
const IsmerjenMeg = React.lazy(()=> import("./components/IsmerjenMeg"));
const Munkaim = React.lazy(()=> import("./components/Munkaim"));
const Kapcsolat = React.lazy(()=> import("./components/Kapcsolat"));
const Footer = React.lazy(()=> import("./components/Footer"));

function App() {
  const [next, setNext] = useState(1);

  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <IsmerjenMeg/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Rolam/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Munkaim next={next} setNext={setNext}/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Kapcsolat/>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
