import React from 'react';
import './SpSave.css';
import SpForm from '../SpForm/SpForm';

class SpSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
      categories: [],
      stores: []
    };

    this.textName = React.createRef();
    this.form = React.createRef();

    this.categories = [
      {
        id: 1,
        name: 'Abarrotes y alimentos',
      },
      {
        id: 2,
        name: 'Bebes y niños',
      }
    ];

    this.stores = [
      {
        id: 1,
        name: 'Walmart'
      },
      {
        id: 2,
        name: 'Sears'
      }
    ]
  }

  componentDidMount () {
    this.textName.current.focus();
  }

  handleOnChange = state => {
    this.setState(state);
  }

  render () {
    return (
      <SpForm 
          ref={this.form}
          className="sp-save"
          action=""
          handleOnChange={this.handleOnChange}>
        <label>
          Nombre o título
          <input 
            name="name"
            value={this.state.name} 
            onChange={this.form.current.handleOnChange}
            ref={this.textName}/>
        </label>
        <label> Contenido
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.form.current.handleOnChange}>
          </textarea>
        </label>
        <label>
          Categorías:
          <select 
            name="categories"
            value={this.state.categories} 
            onChange={this.form.current.handleOnChange}
            multiple={true}>
              {this.categories.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>

        <label>
          Tiendas:
          <select 
            name="stores"
            value={this.state.stores}
            onChange={this.form.current.handleOnChange}
            multiple>
              {this.stores.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>
        <footer>
          <button type="submit">Guardar</button>
        </footer>
      </SpForm>)
  }
}

export default SpSave;