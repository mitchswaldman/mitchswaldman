let audioCtx;
try {
	const AudioContext = window.AudioContext || window.webkitAudioContext
	audioCtx = new AudioContext()
} catch (e) {
	alert("You're browser doesn't support WebAudio. You dummy.")
}
export default audioCtx

export const playSound = (buffer) => {
	console.log('playing sound')
}