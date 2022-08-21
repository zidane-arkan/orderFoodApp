import React from 'react'
import BackdropClass from './Backdrop.module.css';

function Backdrop(props) {
  return (
    <section className={BackdropClass.backdrop} onClick={props.onClick} />
  )
}

export default Backdrop;