import {tilePlayed, tileStopped, getTileState} from 'ducks/tiles'
import {areSamplesLoaded} from 'ducks/samples'
import {connect} from 'react-redux'
import Tile from 'components/Tile'

const ConnectedTile = (() => {
	const mapStateToProps = (state, {tile}) => ({
		playing: getTileState(state, tile),
		isLoaded: areSamplesLoaded(state)
	})

	const mapDispatchToProps = (dispatch, {tile}) => ({
		onEnter: () => dispatch(tilePlayed(tile)),
		onLeave: () => dispatch(tileStopped(tile))
	})

	return connect(mapStateToProps, mapDispatchToProps)(Tile)
})()

export default ConnectedTile