import React from 'react';
import './SpItem.css';

class SpItem extends React.Component {
  render () {
    const info = this.props.info;
    return (
      <div className="sp-item">
        <p className="sp-item__title">{info.name}</p>
        <div className="sp-item__content">
          <img className="sp-item__thumbnail" src={info.thumbnail} alt={info.name} title={info.name} />
          <div dangerouslySetInnerHTML={{ __html: info.content }}></div>
        </div>
      </div>
    );
  }
}

export default SpItem;