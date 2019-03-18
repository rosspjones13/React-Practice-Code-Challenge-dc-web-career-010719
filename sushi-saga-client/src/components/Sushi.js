import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
        {  
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt={props.sushi.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi