import React from "react"
import Button from "./Button"

const ops = ["/","*","-","+","="]


const Operators = ({clickOperator}) => {
    const bOps = ops.map(n => {return <Button text = {n} type="operator" key={"op"+n} clickHandler={clickOperator}/>})
    return(
    <div className="operators">
        {bOps}
    </div>
    )
}

export default Operators