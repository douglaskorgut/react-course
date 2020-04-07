import React, {Component} from "react";
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        return (
            <Aux className={classes.Person}>
                <p onClick={this.props.click}> My name is {this.props.name}! and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
};
export default Person;
