import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";
import Header from "../components/Header";
import './MainPage.css'

function MainPage(props) {

    const { searchField, onSearchChanged, robots, isPending } = props;

    useEffect(() => {
        props.onRequestRobots();
    }, []);

    const filteredRobots = () => {
        return robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }

    return isPending ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChanged} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots()} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default MainPage;