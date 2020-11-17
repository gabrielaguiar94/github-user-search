import React from 'react';
import ButtonIcon from '../../components/ButtonIcon'
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <>
            <div className="home-text-title">
                <h4 >Desafio do Capítulo 3, Bootcamp DevSuperior</h4>
            </div>
            <div className="home-text-subtitle">
                <p>
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior
                </p>
                <p>
                    Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
                </p>
                <p>
                    Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="antforfigma@gmail.com">antforfigma@gmail.com</a> 
                </p>
                <Link to ="/search">
                    <ButtonIcon text="Começar" />
                </Link>
                
            </div>
        </>
    );
}

export default Home;