import App from 'next/app';
import React from 'react';
import '../styles.css';

class CustomApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />;
  }
}

export default CustomApp;
