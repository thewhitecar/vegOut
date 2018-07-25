import React, { Component } from 'react';
import "./bottomstyling.css";

export default class MyCookbook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }
    render() {
        return (
            <div className="bottom">
                <img className="bottomimages" src={require('./mycookbook.png')} alt="" />
            </div>
        )
    }
}