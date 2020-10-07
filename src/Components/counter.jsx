import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() {
            return ( 
                 < div >
                    <span style = { { fonstSize: 10, fontWeight: 'bold' }}className = { this.getBadgeClasses() } > { this.formatCount() } </span> 
                    <button onClick={this.handleIncrement} className = "btn btn-secondary btn-sm" > Increment </button >
                </div > 
                );
                }
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    handleIncrement=()=>{
        console.log("Increment clicked",this);
    }
    getBadgeClasses() {
                    let classes = 'badge m-2 badge-';
                    classes += this.state.count === 0 ? 'warning' : 'primary';
                    return classes;
                }
    formatCount() {
                    const { count } = this.state;
                    return count === 0 ? 'Zero' : count;
                }
            }

            export default Counter;