import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0)

  function increaseCounter(){
    setCount(prevCount => prevCount + 1)
  }

  function decreaseCounter(){
    setCount(prevCount => prevCount - 1)
  }

  function resetCounter(){
    setCount(0)
  }

  return (
    <section className="counter-section">
      <p className="count">{count}</p>
      <div className="button-container">
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={resetCounter}>reset</button>
      </div>
    </section>
  )
}