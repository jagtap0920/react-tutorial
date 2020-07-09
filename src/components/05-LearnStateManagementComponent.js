/**
 * State is similar to props, but it is private and fully controlled by the component.
 * 
 * In previous tutorial we can not update props value, or it is not dynamic
 * 
 * So in state component we can update data within component, to overcome props cons
 */
 
 /**
  *       Props                                    |                 State
  * 1. props are get passed  to the component      |   1. State is managed within the component
  * 2. functional parameters                       |   2. variable declared in the function body
  * 3. props are immutable                         |   3. state can be changed
  * 4. props functional component                  |   4. useState Hook - functional component
  * 5. this.props in class component               |   5. this.state - class component
  */

 import React, { Component } from 'react';

 class LearnStateManagementComponent extends Component {
     constructor() {
         super();

         // state is reserved keyword
         this.state = {
             messgae: 'Learn state component'
         };
     }

     /** Change state messgae */
     changeStateMessage() {
         this.setState({
            messgae: 'You have changed to state value'
         });
     }

     render() {
         return (
             <div>
                <h1>{ this.state.messgae }</h1>
                <button onClick={() => this.changeStateMessage()}>click here to update state message</button>
             </div>
         )
     }
 }

 export default LearnStateManagementComponent;