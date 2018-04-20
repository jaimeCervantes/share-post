import React from 'react';
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
    const { onChange, data, onSubmit } = this.props.injectedProps;
    return (<form className="sp-form" action={this.props.action} onSubmit={onSubmit}>
        <label className="sp-form__field">
          Nombre o título
          {/*
              If some data was gotten from a parent component or from the HOC component, the state is controlled inside the HOC component
            */}
          <input 
            name="name"
            value={data.name || ''}
            onChange={onChange}
            />
        </label>
        <label className="sp-form__field"> Contenido
          <textarea
            name="content"
            value={data.content}
            onChange={onChange}>
          </textarea>
        </label>
        <label className="sp-form__field">
          Categorías:
          <select 
            name="categories"
            defaultValue={data.categories}
            onChange={onChange}
            multiple={true}>
              {this.categories.map(tag => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
          </select>
        </label>

        <label className="sp-form__field">
          Tiendas:
          <select 
            name="stores"
            defaultValue={data.stores}
            onChange={onChange}
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