import React from 'react';
// import './SeasonDisplay.css';

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
            < i className={`fas fa-${iconName} icon-left fa-7x`}/>
            <h1>{text}</h1>
            < i className={`fas fa-${iconName} icon-right fa-7x`}/>
        </div>
    );
}


export default seasonDisplay;