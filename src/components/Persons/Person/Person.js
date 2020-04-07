import React, {Component} from "react";
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        if (this.props.name === 'Isabelle') this.inputElementRef.current.focus();
    }

    render() {
        return (
                <WithClass className={classes.Person}>
                    {this.context.authenticated ? <p>Authenticated</p> : <p>Please log-in</p> }
                    <p onClick={this.props.click}> My name is {this.props.name}! and I'm {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
                </WithClass>
        )
    }
};
export default Person;
