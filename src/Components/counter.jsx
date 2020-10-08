import React, { Component } from 'react';
class Counter extends Component {
    

    render() {
        // 
    //    console.log("countered-rendered");
           
    
            return ( 
                 <div>
               {/*  */}
                    <span style = { { fonstSize: 10, fontWeight: 'bold' }}className = { this.getBadgeClasses() } > { this.formatCount() } </span> 
                    <button onClick={()=>this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm" > Increment </button >
                    <button onClick={()=> this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2">Delete</button>
                </div> 
                );
                }
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

   
    getBadgeClasses() {
                    let classes = 'badge m-2 badge-';
                    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
                    return classes;
                }
    formatCount() {
                    const { value } = this.props.counter;
                    return value === 0 ? 'Zero' : value;
                }
            }

            export default Counter;