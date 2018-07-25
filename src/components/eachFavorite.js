import React, { Component } from 'react';
import "./bottomstyling.css";
import DeleteButton from "./deleteButton"
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

export default class EachFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            rating: this.props.favoritesInfo.rating
        }
    }

    onStarClick(nextValue, id) {
        this.setState({ rating: nextValue });
        id = this.props.favoritesInfo.id;
        axios.put(`/api/favorites/${id}/${nextValue}`).then(results => {
            this.setState({
                favorites: results.data
              })
        })
    }

    render() {
        const { rating } = this.state;
        return (
            <div style={{ backgroundColor: "#334A5C", display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ backgroundColor: "#94A6BA", paddingLeft: "2vw", width: "33%", marginBottom: "12px", paddingBottom: "12px" }}>
                    <h1 className="recipe">{this.props.favoritesInfo.label}</h1>
                    <h3 className="source" style={{ paddingTop: "8px" }}>From: {this.props.favoritesInfo.source}</h3>
                    <img className="image" src={this.props.favoritesInfo.image} alt={this.props.favoritesInfo.label} height="200px" width="200px" />
                    <a className="link" target="_blank" href={this.props.favoritesInfo.url}>View Recipe</a>
                    <DeleteButton style={{ marginBottom: "12px", paddingBottom: "12px", width: "50%" }} id={this.props.id} delete={this.props.delete} />
                    <div>
                        <StarRatingComponent
                            id={this.props.id}
                            starCount={10}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
                    </div>
                </div>
                <div className="ingredients" style={{ backgroundColor: "#94A6BA", paddingLeft: "0vw", width: "33%", marginBottom: "12px", display: "flex", flexDirection: "column" }}>
                    <h2>Ingredients</h2>
                    <div><ul>{this.props.favoritesInfo.ingredientLines.map((r) => <li style={{ listStyleType: "circle", textAlign: "left", marginBottom: "5px" }}>{r}</li>)}
                    </ul>
                    </div>
                </div>
                <div style={{ width: "33%", backgroundColor: "#94A6BA", marginBottom: "12px" }}>
                    <p>Future Features Here!!</p>
                </div>
            </div>
        )
    }
}