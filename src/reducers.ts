import { Interface } from "readline";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import { Robot } from "./containers/App";
import { DispatchObject } from "./actions";

export interface RobotState{
    searchRobots: StateSearchRobots
    requestRobots: StateRequestRobots
}

interface StateSearchRobots {
    searchField: string
}

interface StateRequestRobots {
    isPending: boolean,
    robots: Robot[],
    error?: string
}

const initialStateSearch = {
    searchField: ''
} as StateSearchRobots

//The action type will always give us a consistent output 
export const searchRobots = (state = initialStateSearch, action:DispatchObject<string>) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
} as StateRequestRobots

export const requestRobots = (state = initialStateRobots, action:DispatchObject<Robot[] | string>) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;

    }
}