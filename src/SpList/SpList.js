import React from 'react';
import './SpList.css';
import PropTypes from 'prop-types';

class SpList extends React.Component {
  static typeElems = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]);

  static propTypes = {
    headerElems: SpList.typeElems,
    itemsElems: SpList.typeElems,
    footerElems: SpList.typeElems
  };

  render () {
    const footerElems = this.props.footerElems;
    const itemsElems = this.props.itemsElems;
    const headerElems = this.props.headerElems;

    return (
      <section className="sp-list">

        {this.props.headerElems ?
          <header className="sp-list__header">
            {headerElems}
          </header>
        : null}

        <div className="sp-list__content">
          {itemsElems}
        </div>

        {footerElems ?
          <footer className="sp-list__footer">
            {footerElems}
          </footer>
        : null}
      </section>
    );
  }
}

export default SpList