/** Owner Ownee relationship */

import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = { txt: 'this is the state txt'}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({txt:e.target.value});
	}
    render() {        
        return ( 
        <div>
        	<Widget txt={this.state.txt} update={this.update} />
        </div>
        )
        
    }
} 

const Widget  = ({txt, update}) => {
	return (
		<div>
        	<input type="text" onChange= {update} />
            <h1>{txt}</h1>
        </div>
	)
}
export default App;