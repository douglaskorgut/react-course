import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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

        if (this.state.showPersons) {
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changeNameHandler}
            />;
        };

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>

        )
    }
}

export default App;
