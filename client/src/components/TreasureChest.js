import React from 'react';
import { outerDivStyle } from './treasureStyle.js';

export default class SkateSpot extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={outerDivStyle}>
        <div style={newChestStyle}>
        </div>
      </div>
    );
  }
}
