import React from 'react';
import axios from 'axios';

export default class HelloDjango extends React.Component {
  state = {
    name: 'test',
    address: 'test',
    city: 'test',
  }

  handleChange = event => {
    this.setState({ name: event.target.value, address: event.target.value, city: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const name = {
      name: this.state.name
    };

    const address = {
      address: this.state.name
    };

    const city = {
      city: this.state.name
    };

    axios.get(`http://127.0.0.1:8000/restaurants/`, { name,address,city })
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
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}