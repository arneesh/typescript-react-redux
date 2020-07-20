import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

// === Funtional Component Method ======
// const App = (props: AppProps ): JSX.Element => {
//     return <div>{props.color}</div>
// }


// interface AppState {
//     counter: number;
// }

class App extends React.Component<AppProps> {

    state = { counter: 0 };

    // Second Approach - Pass AppState interface to Component Generic
    // constructor(props: AppProps) {
    //     super(props);
    //     this.state = { counter: 0};
    // }

    onIncrement = (): void => {
        this.setState({counter: this.state.counter + 1});
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
    return (
        <div>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
            {this.state.counter}
        </div>
        )
    }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));