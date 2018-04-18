import React, { Component } from 'react';
import './App.css';
import SpList from './SpList/SpList';
import SpItem from './SpItem/SpItem';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [{
        name: 'Biblioteca de la Esc. Sec. Gral. Ignacio Mejía',
        content: 'Aplicación web para encontrar libros, de la Biblioteca de la Esc. Sec. Gral. Ignacio Mejía de Misantla, Veracruz. Se utilizó Node.js, MongoDB, Polymer, Express.js, Diseño responsivo, Heroku platform<a href="https://buscar-libros.herokuapp.com/" target="_blank">Ver aplicación</a>',
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/ofertadeo-520bd.appspot.com/o/images%2F2018%2F0%2Fbiblioteca-cover.jpg?alt=media&token=9c70f667-5e5d-4fac-9e51-eb57101f171e'
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <SpList
          headerElems={<h1>Publicaciones</h1>}
          itemsElems={this.state.items.map(item => <SpItem info={item}></SpItem>)}
          footerElems={<p>Footer</p>}
          />
      </div>
    );
  }
}

export default App;
