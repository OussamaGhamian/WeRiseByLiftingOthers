import React from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
export default function Service(props) {
    const sectionRef = React.useRef(null)
    const intersection = useIntersection(sectionRef,
        {
            root: null,
            rootMargin: "0px",
            threshold: 1
        })
    const fadeIn = (element) => {
        gsap.to(element, .1, {
            opacity: 1,
            y: -60,
            ease: 'power4.out',
            stagger: {
                amount: .1
            }
        })
    }
    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -2,
            ease: 'power4.out'
        })
    }
    intersection && intersection.intersectionRatio < 1 ? fadeOut('.fade') : fadeIn('.fade')
    return (
        <div className="service" >
            <img src={`http://localhost:8080/${props.image}`} alt="serivceImage" />
            <h3>{props.title}</h3>
            <article>{props.description}</article>
        </div>
    )
}
