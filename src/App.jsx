/* eslint no-eval:0 */

import React from 'react'
import { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import Operators from './components/Operators'
import Result from './components/Result'

import './App.css'


const App = () => {
    const [stack, setStack] = useState("0");

    return (
        <main className="bg">
        <div className="calculadora">
            <Result value={stack} />
            <Numbers clickNumber={number => setStack(stack==="0"?number:`${stack}${number}` )}/>
            <Operators clickOperator={(op) =>op==="=" ? setStack(eval(stack).toString()) : setStack(stack==="0"?op:`${stack}${op}`)}/>
            <Functions clickFunction={(f)=>{
                if(f==="clear"){setStack("0")}
                if(f==="←"){if(stack.length<=1){setStack("0")}else{setStack(stack.substring(0,stack.length-1))}}
            }}/>
        </div>
      </main>
    )
}

export default App