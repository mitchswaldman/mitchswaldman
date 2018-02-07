import React from 'react'
import {connect} from 'react-redux' 
import {Message} from 'Constants'
import {tileKey} from 'Helpers'
import ConnectedTile from 'containers/ConnectedTile'
import {areSamplesLoaded} from 'ducks/samples'
import './HomeScreen.css'

const HomeScreen = ({isLoaded = false}) => {

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
			{isLoaded && Message.map(({word, color})=> {
			  return renderWordWithColorClass(word, color)
			})}
			{!isLoaded &&
				<div class="spinner-wrapper">
					<div class="spinner">
					  <div class="bounce1"></div>
					  <div class="bounce2"></div>
					  <div class="bounce3"></div>
					</div>
				</div>
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	isLoaded: areSamplesLoaded(state)
})

export default connect(mapStateToProps)(HomeScreen)