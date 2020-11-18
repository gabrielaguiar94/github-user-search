import React, { useState } from 'react';
import axios from 'axios';
import Form from '../../components/Form';
import UserInfo from '../../components/UserInfo';
import { User } from './types';
import './styles.css';

const BASE_URL = 'https://api.github.com/users';

const Search = () => {
    const [userInfo, setUserInfo] = useState<User>();

    const handleSearch = (search: string) => {

        axios(`${BASE_URL}/${search}`)
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(() => {
                alert('Não consegui encontrar o usuário')
            })
    }

    return (
        <>
            <div className="search-container">
                <Form onSearch={handleSearch} />
                {userInfo && (
                    <UserInfo user={userInfo} />
                )}
            </div>
        </>

    );
}



export default Search;