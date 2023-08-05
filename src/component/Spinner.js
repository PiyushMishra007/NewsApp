import React from 'react'
// import React, { Component } from "react";
import loading from './loading.gif'

  const Spinner=()=>{
  // export default class Spinner extends Component {
  //   render() {
    return (
      <div className="text-center my-1">
          <img src={loading} alt="loading" />
      </div>
    ) 
  }

  export default Spinner 

