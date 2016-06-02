import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		});
	}
    render() {        
        return ( 
        <div>
        	
        	<Slider refs="red" update={this.update} />
        	{this.state.red}
        	<hr />
        	<Slider refs="green" update={this.update} />
        	{this.state.green}
        	<hr />
        	<Slider refs="blue" update={this.update} />
        	{this.state.blue}
        	<hr />
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
