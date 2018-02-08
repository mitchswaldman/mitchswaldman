import React from 'react'
import {connect} from 'react-redux'
import {analyserNode} from 'audioCtx'
import {lastSamplePlayed} from 'ducks/samples'

let drawVisual, strokeColor = '#000';
class Visualizer extends React.Component {

	componentDidMount() {
		const canvas = document.getElementById('my-canvas')
		const ctx = canvas.getContext('2d')
		let WIDTH, HEIGHT, SCALE = 1.5
		
		const canvasResize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			WIDTH = canvas.width
			HEIGHT = canvas.height
		}

		window.addEventListener('resize', canvasResize)
		canvasResize()
		
		let bufferLength = analyserNode.frequencyBinCount
		let dataArray = new Uint8Array(bufferLength)
		ctx.clearRect(0, 0, WIDTH, HEIGHT)

		
		const draw = (t) => {
			drawVisual = window.requestAnimationFrame(draw)
			ctx.fillStyle = 'rgb(255, 255, 255)';
			ctx.fillRect(0, 0, WIDTH, HEIGHT);
			analyserNode.getByteFrequencyData(dataArray)
			ctx.strokeStyle = strokeColor
			ctx.beginPath()
			let sliceWidth = WIDTH * 1.0 / bufferLength
			let x = 0

			for (let i = 0; i < bufferLength; i++) {
				var v = dataArray[i]
				var y = HEIGHT  - SCALE * v

				if ( i === 0) {
					ctx.moveTo(x, y)
				} else {
					ctx.lineTo(x, y)
				}

				x += sliceWidth
			}

			ctx.lineTo(WIDTH, HEIGHT/2)
			ctx.stroke()
		}

		draw()
	}

	// componentWillReceiveProps({lastSample = 'Hello'}) {
	// 	const firstTwo = lastSample.substring(0, 2).toLowerCase()
	// 	console.log(firstTwo)
	// 	switch (firstTwo) {
	// 		case 'he':
	// 			strokeColor = '#f6d365'
	// 			return
	// 		case 'my':
	// 			strokeColor = '#fbc2eb'
	// 			return 
	// 		case 'na':
	// 			strokeColor = '#84fab0'
	// 			return
	// 		case 'is':
	// 			strokeColor = '#a1c4fd'
	// 			return 
	// 		case 'mi':
	// 			strokeColor = '#ffecd2'
	// 			return
	// 		default:
	// 			strokeColor ='#000'
	// 	}
	// }

	componentWillUnmount() {
		window.cancelAnimationFrame(drawVisual)
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		return null;
	}
}

const mapStateToProps = (state) => ({
	lastSample : lastSamplePlayed(state)
})
export default connect(mapStateToProps)(Visualizer)