import * as React from 'react'
import { useState, useEffect} from 'react'
import GreetDetail from './GreetDetail'

const GreetingList = () => {
  const [greetList, setGreetList] = useState([])
  const greetUrl = 'http://localhost:3000/api/v1/greets'

  const fetchGreetList = () => {
    fetch(greetUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setGreetList(data)
      })
  }

  useEffect(() => {
    fetchGreetList()
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="message">
      <button onClick={refreshPage}>Change Greeting</button>
      {greetList.map((message) => 
        <GreetDetail message = { message } key = { message.id } />
      )}
    </div>
  )
}

export default GreetingList
