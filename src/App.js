import './App.css';
import React, {useState} from 'react';
import PersonCard from './components/PersonCard';
const App = () => {
  const [people, setPeople] = useState([
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Filmord", age: 50, hairColor: "Brown" },
    { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }
  ]);
  const handleBirthday = (index) => {
    const updatePeople = [...people];
    updatePeople[index].age +=1;
    setPeople(updatePeople);
  }
  return (
    <div className='app'>
      {people.map((person, index)=>(
        <PersonCard 
        lastName={person.lastName}
        firstName={person.firstName}
        age={person.age}
        hairColor={person.hairColor}
        onBirthday={() => handleBirthday(index)} 
        />
      )
    )}
    </div>
  );
}

export default App;
