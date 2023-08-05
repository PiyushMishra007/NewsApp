import React from "react";
// import React, { Component } from "react";


// export default class Newsitem extends Component {
  export default function Newsitem(props){
  // render() {
      let{title,description,imageurl,newsurl,author, date, source }=props

      
    return (
      <div className="container">
        <div className="card" style={{margin:"10px"}}>

          <img src={imageurl} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '87%', zIndex: '1'}}> {source}
                        </span>
          <div className="card-body" >
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

