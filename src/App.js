import React, {useState} from "react";
import Nav from "./components/Nav/";
import Modal from './components/Modal';
import CancelModal from './components/CancelModal';

// import bg from './images/bg.jpg';
import bg from './images/banner.webp';

import './app.css';

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cancelModalIsOpen, setCancelModalIsOpen] = useState(false);
  const [cancelStep, setCancelStep] = useState(0);

   const [name, setName] = useState(null);
   
  return (
    <div className="App">
      <Nav 
        cancelModalIsOpen={cancelModalIsOpen}
        setCancelModalIsOpen={setCancelModalIsOpen}
        setCancelStep={setCancelStep}  
      />
      <CancelModal />
      <main className="main-container">
        <div className="hero">
          <img src={bg} alt="background" />
        </div>
        <div className="let-container">
          <div className="simulation">
            <h5>cotáfacil</h5>
            <h2>Faça a sua simulação agora mesmo</h2>
            <button className="orange" onClick={() => setIsOpen(true)}>Iniciar</button>
          </div>
            <button className="green">Assistência 24h</button>
        </div>
      </main>
      <Modal name={name} setName={setName} step={step} setStep={setStep} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <CancelModal 
        cancelModalIsOpen={cancelModalIsOpen}
        setCancelModalIsOpen={setCancelModalIsOpen}
        cancelStep={cancelStep}
        setCancelStep={setCancelStep}  
      />
    </div>
  );
}

export default App;
