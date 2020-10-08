import React, { Component } from 'react';



const Navbar = (props) =>{
    console.log("Navbar-rendered");
    return (

        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar<span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav>
        );
}

export default Navbar;