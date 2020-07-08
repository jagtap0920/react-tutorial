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