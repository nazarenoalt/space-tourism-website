import React, { useEffect } from 'react'
// styles
import { Wrapper } from './CircleNumberNav';

const CircleNumberNav = ({ onClick }) => {

  const addActiveClass = (e) => {
    const listDivs = document.querySelectorAll('.circle');
    listDivs.forEach(div => {
      if(div.classList.contains("active")) {
        div.classList.remove("active");
      }
      //add default active class
      e 
      ? e.currentTarget.classList.add("active")
      : listDivs[0].classList.add("active")
    })
  }

  useEffect(addActiveClass,[])

  return (
    <Wrapper>
      <div 
        className="circle"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="0"
      >1</div>
      
      <div 
        className="circle"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="1"
      >2</div>

      <div 
        className="circle"
        onClick={(e) => {onClick(e); addActiveClass(e) }}
        value="2"
      >3</div>
    </Wrapper>
  )
}

export default CircleNumberNav