import React from 'react'

const nama = "Putri Mulyani"

export const Header = () => {
  return (
    <header style={{
        backgroundColor: "antiquewhite",
        padding: 7,
        marginBottom: 10,
        height: 25,
    }}>
        {nama}
    </header>
  )
}
