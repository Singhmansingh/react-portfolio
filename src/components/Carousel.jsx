import { useState } from "react";


// Render a vertically scrolling list of images, not currently in use

export default function Carousel(props){

    return(
        <div className="carousel">
            {props.items.map((item)=> <CarouselItem src={item}/> )}
        </div>
    )
}

export function CarouselItem(props){
    const [position,setPosition]=useState(0);
    const width = 250;
    const transitionSpeed = 5000;
    const disabled = false;

    return(
        <div className="carousel-item" 
        style={disabled? {}: {backgroundImage:`url(${props.src})`, 
        width, 
        transitionDuration: transitionSpeed,
        transform:`translateX(${-1 * (position * width) }%)`}}>

        </div>
    )
}