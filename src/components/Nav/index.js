import React, {useRef} from 'react'
import Logo from '../../images/logo.svg';
import avatar from '../../images/avatar.jpg'
import './style.css'

const Nav = ({cancelModalIsOpen , setCancelModalIsOpen, setCancelStep}) => {
    
    const options = useRef();
    let visible = false;

    const showOptions = () => {
        if(!visible) {
            options.current.classList.remove('hidde');
        } else {
            options.current.classList.add('hidde');
        }
        visible = !visible;
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!cancelModalIsOpen) {
            setCancelModalIsOpen(true);
            setCancelStep(0);
        } else {
            setCancelModalIsOpen(false);
        }
    }
    return (
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="nav-itens">
                <ul>
                    <li className="active">
                        <a href="/#">Inicío</a>
                        </li>
                    <li>
                        <a href="/#">Produtos</a>
                    </li>
                    <li>
                        <a href="/#">Empresa</a>
                    </li>
                    <li>
                        <a href="/#">Contato</a>
                    </li>
                    <li className="avatar-options">
                        <div className="avatar" onClick={showOptions}>
                            <img src={avatar} alt="avatar" />
                        </div>

                        <div className="options hidde" ref={options}>
                            <ul>
                                <li>
                                    <a href="/#">Perfil</a>
                                </li>
                                <li>
                                    <a href="/#">Planos</a>
                                    </li>
                                <li className="cancelar">
                                    <a href="/#" onClick={(e) => handleSubmit(e)}>Cancelar</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                </div>
                
            </nav>
        </div>
    )
}

export default Nav
