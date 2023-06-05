import React from 'react'
import "./Product.css"

export const CardProduct = (props) => {
    function HanClick(){
        alert(`Produk ${props.nama} dengan harga ${props.harga} merupakan produk dengan kualitas terbaik`)
    }
  return (
    <div onClick={HanClick} className='card' style={{
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
