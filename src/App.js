import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import {white} from "color-name";
import styled from 'styled-components'

// const App = props => {
//
//     const [ personsState, setPersonsState ] = useState({
//         persons: [{name: 'Douglas', age: 28}, {name: 'Isabelle', age: 24}]
//     });
//
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons:[{name: 'Manobrow', age: 18}, {name: 'Manabraw', age: 19}]
//         })
//     };
//
//     return (
//             <div className="App">
//               <h1>Hi, I'm a React APP!</h1>
//                 <button onClick={switchNameHandler} >Switch name!</button>
//                 <Person
//                     name={personsState.persons[0].name}
//                     age={personsState.persons[0].age}
//                 />
//                 <Person
//                     name={personsState.persons[1].name}
//                     age={personsState.persons[1].age}/>
//             </div>
//     )
// };


const StyledButton = styled.button`
            background-color: ${props => props.alt ? 'blue':'green'};
            color: white;
            font: inherit;
            border: 1px solid green;
            padding-bottom: 8px;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.alt ? 'lightblue' : 'lightgreen'};
                color: black;
            }
        `;

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
                    <StyledButton alt={this.state.showPersons} onClick={() => this.togglePersonsHandler()}>Toggle persons!</StyledButton>
                    {persons}
                </div>
        )
    }
}

export default App;
