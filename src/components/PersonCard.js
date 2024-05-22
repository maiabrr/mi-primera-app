import React from 'react';
const PersonCard=props =>{
        return(
            <div className='person-card'>
                <h2>{props.lastName}, {props.firstName}</h2>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <button onClick={props.onBirthday}>Birthday Button for {props.firstName} {props.lastName}</button>
            </div>
        );
}
export default PersonCard;