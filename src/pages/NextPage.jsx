import React from 'react'
import { useLocation } from 'react-router-dom'

const NextPage = () => {
    const Location=useLocation()
    let ParticularImg=Location.state.x
    console.log(ParticularImg);
    
  return (
    <div>
      {/* NextPage */}
     <img src={ParticularImg.webformatURL} alt="next-image" />
    </div>
  )
}

export default NextPage
