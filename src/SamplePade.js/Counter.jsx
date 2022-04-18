import { useState } from "react"

const Counter = ()=>{
    const [firstCounter, firstSetCounter] = useState (0);
    const [secondCounter, secondSetCounter] = useState (0);
    const [thirdCounter, thirdSetCounter] = useState (0);

    const FirstClick = ()=>{
        firstSetCounter (firstCounter +1);
    }
    const SecondClick = ()=>{
        secondSetCounter (secondCounter +2);
    }
    const ThirdClick = ()=>{
        thirdSetCounter (thirdCounter +3);
    }


    let counter = firstCounter + secondCounter + thirdCounter
    return (
        <>

        <h1>Counter</h1>
        <button onClick = {FirstClick}>{firstCounter}</button>
        <button onClick = {SecondClick}>{secondCounter}</button>
        <button onClick = {ThirdClick}>{thirdCounter}</button>
        <p>Sum {counter}</p>
        
        </>
    )

}

export default Counter;