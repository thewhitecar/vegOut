import React, { Component } from 'react';
import "./bottomstyling.css";
import EachResult from './eachResult';

export default class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
            favorites:[]
        }
    }

    render(){
        console.log(this.props.results)
        if(this.props.results.length>0){
            var resultsMap =this.props.results.map(r => {
                return <EachResult results={r} updateFavorites= {this.props.updateFavorites}/>
            })
        return (
            <div className="bottom">
                {resultsMap}
            </div>
        )
        } else {
            return (
<div/>
            )
        }
    }
}