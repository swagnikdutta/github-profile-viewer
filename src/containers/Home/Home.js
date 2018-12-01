import React, { Component } from 'react';

// Components
import { Wrapper, Form, Input, Button } from './Style.js';

class Home extends Component{
	state = {
		userName: ''
	}

	handleChange = (e) => {
		this.setState({ 
			userName: e.target.value 
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let navigateObj = { 
			pathname: `/${this.state.userName}`
		};

		this.props.history.push(navigateObj);
	}

	render(){
		return (
			<Wrapper>
				<Form>
					<div>
						<label htmlFor="userName">Enter github username</label>
						<Input type="text" autoComplete="off" id="userName" placeholder="eg: swagnikdutta" value={this.state.userName} onChange={this.handleChange} />
					</div>
					<Button type="submit" onClick={this.handleSubmit}>Submit</Button>	
				</Form>
			</Wrapper>
		)
	}
}

export default Home;
