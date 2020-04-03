import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [{id: 1, name: 'Douglas', age: 28}, {id: 2, name: 'Isabelle', age: 24}, {id: 3, name: 'Lisandra', age: 25}],
        showPersons: false
    };


    changeNameHandler = (event, id) => {
        const persons = this.state.persons.slice();

        const personIndex = persons.findIndex(p => {
            return p.id === id;
        });
        const person = persons[personIndex];
        person.name = event.target.value;

        persons[personIndex] = person
        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons.slice();
        persons.splice(index, 1)
        this.setState({persons: persons})
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid green',
            paddingBottom: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = <div>
                {this.state.persons.map((person,index) =>{
                    return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.changeNameHandler(event,person.id)}
                        key={person.id}
                    />
                })}
            </div>;
        }

        const classes = [];

        if (this.state.persons.length <= 2){
            classes.push('red')
        }
        if (this.state.persons.length <= 1){
            classes.push('bold')
        }

        return (
                <div className="App">
                    <h1>Hi, I'm a React APP!</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button className='button' onClick={() => this.togglePersonsHandler()}>Toggle persons!</button>
                    {persons}
                </div>
        )
    }
}

export default App;
