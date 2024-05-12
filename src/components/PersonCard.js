import React from 'react';
const PersonCard=({firstName, lastName, age, hairColor, onBirthday}) =>{
        return(
            <div className='person-card'>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={onBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
}
export default PersonCard;