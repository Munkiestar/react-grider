import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './SeasonDisplay.css';


const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

const seasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <FontAwesomeIcon icon={iconName} className='icon-left'/>
            <h1>{text}</h1>
            <FontAwesomeIcon icon={iconName} className='icon-right'/>
        </div>
    );
}


export default seasonDisplay;