import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-flex">
        <button className="btn-icon">
            <h5 className="btn-icon-text">
                {text}
            </h5>
        </button>
    </div>

);

export default ButtonIcon;