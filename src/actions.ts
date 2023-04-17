import { Dispatch } from "redux";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED
} from "./constants"
import { Robot } from "./containers/App";
import { getData } from "./utils/data.utils";
import { text } from "stream/consumers";

export interface DispatchObject<T> {
    type: string,
    payload?: T
}

export const setSearchField = (text: string) => (
    {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    } as DispatchObject<string>) 

//Higher order function, a function that returns a function 
export const requestRobots = () => (dispatch: Dispatch<DispatchObject<Robot[] | string>>) => {
    // dispatch({ type: REQUEST_ROBOTS_PENDING });
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    //     .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));

    dispatch({ type: REQUEST_ROBOTS_PENDING });
    getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
        .then((data: Robot[]) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}