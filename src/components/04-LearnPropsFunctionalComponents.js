/** 
 * Props short for properties, is the optional input that your component can accept.
 * It also allows the component content to be dynamic.
 *
 * All content must wrap in one container.
 * To print child element form props us `{props.children}`
 */

 import React from 'react';

 const LearnPropsFunctionalComponents = (props) => {
    console.log(props); // {name: 'Tushar', country: 'India'}
    return (
        <div>
            <h1> My name is {props.name} and I'm from {props.country} </h1>
            {props.children}
        </div>
    );
 }

 export default LearnPropsFunctionalComponents;