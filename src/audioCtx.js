let audioCtx, analyserNode, mixerNode;
try {
	const AudioContext = window.AudioContext || window.webkitAudioContext
	audioCtx = new AudioContext()
	mixerNode = audioCtx.createGain()
	analyserNode = audioCtx.createAnalyser()
	analyserNode.fftSize = 2048
	mixerNode.connect(analyserNode)
	analyserNode.connect(audioCtx.destination)
} catch (e) {
	alert("You're browser doesn't support WebAudio. You dummy.")
}

export {mixerNode, analyserNode}
export default audioCtx

export const playSound = (buffer) => {
	console.log('playing sound')
}