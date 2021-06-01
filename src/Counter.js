import React, { Component } from 'react';
import { ThemeContext } from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    }
    render() {
        console.log("Render Counter")
        return (
            <ThemeContext.Consumer>
                {style => (
                    <>
                        <button className={style.theme} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button className={style.theme} onClick={() => this.changeCount(1)}>+</button>
                    </>
                )}
            </ThemeContext.Consumer>
        );
    };

    changeCount(amount) {
        this.setState(prevState => {
            return { count: this.state.count + amount }
        });
    }
}