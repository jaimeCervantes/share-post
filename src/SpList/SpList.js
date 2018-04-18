import React from 'react';
import './SpList.css';

class SpList extends React.Component {
  render () {
    const footerElems = this.props.footerElems;
    const itemsElems = this.props.itemsElems;
    const headerElems = this.props.headerElems;

    return (
      <section class="ps-list">

        {this.props.headerElems ?
          <header>
            {headerElems}
          </header>
        : null}

        <div class="ps-list__content">
          {itemsElems}
        </div>

        {footerElems ?
          <footer class="ps-list__footer">
            {footerElems}
          </footer>
        : null}
      </section>
    );
  }
}

export default SpList