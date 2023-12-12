import React from 'react'

const Car = (props) => {
    console.log(props)

    const {name, year, miles} = props

  return (
    <div>
        <img src="" alt="" />
        <p>Name: {name}</p>
        <p>Year: {year}</p>
        <p>Miles: {miles}</p>
    </div>
  )
}

export default Car