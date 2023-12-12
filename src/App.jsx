import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car.jsx'
import axios from 'axios'

function App() {

  const [pic, setPic] = useState('')

  useEffect(() => {
    console.log('Use effect hit!')

    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((res) => {
        console.log(res.data)
        setPic(res.data.sprites.front_default)
      })

  }, [])

  let myCars = [
    {
      name: 'Miata',
      year: 1992,
      miles: 117000
    },
    {
      name: 'Suburban',
      year: 2023,
      miles: 7
    },
    {
      name: 'Taurus',
      year: 'old',
      miles: 999999
    }
  ]

  const cars = myCars.map((car) => {
    return (
      <Car 
        name = {car.name}
        year = {car.year}
        miles = {car.miles}
      />
  )
  })

  return (
    <>
      <h1>Cars go here. Look at cars.</h1>

      <img src={pic} alt="" />

      {cars}

      {/* <Car 
        name={'Miata'}
        year={1992}
        miles={117000}
      />

      <Car
        name={'Suburban'}
        year={2023}
        miles={7}
      />

      <Car
        name={'Taurus'}
        year={1994}
        miles={180000}
      /> */}
      
    </>
  )
}

export default App
