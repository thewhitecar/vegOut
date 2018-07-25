import React, { Component } from 'react';
import "./bottomstyling.css";
import GeoLocation from './geoLocation';

export default class LocalEats extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={{ width: "100%" }}>
                <div className="bottom">
                    <img className="bottomimages" src={require('./localeats.png')} alt="" />
                </div>
                <div className="bottom">
                <GeoLocation style={{ width: "97.5%" }} />
                </div>
            </div>
        )
    }
}

