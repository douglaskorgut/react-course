import React, {useEffect, useRef} from "react";
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleButtonRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        // const timer = setTimeout(() => {
        //     alert('Saved data to the cloud!')
        // }, 1000);
        toggleButtonRef.current.click();

        return () => {
            // clearTimeout(timer);
            console.log("Cock pit cleanup work has been done!")
        };

    }, []);

    const cssClasses = [];
    let btnClass = '';

    if (props.showPersons){ btnClass = classes.Blue };

    if (props.persons.length <= 2){
        cssClasses.push(classes.red)
    }

    if (props.persons.length <= 1){
        cssClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={cssClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}> Toggle persons!
            </button>
            <AuthContext.Consumer>
                {context => <div> <button onClick={context.login}>Log in</button> </div>}
            </AuthContext.Consumer>

        </div>
    )
};

export default React.memo(cockpit);