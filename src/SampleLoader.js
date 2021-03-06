import {Component} from 'react'
import {onLoad} from 'ducks/samples'
import {connect} from 'react-redux'
import audioCtx from 'audioCtx'
import {SamplesConfig} from 'Constants'
import pako from 'pako'

class SampleLoader extends Component {
	componentDidMount() {
		Object.keys(SamplesConfig).forEach(key => {
			var request = new XMLHttpRequest()
			request.open('GET', SamplesConfig[key], true)
			request.responseType = 'arraybuffer'
			request.onload = () => {
				if (process.env.NODE_ENV === 'production') {
					var inflatedResponse = pako.inflate(request.response)
					audioCtx.decodeAudioData(inflatedResponse.buffer, (buffer) => {
						this.props.onLoad(key, buffer)
					})
				} else {
					audioCtx.decodeAudioData(request.response, (buffer) => {
						this.props.onLoad(key, buffer)	
					})
				}
			}
			request.send()
		})
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		return null
	}
}

const mapDispatchToProps = (dispatch) => ({
	onLoad: (key, buffer) => dispatch(onLoad(key, buffer))
})

export default connect(null, mapDispatchToProps)(SampleLoader)