import React from 'react';
import cx from 'classnames';
import WeatherIcon from "./WeatherIcon";
import {momentWithLocale} from '../utils/tools'
import PropTypes from "prop-types";

const HomescreenWeatherDaily = ({data, day, locale}) => {
    let moment = momentWithLocale(locale);

    return (
        <div className={cx('col-hourly', day === 5 && 'no-right-border')}>
            <div className='label'>{moment.unix(data.time).format('dddd')}</div>
            <div className='icon'><WeatherIcon condition={data.icon}/></div>
            <div className='temp'>{Math.round(data.temperature_low)}° <span className='color-gray'>/</span> {Math.round(data.temperature_high)}°</div>
        </div>
    )
};

HomescreenWeatherDaily.propTypes = {
    data: PropTypes.object.isRequired,
    day: PropTypes.number.isRequired,
    locale: PropTypes.string.isRequired,
};

export default HomescreenWeatherDaily;