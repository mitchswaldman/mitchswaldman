import {createSelector} from 'reselect'
import {Message} from 'Constants'
import {tileKey} from 'Helpers'

// Action Types
export const TILE_PLAYED = 'TILE_PLAYED'
export const TILE_STOPPED = 'TILE_STOPPED'

// Action creators
export const tilePlayed = (tile) => ({
	type: TILE_PLAYED,
	payload: {
		tile
	}
})

export const tileStopped = (tile) => ({
	type: TILE_STOPPED,
	payload: {
		tile
	}
})


// Selectors
export const getActiveTiles = createSelector(
	state => state.tiles,
	(tiles) => {
		return Object.keys(tiles).filter(key => tiles[key])
	}
)

// Reducer
const initTileState = (() => {
	const tileState = {}
	Message.forEach(({word}) => {
		word.split("").forEach(letter => {
			const key = tileKey(word, letter)
			tileState[key] = false
		})
	})
	return tileState
})()

export default (state = initTileState, action = {}) => {
	const {type, payload : {tile} = {}} = action 
	switch (type) {
		case TILE_PLAYED:
			return {
				...state,
				[tile]: true
			}
		case TILE_STOPPED:
			return {
				...state,
				[tile]: false
			}
		default:
			return state
	}
}