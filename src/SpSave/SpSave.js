import React from 'react';
import './SpSave.css';
import HOCSpForm from '../HOC/HOCSpForm.js'

class SpSaveForm extends React.Component {
  constructor(props) {
    super(props);
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

  render () {
    return (<form className="sp-save" action={this.props.action}>
        <label>
          Nombre o título
          <input 
            name="name"
            onChange={this.props.onChange}
            />
        </label>
        <label> Contenido
          <textarea
            name="content"
            onChange={this.props.onChange}>
          </textarea>
        </label>
        <label>
          Categorías:
          <select 
            name="categories"
            onChange={this.props.onChange}
            multiple={true}>
              {this.categories.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>

        <label>
          Tiendas:
          <select 
            name="stores"
            onChange={this.props.onChange}
            multiple>
              {this.stores.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>
        <footer>
          <button type="submit">Guardar</button>
        </footer>
      </form>);
  }
}

const SpSave = HOCSpForm(SpSaveForm);

export default SpSave;