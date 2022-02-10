import React from 'react'
// styles
import { Wrapper } from './PointNav';

const PointNav = ({ onClick }) => {
  return (
    <Wrapper>
      <div className="point" onClick={(e) => onClick(e)} value="0"></div>
      <div className="point" onClick={(e) => onClick(e)} value="1"></div>
      <div className="point" onClick={(e) => onClick(e)} value="2"></div>
      <div className="point" onClick={(e) => onClick(e)} value="3"></div>
    </Wrapper>
  )
}

export default PointNav