import React, { Component } from 'react';
import Cardlist from './components/Card-list/Card-list';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((respone) => respone.json())
			.then((data) => this.setState({ monsters: data }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1 id="Heading">Monster-Rolodex</h1>
				<div id="progressbar"></div>
				<SearchBox
					placeholder="Search Monster"
					handleChange={this.handleChange}
				/>
				<Cardlist monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
