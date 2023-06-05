import React from 'react'
import "./Product.css"

export const CardProduct = (props) => {
  return (
    <div className='card' style={{
        width: 240,
        height: 250,
        backgroundColor: "pink",
        padding: 60,
        marginBottom: 15,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
    }}>
        <img src={props.jpg} alt="" />
        <p>{props.nama}</p>
        <h3>{props.harga}</h3>
    </div>
  )
}
