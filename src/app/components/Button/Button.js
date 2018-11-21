import React, { Component } from 'react';
import style from './style.css';

function Button({...props}) {
  return (
    <button {...props} className="button">{props.label}</button>
  )
}

export default Button;
