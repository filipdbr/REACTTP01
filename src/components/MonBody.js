import React from "react";

export default class MonBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chrono: 0, isRunning: false }; // Initial state set to 0 milliseconds
    }

    tick = () => {
        this.setState((prevState) => ({
            chrono: prevState.chrono + 10 // Increment by 10 milliseconds
        }));
    };

    componentDidMount() {
        if (this.state.isRunning) {
            this.timerID = setInterval(this.tick, 10); // Set interval to 10 milliseconds
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isRunning && !prevState.isRunning) {
            this.timerID = setInterval(this.tick, 10); // Set interval to 10 milliseconds
        } else if (!this.state.isRunning && prevState.isRunning) {
            clearInterval(this.timerID);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onPause = () => {
        this.setState({ isRunning: false });
    };

    onStop = () => {
        this.setState({ isRunning: false, chrono: 0 }); // Reset chrono to 0
    };

    onStart = () => {
        this.setState({ isRunning: true });
    };

    onReStart = () => {
        this.setState({ isRunning: true, chrono: 0 }); // Reset chrono to 0 and start
    };

    AffButton = (label, action) => <button onClick={action}>{label}</button>;

    formatTime = (milliseconds) => {
        const totalMilliseconds = Math.floor((milliseconds % 1000) / 10); // Get two digits for milliseconds
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const millis = String(totalMilliseconds).padStart(2, '0');
        return `${minutes}:${seconds}:${millis}`;
    };

    render() {
        return (
            <div className="monbody">
                <h1>{this.formatTime(this.state.chrono)} </h1>
                {this.AffButton('Start', this.onStart)}<br />
                {this.AffButton('Stop', this.onStop)}<br />
                {this.AffButton('Pause', this.onPause)}<br />
                {this.AffButton('Restart', this.onReStart)}<br />
            </div>
        );
    }
}
