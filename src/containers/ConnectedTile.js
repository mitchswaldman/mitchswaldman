import {tilePlayed, tileStopped} from 'ducks/tiles'
import {connect} from 'react-redux'
import Tile from 'components/Tile'

const ConnectedTile = (() => {
	const mapDispatchToProps = (dispatch, {tile}) => ({
		onEnter: () => dispatch(tilePlayed(tile)),
		onLeave: () => dispatch(tileStopped(tile))
	})

	return connect(null, mapDispatchToProps)(Tile)
})()

export default ConnectedTile