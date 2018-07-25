import React, { Component } from 'react';
import "./bottomstyling.css";
import axios from 'axios';

export default class EachResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    addToFavorites = () => {
        var label = this.props.results.recipe.label;
        var source = this.props.results.recipe.source;
        var url = this.props.results.recipe.url;
        var image = this.props.results.recipe.image;
        var ingredientLines = [];
        var rating = 10;
        ingredientLines = this.props.results.recipe.ingredientLines;
        var newFavorite = { label, source, url, image, ingredientLines, rating }
        axios.post('/api/favorites', newFavorite).then(results => {
            this.props.updateFavorites(results.data)
            console.log(results.data)
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "#334A5C", display: "flex", justifyContent: "space-evenly" }}>
             <div style={{ backgroundColor: "#94A6BA", paddingLeft: "2vw", width: "33%", marginBottom: "12px" , paddingBottom: "12px"}}>
                <div id='heart' class='button'></div>
                <button type="button"  style={{ marginBottom: "12px", marginTop: "12px"}} onClick={this.addToFavorites}>Favorite this Recipe</button>
                <h1 className="recipe">{this.props.results.recipe.label}</h1>
                <h3 className="source" style={{ paddingTop: "8px" }}>From: {this.props.results.recipe.source}</h3>
                <img className="image" src={this.props.results.recipe.image} alt={this.props.results.recipe.image} min-height="225px" min-width="225px" />
                <a className="link" target="_blank" href={this.props.results.recipe.url}>View Recipe</a>
            </div>
            <div style={{ backgroundColor: "#94A6BA", paddingLeft: "0vw", width: "33%", marginBottom: "12px" }}>
                <h3>Ingredients</h3>
                <div>{this.props.results.recipe.ingredientLines.map((r) => <ul style={{ listStyleType: "circle", textAlign: "left" }}>{r}</ul>)}
                </div>
            </div>
            <div style={{ width: "33%", backgroundColor: "#94A6BA", marginBottom: "12px" }}>
                <p>SOME FEATURE HERE???</p>
            </div>
            </div>
        )
    }
}
