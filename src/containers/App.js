import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [{id: 1, name: 'Douglas', age: 28}, {id: 2, name: 'Isabelle', age: 24}, {
                id: 3,
                name: 'Gilberto',
                age: 25
            }],
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        };
        console.log("[App.js] constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props, state);
        return state
    };

    componentDidMount() {
        console.log("Did mount from APP.js")
    };

    changeNameHandler = (event, id) => {
        const persons = this.state.persons.slice();

        const personIndex = persons.findIndex(p => {
            return p.id === id;
        });
        const person = persons[personIndex];
        person.name = event.target.value;

        persons[personIndex] = person;
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
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

    toggleCockpitHandler = () => {
        this.setState({showCockpit: !this.state.showCockpit})
    };

    loginHandler = () => {
        this.setState({authenticated: true})
    };

    render() {
        console.log('[App.js] render');
        console.log('Counter: ', this.state.changeCounter);
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.changeNameHandler}
            />;
        };

        return (
            <WithClass classes={classes.App}>
                <button onClick={this.toggleCockpitHandler}>Hide cockpit</button>
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            persons={this.state.persons}
                            clicked={this.togglePersonsHandler}
                        />) : null}
                    {persons}
                </AuthContext.Provider>
            </WithClass>
        )
    }
}

export default App;
