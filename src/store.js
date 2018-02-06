import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import tiles from 'ducks/tiles'
import samples from 'ducks/samples'
import SampleBufferMiddleware from 'middleware/SampleBuffer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(SampleBufferMiddleware)
)

const store = createStore(
	combineReducers({
		tiles,
		samples
	}),
	enhancer
)

export default store