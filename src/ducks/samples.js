import {SamplesConfig} from 'Constants'

export const ON_LOAD = 'ON_LOAD'

export const onLoad = (tile, buffer) => ({
	type: ON_LOAD,
	payload: {
		tile, 
		buffer
	}
})

const initState = {
	samples: {},
	samplesLoaded: false
}

export default (state=initState, {type, payload} = {}) => {
	switch (type) {
		case ON_LOAD: 
			const {tile} = payload
			let newState = {samples: {...state.samples, [tile]: true}, samplesLoaded: state.samplesLoaded}
			newState.samplesLoaded = Object.keys(newState.samples).length === Object.keys(SamplesConfig).length
			return newState
		default:
			return state
	}
}
