import React from 'react';

function HOCSpForm(FormComponent) {
  return class extends React.Component  {
    constructor(props) {
      super(props);
      this.state = this.props.state || {};
    }

    handleOnChange = (e) => {
      const target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      if (target.type === 'select-multiple') {
        value = Array.prototype.slice.call(target.options, 0).filter(opt => opt.selected).map(opt => opt.value)
      }
      this.setState({ [name]: value });
    };

    handleOnSubmit = (e) => {
      e.preventDefault();
      if(this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
    };

    render () {
      // only re-pass props that the FormComponent needs. The porps state and onSubmit are used here in this HOC
      // passProps are props not used from this HOC
      const { state, onSubmit, ...passProps } = this.props;
      // Pass props that are injected from this HOC
      const injectedProps = { onSubmit: this.handleOnSubmit, onChange: this.handleOnChange, data: this.state };

      return (<FormComponent
        injectedProps={injectedProps}
        {...this.passProps}>
        </FormComponent>);
    }
  };
}

export default HOCSpForm;