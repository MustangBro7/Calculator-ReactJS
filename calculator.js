import React from 'react'
function Calc()
{
    const [inputval , setInputval] = React.useState('')
    function handleClick(event){
        const value = event.target.value;
        const value1 =parseFloat(value)
        console.log(value1)
        
        setInputval(prevState =>
            prevState + value)
   };
   function handleOperator(event){
    console.log(event.target.value)
    const opval = event.target.value
    setInputval(prevState =>
        prevState + opval)
   } 
   function handleSubmit()
   {
    setInputval(eval(inputval))
   }
   function handleChange(event)
   {
    const change = event.target.value;
    setInputval(change)
    console.log(change)
   }
   function handleAC()
   {
    setInputval("")
   }
   function handleDEL()
   {
    setInputval(prevState => prevState.slice(0,-1))
   } 
    return(
        <div className="wrapper">
            
            <div className="container">
            <input value={inputval} className="input" onChange={handleChange}></input>
            <button className="number1" onClick={handleAC}>AC</button>
            <button className="number" onClick={handleDEL}>DEL</button>
            <button className="number"value='/' onClick={handleOperator}>/</button>
            <button className="number"value='1' onClick={handleClick}>1</button>
            <button className="number"value='2' onClick={handleClick}>2</button>
            <button className="number"value='3' onClick={handleClick}>3</button>
            <button className="number"value='*' onClick={handleOperator}>*</button>
            <button className="number"value='4' onClick={handleClick}>4</button>
            <button className="number"value='5' onClick={handleClick}>5</button>
            <button className="number"value='6' onClick={handleClick}>6</button>
            <button className="number"value='+' onClick={handleOperator}>+</button>
            <button className="number"value='7' onClick={handleClick}>7</button>
            <button className="number"value='8' onClick={handleClick}>8</button>
            <button className="number"value='9' onClick={handleClick}>9</button>
            <button className="number"value='-' onClick={handleOperator}>-</button>
            <button className="number"value='.' onClick={handleOperator}>.</button>
            <button className="number"value='0' onClick={handleClick}>0</button>
            <button className="number1" onClick={handleSubmit}>=</button>
        </div>
        </div>
    )
}
export default Calc