import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export function CounterApp({ value }) {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    // console.log(event)
    setCounter(counter + 1)
    // setCounter( (c) => c +1)
  }

  const incrementador = () => {
    setCounter(counter-1)
  }

  //el valor de counter pasa a ser el valor inicial 
  const reset = () => {
    setCounter(value)
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      {/* el valor de onclick pasa a ser el valor del parametro de la funcion llamada */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={incrementador}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
} 