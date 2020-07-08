/** 
JavaScript XML (JSX) is an extension to the JavaScript language syntax. 
With React, it's an extension to write XML-like code for elements and components. 
And just like XML, JSX tags have a tag name, attributes, and children.
*/

import React from 'react';

const Jsx = () => {

    /** Old approach */
    
    // return (
    //     <div>
    //         <h1>Learn how JSX wrorks!</h1>
    //     </div>
    // );

    /** old approach ends here */

    return React.createElement(
        'div',
        {id: 'mainNodeElement', className: 'dummyClass'}, // class keyword is reserved!
        React.createElement('h1', null, 'Learn how JSX wrorks!')
    );
}

export default Jsx;