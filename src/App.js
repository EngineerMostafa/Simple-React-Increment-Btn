import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import './index.j'
import moduleName from 'module';


/********************* App Class Component ***********************/
class App extends Component {
    state = { counter: 0 };



    incrementCounter = (incrementValue) => this.setState(foo)

    // incrementCounter = (incrementValue) => {
    //   this.setState(
    //     {counter: this.state.counter + incrementValue}
    //   )
    // };

    incVal = [1, 10, 100, 1000, 10000];

    render() {
        return ( <
            button imp > < /button>      <div> {
                this.incVal.map((val, ndx) => {
                    return ( <
                        Button key = { ndx }
                        incrementValue = { val }
                        onClickFunction = { this.incrementCounter }
                        />
                    )
                })
            } <
            Result counter = { this.state.counter }
            /> <
            /div>
        );
    }
}

/********************* Button Class Component ***********************/
function Button({ onClickFunction, incrementValue }) {
    return ( <
        button onClick = {
            () => onClickFunction(incrementValue) }
        className = "btn" >
        +{ incrementValue } <
        /button>
    )
}

/********************* Result Function Component ***********************/
const Result = ({ counter }) => < div className = "res" > { counter } < /div>


export default App;