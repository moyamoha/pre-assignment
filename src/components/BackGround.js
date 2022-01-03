import React, {useEffect, useRef, useState} from 'react'

export default function BackGround() {

    const background = useRef()
    const [drawing, setDrawing] = useState(true)

    useEffect(function() {
        if (drawing) {
            for(let i = 0; i < 400; i++) { // Creating 400 circle in random places with random color 😋
                let initWidth = Math.round(Math.random() * 100) + 100;
                let circle = document.createElement("div");
                circle.classList.add("circle");
                circle.style.width = `${initWidth}px`;
                circle.style.height = `${initWidth}px`;
                circle.style.top = `${Math.round(Math.random() * 100)}%`;
                circle.style.left = `${Math.round(Math.random() * 100)}%`;
                const red = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                circle.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
                background.current.appendChild(circle);
             }
             setDrawing(false)
        }
    }, [drawing, setDrawing])

    return (
        <div id="back" ref={background}>
        </div>
    )
}
