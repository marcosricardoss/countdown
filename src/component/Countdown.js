import React from "react";
import moment from "moment";
import pad from "../utils/pad";
import pluralize from "../utils/pluralize";
import "./Countdown.css";

export default class Countdown extends React.Component {
    render() {
        let now = moment(this.props.now)
        let timeTo = moment(this.props.timeTo)
        let sec = timeTo.diff(now, "seconds") % 60;
        let min = timeTo.diff(now, "minutes") % 60;
        let hour = timeTo.diff(now, "hours") % 24;
        let day = timeTo.diff(now, "days");
        return (
            <div>          
                { pluralize(day, 'day') } { pad(hour, 2) }:{ pad(min, 2) }:{ pad(sec, 2) }
            </div>
        );
    }
}