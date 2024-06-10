import React, { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, _) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Errorr in ${nextName} name!!!`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    if (this.state.status === 'idle') {
      return <div>Enter pokemon`s name!</div>;
    }

    if (this.state.status === 'pending') {
      return <div>...Loading...</div>;
    }

    if (this.state.status === 'rejected') {
      return <div>{this.state.error.message}</div>;
    }

    if (this.state.status === 'resolved') {
      return (
        <div>
          <div>
            <p>{this.state.pokemon.name}</p>
            <img
              src={this.state.pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              alt="pokemon-name"
            />
          </div>
        </div>
      );
    }
  }
}
