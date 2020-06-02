import React from "react";

import ImageCard from "../ImageCard/ImageCard";

import './ImageList.css';

const ImageList = (props) => {
    const images = props.slike.map(slika => {
        return <ImageCard key={slika.id} slikaCard={slika}/>
    });

    return <div className='ImageList'>{images}</div>

}

export default ImageList;