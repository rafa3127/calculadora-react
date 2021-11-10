import React from "react"
import Button from "./Button"


const Numbers = ({clickNumber}) => {
    const nums = [7,8,9,4,5,6,1,2,3,0,"."]
    
    const bNums = nums.map(n => {
        if(n === 0){
            return <Button text = {n.toString()} type="number cero" clickHandler={clickNumber} key={"Number"+n.toString()}/>
        }else{
            return <Button text = {n.toString()} type="number" clickHandler={clickNumber} key={"Number"+n.toString()}/>
        }
    })
    return(
    <div className="numberButtons">
        {bNums}
    </div>
    )
}

export default Numbers