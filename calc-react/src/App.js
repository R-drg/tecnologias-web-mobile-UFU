import './App.css'
import React,{useState} from 'react'
import CalcButton from "./CalcButton"
function App() {

    const buttonLabels = [7,8,9,"C",4,5,6,"/",1,2,3,"*","-","0","+","="]
    var [display,setDisplay] = useState("0")
    var[operator,setOperator] = useState(null)
    
    const handleButtons = (e) =>{
        if(e.target.value==="C"){
            return setDisplay("0")
        }
        if(e.target.value==="="){
            const numbers=display.split(operator).map(x=>+x)
            console.log(operator)
            var res=display;
            switch(operator){
                default:
                    break;
                case "+":
                    res = numbers[0]+numbers[1]
                    break;
                case "-":
                    res = numbers[0]-numbers[1]
                    break;
                case "/":
                    res = numbers[0]/numbers[1]
                    res = res.toFixed(4)
                    break;
                case "*":
                    res = numbers[0]*numbers[1]
                    break;
            }
            setOperator(null)
            return setDisplay(res)
        }
        if(!isNaN(parseInt(e.target.value))){
            if(display==="0"){
                return setDisplay(e.target.value)
            }
            return setDisplay(display+=e.target.value)
        }
        if(!operator){
            setDisplay(display+=e.target.value)
            setOperator(e.target.value)
        }
    }

    const buttons=buttonLabels.map((label,i)=> {
        return(
            <CalcButton key={i} label={label} handler={handleButtons}/>
        )
    })

    return (
        <div className = "container" >
            <div className="calc-body">
                <div className="calc-display">
                    {display}
                </div>
                <div className="calc-buttons">
                    {buttons}
                </div>
            </div>
        </div>
    );
}

export default App;