import { Component } from "react";

export class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //lifecycle hook
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops. That is not good</h1>
        }

        return this.props.children;
    }
}