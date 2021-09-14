import React from 'react';
import emoji from '../../images/emoji.png';

import './style.css';

const CancelModal = ({cancelModalIsOpen, setCancelModalIsOpen, cancelStep, setCancelStep,}) => {

    const updateModal = () => {
        if(cancelStep === 1) {
            setCancelStep(-1);
            setCancelModalIsOpen(false);
        } else {
            setCancelStep((prevStep) => prevStep += 1);
        }        
    }
    return (
        <>
            {cancelModalIsOpen ? (
                <div className="overlay">
                    <div className="close-cancel-modal" onClick={() => setCancelModalIsOpen(false)}>x</div>
                {cancelStep === 0 && (
                     <div className="container-info">
                        <div className="emoji">
                            <img src={emoji} alt='emoji' />
                        </div>
                        <h1>Poxa!!</h1>
                        <h3>Que triste que vai nos abandonar</h3>
                        <form action="#" className="feedback">
                            <p>Se não for muito incômodo,nos diga o porque está cancelando</p>
                            <textarea name="message" id="message" cols="30" rows="10" ></textarea>
                            <button 
                                type="submit"
                                className="red-button"
                                onClick={updateModal}>
                                    Continuar
                            </button>
                        </form>
                    </div>
                )}
    
                {cancelStep === 1 && (
                    <div className="container-info" onClick={updateModal}>
                        <div className="emoji">
                            <img src={emoji} alt='emoji' />
                        </div>
        
                        <div className="message-container">
                            <h1>Que triste que você nos deixou.</h1>
                            <p>
                                Nossa equipe entrará em contato caso precise de alguma coisa.
                            </p>
        
                            <footer>
                                <h5>
                                    Agradecemos esse tempo conosco, e até a próxima!
                                </h5>
                            </footer>
                        </div>
                    </div>
                    )}
                    
                </div>
                ) : null}
        </>
    )
}

export default CancelModal;
