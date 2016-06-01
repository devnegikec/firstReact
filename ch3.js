/** PUT THIS CODE IN main.js */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('app'));

/** PUT THIS CODE IN main.js */

import React from 'react';
import ReactDOM from 'react-dom';

// class  App extends React.Component {
//     render(){
//         return (
//           <h1>{this.props.txt}</h1>  
//         );
//     }
// }

// ReactDOM.render(<App txt="this is the props text" />, docum

class  App extends React.Component {
    render(){
        let txt = this.props.txt;
        return (          
          <h1>{txt}</h1>  
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    num: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is default'    
}

ReactDOM.render(<App num={4} />, document.getElementById('app'));
