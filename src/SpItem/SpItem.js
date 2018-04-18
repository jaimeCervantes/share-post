import React from 'react';
import './SpItem.css';

class SpItem extends React.Component {
  render () {
    const info = this.props.info;
    return (
      <div class="ps-item">
        <p class="ps-item__title">{info.name}</p>
        <div class="ps-item__content">
          <img src={info.thumbnail} alt={info.name} title={info.name} />
          <p>{info.content}</p>
        </div>
      </div>
    );
  }
}

export default SpItem;