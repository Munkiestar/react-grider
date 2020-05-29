import React from 'react';
import '../FontawesomeIcons/spinner.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const spinner = (props) => {
    return (
        <div className='spinner'>
            <FontAwesomeIcon icon='spinner'/>
            <h1>{props.message}</h1>

        </div>
    )
}

spinner.defalutProps = {
    message: 'Loading..'
}

export default spinner;