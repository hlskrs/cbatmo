import React from 'react';
import {momentWithLocale} from '../utils/tools';

class HomescreenDateTime extends React.Component {
    state = {
        hour: null,
        minutes: null,
        date: null,
        dayName: null,
        dayNum: null,
        monthYear: null
    };

    componentDidMount() {
        this.clock();

        this.interval = setInterval(() => {
            this.clock()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    clock = () => {
        let moment = momentWithLocale(this.props.locale);
        const date = moment();

        this.setState({
            hour: date.format('HH'),
            minutes: date.format('mm'),
            date: date.format('dddd DD MMMM YYYY'),
            dayName: date.format('dddd'),
            dayNum: date.format('DD'),
            monthYear: date.format('MMMM YYYY'),
        });
    };

    render() {
        return (
            <div className='homescreen-clock'>
                <h1>{this.state.hour}:{this.state.minutes}</h1>
                <div className='homescreen__date'>{this.state.dayName} <span className='home_screen__day'>{this.state.dayNum}</span> {this.state.monthYear}</div>
            </div>
        )
    }
}

export default HomescreenDateTime;