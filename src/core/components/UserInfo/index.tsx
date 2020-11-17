import React from 'react';
import '../../../App.css';
import './styles.css';

const UserInfo = () => {
    return (
        <div className="user-container">
            <div className="user-info">
                <div className="user-info-avatar-content">                    
                    <img
                        src="https://avatars1.githubusercontent.com/u/61738003?v=4"
                        alt="Avatar User"
                        className="user-info-avatar"
                    />
                    <button className="btn btn-primary">
                        Ver perfil
                    </button>
                </div>
                <div>
                    <div className="badges-content">
                        <span className="badge-item user-info-item">
                            Repositório públicos: 62
                        </span>
                        <span className="badge-item user-info-item">
                            Seguidores: 127
                        </span>
                        <span className="badge-item user-info-item">
                            Seguindo: 416
                        </span>
                    </div>
                    <div className="user-info-content user-info-item">
                        <h3>Informações</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;