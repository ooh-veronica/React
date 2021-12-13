import React, { useState } from "react";

const Accordion = ({title, content}) => {
    const [show , setShow] = useState(false)

    const clickAccord = () => {
        setShow(!show)
    }

    return (
        <div className = "accordContainer">
            <div className = "accordItem">
                <p className="title">{title}</p>
                <p className="content" onClick = {clickAccord}>{show ? "-" : "+"}</p>
            </div>
            {show && <div className="accordContent">{content}</div>}
        </div>
    )
}

export default Accordion