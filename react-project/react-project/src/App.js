import React from "react"
import Navbar from "./Navbar"
import data from "./data"
import Hero from "./Hero"
import Card from "./Card"
import './App.css';

export default function App() {
  const world = data.map(item => {
      console.log(item)
      return (
          <Card
              item={item}
          />
      )
  })  
  return (
      <div>
      <Navbar />
      <section className="cards-list">
          {world}
      </section>
      <Hero />
      </div>
  )
}