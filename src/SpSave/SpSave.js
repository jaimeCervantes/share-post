import React from 'react';
import './SpSave.css';

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

  comparisonMultiSelect (value, elem) {
    return elem === value;
  }  

  handleOnChange = (e) => {
    const target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (target.type === 'select-multiple') {
      value = Array.prototype.slice.call(target.options, 0).filter(opt => opt.selected).map(opt => opt.value)
    }

    this.setState({ [name]: value });
  }

  render () {
    return (<form className="sp-save" action="">
        <label>
          Nombre o título
          <input 
            name="name"
            value={this.state.name} 
            onChange={this.handleOnChange}
            ref={this.textName}/>
        </label>
        <label> Contenido
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleOnChange}>
          </textarea>
        </label>
        <label>
          Categorías:
          <select 
            name="categories"
            value={this.state.categories} 
            onChange={this.handleOnChange}
            multiple={true}>
              {this.categories.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>

        <label>
          Tiendas:
          <select 
            name="stores"
            value={this.state.stores}
            onChange={this.handleOnChange}
            multiple>
              {this.stores.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>
        <footer>
          <button type="submit">Guardar</button>
        </footer>
      </form>)
  }
}

export default SpSave;