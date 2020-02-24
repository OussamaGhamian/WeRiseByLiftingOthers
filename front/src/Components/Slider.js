import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Slide from './Slide'
export default function Slider(props) {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <ReactBootstrap.Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {props.slides.map((item, index) => {
                return (<ReactBootstrap.Carousel.Item key={index}>
                    <Slide slide={item} />
                </ReactBootstrap.Carousel.Item>)
            })}
        </ReactBootstrap.Carousel>
    );

}