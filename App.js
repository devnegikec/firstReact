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
        	{this.state.txt}
        	<hr />
        	<Slider update={this.update} />
        	<Slider update={this.update} />
        	}
        </div>
        )
    }
} 

class Slider  extends React.Component {
	render(){
		return (
			<div>
	        	<input type="range" 
	        		min="0"
	        		max="255"
	        	 	onChange= {this.props.update} />
	        </div>
		)
	}
}
export default App;
