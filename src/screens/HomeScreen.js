import React from 'react'
import {Message} from 'Constants'
import {tileKey} from 'Helpers'
import ConnectedTile from 'containers/ConnectedTile'

const HomeScreen = (props) => {

	const renderWordWithColorClass = (word, color) => {
      return word.split("").map( (letter, idx) => {
        return (
          <ConnectedTile 
            color={color} 
            tile={tileKey(word, idx)}
            key={`${letter}-${idx}-${color}`}>
            <p>{letter}</p>
          </ConnectedTile>
        )
      })
    }

	return (
		<div className="wrapper">
			<nav>
			  <a href="#">About</a>&nbsp;|&nbsp;
			  <a href="#">Code</a>&nbsp;|&nbsp;
			  <a href="#">Sounds</a>&nbsp;|&nbsp;
			  <a href="#">Contact</a>
			</nav>
			{Message.map(({word, color})=> {
			  return renderWordWithColorClass(word, color)
			})}
		</div>
	)
}

export default HomeScreen