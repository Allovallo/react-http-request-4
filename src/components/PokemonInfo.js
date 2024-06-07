import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
  };

  componentDidUpdate(prevProps, _) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Name was changed!');

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => response.json())
        .then(console.log);
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Info</h1>
        <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}
