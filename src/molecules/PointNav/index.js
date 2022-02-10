import React, { useEffect } from 'react'
// styles
import { Wrapper } from './PointNav';

const PointNav = ({ onClick }) => {

  const addActiveClass = (e) => {
    const listDivs = document.querySelectorAll('.point');
    listDivs.forEach(div => {
      if(div.classList.contains("active")) {
        div.classList.remove("active");
      }

     e.currentTarget.classList.add("active")
    })
      
    console.log(listDivs)
  }

  return (
    <Wrapper>
      <div 
        className="point"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="0"
      ></div>
      <div 
        className="point"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="1"
      ></div><div 
        className="point"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="2"
      ></div><div 
        className="point"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="3"
      ></div>
    </Wrapper>
  )
}

export default PointNav