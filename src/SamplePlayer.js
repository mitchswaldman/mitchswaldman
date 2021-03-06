import {Component} from 'react'
import {getActiveTiles} from 'ducks/tiles'
import {connect} from 'react-redux'
import {SampleBuffer} from 'middleware/SampleBuffer'
import {arr_diff} from 'Helpers'
import audioCtx, {mixerNode} from 'audioCtx'

const playSound = (audioCtx, buffer) => {
	const source = audioCtx.createBufferSource()
	source.buffer = buffer 

	const gainNode = audioCtx.createGain()
	source.connect(gainNode)
	gainNode.connect(mixerNode)
	source.start()
	return gainNode
}

const stopSound = (gainNode, bufferSource) => {
	const timeConstant = 0.010
	gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + timeConstant)
	setTimeout(() => gainNode.disconnect(), timeConstant * 1000)
}

const sampleCache = {}
class SamplePlayer extends Component {
	componentWillReceiveProps({activeTiles: nextActiveTiles}) {
		const {activeTiles: thisActiveTiles} = this.props
		const newActivatedTiles = arr_diff(thisActiveTiles, nextActiveTiles) 
		const deactivatedTiles = arr_diff(nextActiveTiles, thisActiveTiles)
		
		for (let i = 0; i < newActivatedTiles.length; i++) {
			const sampleKey = newActivatedTiles[i]
			if (!sampleCache[sampleKey]) {
				const source = playSound(audioCtx, SampleBuffer[sampleKey])
				sampleCache[sampleKey]	 = source
			}			
		}

		for (let j = 0; j < deactivatedTiles.length; j++) {
			const sampleKey = deactivatedTiles[j]
			stopSound(sampleCache[sampleKey])
			delete sampleCache[sampleKey]
		}
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		return null
	}
}

const mapStateToProps = (state) => ({
	activeTiles: getActiveTiles(state)
})

export default connect(mapStateToProps)(SamplePlayer)