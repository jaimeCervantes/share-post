import React from 'react';
import './SpForm.css';

class SpForm extends React.Component {
  render () {
    const { headerContent, footerContent, children, ...rest } = this.props;
    const header = headerContent
      ? <header className="sp-form__header"><h1>{headerContent}</h1></header>
      : null;

    const footer = footerContent
      ? <footer className="sp-form__footer">{footerContent}</footer>
      : null;
    

    return (<form className="sp-form" action={rest.action} method={rest.method}>
      <section className="sp-form__wrapper">
        {header}
        <div className="sp-form__content">{children}</div>
        {footer}
      </section>
    </form>);
  }
}

export default SpForm;