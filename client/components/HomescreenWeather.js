import React from 'react';
import WeatherIcon from "./WeatherIcon";
import HomescreenWeatherDaily from './HomescreenWeatherDaily'
import {momentWithLocale} from '../utils/tools'
import PropTypes from "prop-types";

const HomescreenWaether = ({darkskyData, netatmoData, locale}) => {
    let moment = momentWithLocale(locale);

    return (
        <div className='homescreen-weather'>
            <div className='homescreen-forecast'>
                {darkskyData.daily.summary}
            </div>
            <div className='col-1'>
                <div className='current-condition'>
                    <div className='main-icon'>
                        <WeatherIcon condition={darkskyData.currently.icon}/>
                    </div>
                    <div className='main-temp-box'>
                        <div className='main-temp-label'>Dark Sky</div>
                        <div className='main-temp'>
                            {Math.round(darkskyData.currently.temperature)}°
                            <div className='min-max-temp'>
                                <div><i className='wi wi-thermometer-exterior color-gray'/> <span className='text-white'>{Math.round(darkskyData.daily.data[0].temperature_low)}°</span></div>
                                <div><i className='wi wi-thermometer color-gray'/> <span className='text-white'>{Math.round(darkskyData.daily.data[0].temperature_high)}°</span></div>
                            </div>
                        </div>
                        <div className='main-temp-label'>Netatmo</div>
                        {
                            netatmoData.modules.OUTDOOR.reachable ? (
                                <div className='main-temp'>{netatmoData.modules.OUTDOOR.data.temperature}°</div>
                            ) : (
                                <div className='main-temp'>
                                    <i className="zmdi zmdi-alert-triangle text-yellow"/>
                                    <div className='min-max-temp' style={{fontSize: '10px'}}>
                                        <div className='color-gray'>This module is</div>
                                        <div className='color-gray'>unavailable</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='day-forcast'>
                    <div className='inline'><i className="zmdi zmdi-pin"/> <span className='text-white'>{netatmoData.place.city}</span></div>
                    <div className='inline'><i className='wi wi-sunrise'/> <span className='text-white'>{moment.unix(darkskyData.daily.data[0].sunrise_time).format('HH:mm')}</span></div>
                    <div className='inline'><i className='wi wi-sunset'/> <span className='text-white'>{moment.unix(darkskyData.daily.data[0].sunset_time).format('HH:mm')}</span></div>
                </div>
            </div>

            <div className='col-2'>
                <div className='box-hourly'>
                    <HomescreenWeatherDaily data={darkskyData.daily.data[1]} day={1} locale={locale}/>
                    <HomescreenWeatherDaily data={darkskyData.daily.data[2]} day={2} locale={locale}/>
                    <HomescreenWeatherDaily data={darkskyData.daily.data[3]} day={3} locale={locale}/>
                    <HomescreenWeatherDaily data={darkskyData.daily.data[4]} day={4} locale={locale}/>
                    <HomescreenWeatherDaily data={darkskyData.daily.data[5]} day={5} locale={locale}/>
                </div>
            </div>
        </div>
    )
};

HomescreenWaether.propTypes = {
    darkskyData: PropTypes.object.isRequired,
    netatmoData: PropTypes.object.isRequired,
};

export default HomescreenWaether;