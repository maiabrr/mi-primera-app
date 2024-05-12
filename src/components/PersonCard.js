import React from 'react';
const PersonCard=({firstName, lastName, age, hairColor}) =>{
        return(
            <div className='person-card'>
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
}
export default PersonCard;