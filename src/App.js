import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChanged = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    //hook that runs after constructor and render hook like angular lifecycle hooks
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    render() {

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1  ">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChanged} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;