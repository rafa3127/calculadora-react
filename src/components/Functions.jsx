import React from "react"
import Button from "./Button"

const func = ["clear","←"]


const Functions = ({clickFunction}) => {
    const bFuns = func.map(n => {return <Button text = {n} type="funct" key={"Func"+n} clickHandler={clickFunction}/>})
    return(
        <div className="functionButtons">
            {bFuns}
        </div>
    )
}

export default Functions