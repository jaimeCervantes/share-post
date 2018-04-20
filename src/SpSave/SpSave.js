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

  onSubmit = e => {
    console.log(e);
    console.log(this.state);
  }

  /**
   *  onChange={e => this.form.current.handleOnChange(e)}
   *  using an anonymous arrow function to use ref this.form when it is setted
   */
  render () {
    return (
      <SpForm 
          ref={this.form}
          className="sp-save"
          action=""
          handleOnChange={this.handleOnChange}
          onSubmit={this.onSubmit}>
        <label>
          Nombre o título
          <input 
            name="name"
            value={this.state.name} 
            onChange={e => this.form.current.handleOnChange(e)}
            ref={this.textName}/>
        </label>
        <label> Contenido
          <textarea
            name="content"
            value={this.state.content}
            onChange={e => this.form.current.handleOnChange(e)}>
          </textarea>
        </label>
        <label>
          Categorías:
          <select 
            name="categories"
            value={this.state.categories} 
            onChange={e => this.form.current.handleOnChange(e)}
            multiple={true}>
              {this.categories.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>

        <label>
          Tiendas:
          <select 
            name="stores"
            value={this.state.stores}
            onChange={e => this.form.current.handleOnChange(e)}
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