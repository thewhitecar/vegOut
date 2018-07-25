import React, { Component } from 'react';
import "./bottomstyling.css";
import axios from 'axios';
import EachFavorite from "./eachFavorite"


export default class Favorites extends Component{
    constructor(props) {
        super(props);
        this.state ={
            favorites: []
        }
        }

  componentDidMount = () => {
    axios.get('/api/favorites').then(results => {
      this.setState({
          favorites: results.data
        })
    })
  }

  deleteFavorite = (id) => {
    axios.delete(`/api/favorites/${id}`).then(results => {
        this.setState({
            favorites: results.data
        }
    )
    console.log(results)})
}
    render(){
        var favoritesMap =this.state.favorites.map(f => {
            return <EachFavorite favoritesInfo={f} id={f.id} delete={this.deleteFavorite}/>})
        return(
         <div className="bottom">
            {favoritesMap}
        </div>
        )   
    }
}