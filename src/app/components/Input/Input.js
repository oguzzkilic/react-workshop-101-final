import React, { Component } from 'react';
import style from './style.css';

function Input({...props}) {
  return (
    <input {...props} className="input" />
  )
}

export default Input;
