import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.currSushi.map(sushi => 
        <Sushi 
          key={sushi.id} 
          eatenSushi={props.eatenSushi} 
          eatSushi={props.eatSushi} 
          sushi={sushi}
        />)
        }
        <MoreButton updateCurrSushi={props.updateCurrSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer