import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person.js'

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

        persons[personIndex] = person;
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
        let persons = null;
        let btnClass = '';

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

            btnClass = classes.Blue
        };

        const cssClasses = [];

        if (this.state.persons.length <= 2){
            cssClasses.push(classes.red)
        }
        if (this.state.persons.length <= 1){
            cssClasses.push(classes.bold)
        }

        return (
                <div className={classes.App}>
                    <h1>Hi, I'm a React APP!</h1>
                    <p className={cssClasses.join(' ')}>This is really working!</p>
                    <button className={btnClass} onClick={() => this.togglePersonsHandler()}>Toggle persons!</button>
                    {persons}
                </div>
        )
    }
}

export default App;
