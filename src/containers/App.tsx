import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";
import { RobotState } from "../reducers";

interface AppProps {
    searchField: string,
    robots: Robot[]
    isPending: boolean
    error: string
}

export interface Robot {
    id: number,
    name: string,
    email: string
}

const mapStateToProps = (state: RobotState) => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
} as AppProps)

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChanged: (event: ChangeEvent<HTMLInputElement>): void => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

function App(props: AppProps) {
    return <MainPage  {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(App);