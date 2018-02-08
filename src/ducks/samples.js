import {SamplesConfig} from 'Constants'
import {TILE_PLAYED} from 'ducks/tiles'
export const ON_LOAD = 'ON_LOAD'

export const onLoad = (tile, buffer) => ({
	type: ON_LOAD,
	payload: {
		tile, 
		buffer
	}
})

// Selectors
export const areSamplesLoaded = (state) => state.samples.samplesLoaded

export const lastSamplePlayed = (state) => state.samples.lastSample

// Reducer
const initState = {
	samples: {},
	samplesLoaded: false,
	lastSample: null
}

export default (state=initState, {type, payload} = {}) => {
	switch (type) {
		case ON_LOAD: 
			const {tile} = payload
			let newState = {samples: {...state.samples, [tile]: true}, samplesLoaded: state.samplesLoaded}
			newState.samplesLoaded = Object.keys(newState.samples).length === Object.keys(SamplesConfig).length
			return newState
		case TILE_PLAYED:
			return {...state, lastSample: payload.tile}
		default:
			return state
	}
}
