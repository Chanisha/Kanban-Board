import React from 'react'

function UseEnv() {
     
    const myName = process.env.REACT_APP_MY_NAME

    console.log(myName,"myName")

  return (
    <div>
        <h1>{myName}</h1>
    </div>
  )
}

export default UseEnv