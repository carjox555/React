import React from 'react'


const frutas = (props) => {
    
  return (
    <>
        <ul>
        {props.frutasAp.map((fruta, index)=>(
          <li key={fruta}>
            {index+1}-{fruta}</li>
        ))}
      </ul>
      <p>PArr</p>
    </>
  )
}

export default frutas