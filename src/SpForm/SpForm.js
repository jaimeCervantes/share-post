import React from 'react';

class SpForm extends React.Component {

  handleOnChange = (e) => {
    const target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (target.type === 'select-multiple') {
      value = Array.prototype.slice.call(target.options, 0).filter(opt => opt.selected).map(opt => opt.value)
    }
    
    this.props.onChangeField({ [name]: value });
  }

  render () {
    return (
      <form className="sp-form">
        {this.props.children}
      </form>
    );
  }
}

export default SpForm;