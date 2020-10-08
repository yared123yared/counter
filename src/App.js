import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.jsx'
import Counters from './Components/counters.jsx'

class App extends Component{
  constructor(){
    super();
    console.log("App-constructor");
  }
  componentDidMount(){
    // Ajax calls here
    console.log("App-Mount");

  }
  state={
    counters:[
        {id:1,value:0},
        {id:2,value:3},
        {id:3,value:0},
        {id:4,value:0},
    ]
}
handleDelete=(counter)=>{
    
    const counters=[...this.state.counters];
   
     const index=this.state.counters.indexOf(counter);
     counters.splice(index,1);

  
   this.setState({counters});
};
handleIncrement=(counter)=>{

   const counters=[...this.state.counters];

    const index=counters.indexOf(counter);
    counters[index].value++;
    this.setState({
       counters})
};
handleReset=()=>{
   const counters= this.state.counters.map(c=>{
       c.value=0
       return c});
       
   this.setState({counters})
};
render(){
  console.log("App-rendered");

  return (
        <React.Fragment>
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <main className="container">
            <Counters
                counters={this.state.counters} 
                onReset={this.handleReset} 
                onIncrement={this.handleIncrement} 
                onDelete={this.handleDelete}/>
          </main>
        </React.Fragment>
  );
}
}



export default App;
