import React from 'react'
import Person from "./Person/Person";

class Persons extends React.Component {

    componentWillUnmount() {
        console.log("Put in here code that is going to destroy connections and do some clean-up!")
    }
    render() {
        return (
            <div>
                {this.props.persons.map((person,index) =>{
                    return <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event,person.id)}
                        key={person.id}
                    />
                })}
            </div>
        )
    }
};

export default Persons;