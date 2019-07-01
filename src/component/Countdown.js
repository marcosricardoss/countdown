import React from 'react';
import moment from 'moment'
import pad from '../utils/pad';
import pluralize from '../utils/pluralize';
import './Countdown.css';

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           dateTo: moment(this.props.dateTo),
           day: 0, hour: 0, min: 0, sec: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.timer(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    timer() {
        let now = moment();
        let sec = this.state.dateTo.diff(now, "seconds") % 60;
        let min = this.state.dateTo.diff(now, "minutes") % 60;
        let hour = this.state.dateTo.diff(now, "hours") % 24;
        let day = this.state.dateTo.diff(now, "days");
        this.setState({
            day: pad(day, 2), hour: pad(hour, 2), min: pad(min, 2), sec: pad(sec, 2)
        });
    }

    render() {
        return (
            <div>          
                { pluralize(this.state.day, 'day') } { this.state.hour }:{ this.state.min }:{ this.state.sec }
            </div>
        );
    }
}