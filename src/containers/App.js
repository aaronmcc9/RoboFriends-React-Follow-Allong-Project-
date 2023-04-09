import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";

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
        //saves us typing this.state each time we access
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1  ">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChanged} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;