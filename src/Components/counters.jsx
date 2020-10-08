import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    

    render() {
        console.log("counter-rendered");
        const {onDelete,onIncrement,onReset,counters} = this.props;
        return (  
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
               {counters.map(counter => <Counter onDelete={onDelete} onIncrement={onIncrement} Key={counter.id} counter={counter}>
               
                   </Counter>)}
            </div>
        );
    }
}

export default Counters;