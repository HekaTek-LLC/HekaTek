import React from 'react'
import Sass from '../../assets/icons/sass.svg'
import './hexagon-icon.scss';


const HexagonIcon = ({icon}) => {
  return (
    <>
      
        <div className="hexagon-wrapper">
        <div className="hexagon">
            <img src={icon.src} alt={icon.alt} />
        </div>
        </div>

    </>
  )
}

export default HexagonIcon;