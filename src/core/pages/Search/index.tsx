import React from 'react';
import './styles.css';

const Search = () => (
    <div className="search-card">
        <h4 className="search-title">
            Encontre um perfil no Github
        </h4>
        <form className="search-input">
            <input type="text" className="search-input-text" placeholder="Usuário Github" />
        </form>
        <div>
            <button className="btn-search">
                <h3 className="btn-search-text">
                Encontrar
                </h3>
            </button>
        </div>
    </div>
)

export default Search;