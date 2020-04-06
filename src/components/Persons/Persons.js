import React from 'react'
import Person from "./Person/Person";

const persons = (props) => {
    return (
        <div>
            {props.persons.map((person,index) =>{
                return <Person
                    click={() => props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => props.changed(event,person.id)}
                    key={person.id}
                />
            })}
        </div>
    )
};

export default persons;