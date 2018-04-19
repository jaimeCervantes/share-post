import React from 'react';

function HOCSpForm(FormComponent) {
  return class extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {};
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
      return (<FormComponent onChange={this.handleOnChange} {...this.props}></FormComponent>);
    }
  };
}

export default HOCSpForm;