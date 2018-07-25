import React, { Component } from 'react';
import "./bottomstyling.css";
import Result from "./result"

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsisHidden: true
        }
    }


    render(){
        return (
            <div>
                <Result resultsArray={this.props.results}/>
            </div>
        )
    }
}