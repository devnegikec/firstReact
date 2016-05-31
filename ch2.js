import React from 'react';

// class App extends React.Component {
//     render() {
//         return React.createElement('h1', null, 'hello World'); 
//         return <div>Hello World</div>
//     }
// }

/** will throw error  */
// class App extends React.Component {
//     render() {        
//         return <div>Hello World</div><b>Something</b>
//     }
// }


//this is state less component 
// const App = () => <h1>Hello World!!</h1>


class App extends React.Component {
    render() {        
        return ( //need this if you want to put root div in the next line
        <div>
            <div>Hello World</div>
            <b>Something</b>
        </div>
        )
        
    }
}
export default App;