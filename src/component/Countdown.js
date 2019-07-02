import React from "react";
import moment from "moment";
import pad from "../utils/pad";
import pluralize from "../utils/pluralize";
import "./Countdown.css";

export default class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {    
            now: moment()  
        }    
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
        this.setState({       
            now: moment()  
        });
    }

    render() {
        let timeTo = moment(this.props.timeTo);
        if (timeTo < this.state.now) {
            timeTo = this.state.now;          
        }
        let sec = timeTo.diff(this.state.now, "seconds") % 60;
        let min = timeTo.diff(this.state.now, "minutes") % 60;
        let hour = timeTo.diff(this.state.now, "hours") % 24;
        let day = timeTo.diff(this.state.now, "days");
        return (
            <div>          
                <div>{ pluralize(day, 'day') } { pad(hour, 2) }:{ pad(min, 2) }:{ pad(sec, 2) }</div>
                <div>{moment(this.props.timeTo).format('LLLL')}</div>
            </div>           
        );
    }
}