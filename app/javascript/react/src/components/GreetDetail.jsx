import * as React from 'react'

const GreetDetail = (props) => {
  return (
    <div>
      <h2>
        { props.message.greet }
      </h2>
    </div>
  )
}

export default GreetDetail