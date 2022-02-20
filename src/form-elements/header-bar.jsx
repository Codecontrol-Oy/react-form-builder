/**
  * <HeaderBar />
  */

import React from 'react';
import Grip from '../multi-column/grip';

export default class HeaderBar extends React.Component {
  render()  {
    return (
      <div style={{marginBottom: '8px'}} className="toolbar-header">
        <span style={{fontWeight: 500, fontSize: '14px'}} className="badge badge-secondary">{this.props.data.text}</span>
        <div className="toolbar-header-buttons">
          { this.props.data.element !== 'LineBreak' &&
            <div style={{fontSize: '14px', fontWeight: 500}} className="btn is-isolated" onClick={this.props.editModeOn.bind(this.props.parent, this.props.data)}>Muokkaa</div>
          }
          <div style={{fontSize: '14px', fontWeight: 500}} className="btn is-isolated" onClick={this.props.onDestroy.bind(this, this.props.data)}>Poista</div>
        </div>
      </div>
    );
  }
}
