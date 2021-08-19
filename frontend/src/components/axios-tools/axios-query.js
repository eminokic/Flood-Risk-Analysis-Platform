import React from 'react';
import axios from 'axios';

/**
 * Axios Query Component 
 * 
 * The goal of this component is query data using axios. 
 * 
 */
export default class Restaurant extends React.Component {
  
  state = {
    id: '',
    name: '',
    address: '',
    city: '',
    rating: '',
    num_rating: '',
    lat_long: '',
    lat: '',
    long: '',
    land_value: '',
    square_footage: '',
    year_built: '',
    elevation_ft: '',
    shore_distance: '',
    _100yr: '',
    _500yr: '',
    normalized_score: '',
  }

  handleChange = event => {
    this.setState({ 
      id: event.target.value,
      name: event.target.value, 
      address: event.target.value, 
      city: event.target.value,
      rating: event.target.value,
      num_rating: event.target.value,
      lat_long: event.target.value,
      lat: event.target.value,
      long: event.target.value,
      land_value: event.target.value,
      square_footage: event.target.value,
      year_built: event.target.value,
      elevation_ft: event.target.value,
      shore_distance: event.target.value,
      _100yr: event.target.value,
      _500yr: event.target.value,
      normalized_score: event.target.value,
      
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const id = {
      id: this.state.id
    };

    const name = {
      name: this.state.name
    };

    const address = {
      address: this.state.address
    };

    const city = {
      city: this.state.city
    };
    

    axios.get(`http://127.0.0.1:8000/api/data`, { id, name, address, city })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
            Building ID:
            <input type="text" id="id" onChange={this.handleChange} />
          </label>
          <div></div>
          <label>
            Building Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <div></div>
          <label>
            Building Address:
            <input type="text" address="address" onChange={this.handleChange} />
          </label>
          <div></div>
          <label>
            Building City:
            <input type="text" city="city" onChange={this.handleChange} />
          </label>
          <button type="submit">Query</button>
        </form>
      </div>
    )
  }
}