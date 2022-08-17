import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Greeting = () => {
  return (
    <div className='container'>
      <h1>Greetings</h1>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Greeting />, document.getElementById('greet'))
})

export default Greeting
