import React from 'react'
import {connect} from 'react-redux' 
import KeyBinder from 'KeyBinder'
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
		<React.Fragment>
			<KeyBinder />
			{isLoaded && Message.map(({word, color})=> {
			  return renderWordWithColorClass(word, color)
			})}
			{!isLoaded &&
				<div className="spinner-wrapper">
					<div className="spinner">
					  <div className="bounce1"></div>
					  <div className="bounce2"></div>
					  <div className="bounce3"></div>
					</div>
				</div>
			}
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	isLoaded: areSamplesLoaded(state)
})

export default connect(mapStateToProps)(HomeScreen)