import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import './App.css';

class Layout extends Component {

  render() {
    const header = this.props.isMobile ? <HeaderMobile reduxSounds={this.props.reduxSounds} /> : <Header reduxSounds={this.props.reduxSounds} />
    return (
      <div className='app'>
        {header}
        {this.props.children}
        <div className='footer-logo-welcome'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-logo-menu'>
                <ul style={{ marginBottom: 0 }}>
                  {/* <li><a target='_blank' rel='noopener noreferrer' href='/about'>About/Features</a></li> */}
                  <li><Link to='/about' >About</Link> </li>
                  <li><Link to='/terms' >Terms &amp; Privacy</Link> </li>
                  <li><a target='_blank' rel='noopener noreferrer' href='mailto:contact@monotones.app'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Layout;