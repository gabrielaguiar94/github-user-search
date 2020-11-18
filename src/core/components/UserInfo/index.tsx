import React, { useEffect, useState } from 'react';
import ImageLoader from '../../pages/Search/components/Loaders/ImageLoader';
import InfoLoader from '../../pages/Search/components/Loaders/InfoLoader';
import { User } from '../../pages/Search/types';
import dayjs from 'dayjs'

import axios from 'axios';
import '../../../App.css';
import './styles.css';

type Props = {
    user: User;
}

const BASE_URL = 'https://api.github.com/users';

const UserInfo = ({ user }: Props) => {

    const newDate = dayjs(user.created_at).format('DD/MM/YYYY');

    const [userResponse, setUserResponse] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/${userResponse}`)
            .then(response => setUserResponse(response.data))
            .finally(() => {
                setIsLoading(false)
            })

    }, [userResponse]);

    return (
        <div className="user-container">
            <div className="user-info">
                <div className="user-info-avatar-content">
                    {isLoading ? <ImageLoader /> : (
                        <>
                            <img
                                src={user.avatar_url}
                                alt="Avatar User"
                                className="user-info-avatar"
                            />
                            <a
                                href={`https://github.com/${user.login}`}
                                className="btn btn-primary"
                                target="new"
                            >
                                Ver perfil
                                </a>
                        </>
                    )}
                </div>
                {isLoading ? <InfoLoader /> : (

                    <div className="user-info-details">
                        <div className="badges-content">
                            <span className="badge-item user-info-item">
                                Repositório públicos: {user.public_repos}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguidores: {user.followers}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguindo: {user.following}
                            </span>
                        </div>
                        <div className="user-info-content user-info-item">
                            <h3 className="user-info-title">Informações</h3>
                            <div className="user-info-details-item user-info-item">
                                <strong>Empresa: </strong> {user.company}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Website/Blog: </strong> {user.blog}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Localidade: </strong> {user.location}
                            </div>
                            <div className="user-info-details-item user-info-item">
                                <strong>Membro desde: </strong> {newDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserInfo;