import React from  'react';
import style from '../styles/Card.css';

const Card = ({ name, flag, continent }) => {
    return (
        <div className={style.contaner}>
            <div className={style.imgContainer}>
                <img src={flag} alt={`${name} flag`}/>
            </div>
            <div className={style.infoContainer}>
                <h4 className={style.nameCountry}>{name}</h4>
                <h4>Continent</h4>
                <p>{continent}</p>
            </div>
        </div>
    )
}

export default Card