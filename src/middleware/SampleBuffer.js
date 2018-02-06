import {ON_LOAD} from 'ducks/samples'

export const SampleBuffer = {}
const SampleBufferMiddleware = dispatch => next => action => {
	if (action.type !== ON_LOAD) {
		return next(action)
	}
	const {tile, buffer} = action.payload
	SampleBuffer[tile] = buffer
	next(action)
}

export default SampleBufferMiddleware