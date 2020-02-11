import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Slide from './slide'
export default function Slider() {

    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <ReactBootstrap.Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <ReactBootstrap.Carousel.Item>
                <Slide />
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <Slide />
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <Slide />
            </ReactBootstrap.Carousel.Item>
        </ReactBootstrap.Carousel>
    );

}