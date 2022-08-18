import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import GreetingList from './GreetingList'

const Greeting = () => {
  return (
    <div className='container'>
      <h1>Greetings from React</h1>
      <GreetingList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('greet'))
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
)

export default Greeting
