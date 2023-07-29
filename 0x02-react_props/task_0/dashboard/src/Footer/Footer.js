import React, { Component } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="App-footer">
          Copyright {getFullYear()} - {getFooterCopy()}
        </div>
      </>
    );
  }
}
