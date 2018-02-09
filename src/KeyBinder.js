import {Component} from 'react'
import {connect} from 'react-redux'
import {tilePlayed, tileStopped} from 'ducks/tiles'
import {TileKeys} from 'Constants'

const KEY_CODE_MAP = (() => {
	var map = {}
	for(let i = 65; i < 65 + 26; i++) {
		map[i] = String.fromCharCode(i)
	}
	return map
})()

const qwerty = ['E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'C', 'V', 'B', 'N', 'M' ]
class KeyBinder extends Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleKeyUp = this.handleKeyUp.bind(this)
	}
	
	handleKeyDown = (e) => {
		const idx = qwerty.indexOf(KEY_CODE_MAP[e.keyCode])
		if (idx > -1) {
			this.props.tilePlayed(TileKeys[idx])
		}
	}

	handleKeyUp = (e) => {
		const idx = qwerty.indexOf(KEY_CODE_MAP[e.keyCode])
		if (idx > -1) {
			this.props.tileStopped(TileKeys[idx])
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
		document.addEventListener('keyup', this.handleKeyUp)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
		document.removeEventListener('keyup', this.handleKeyUp)
	}

	shouldComponentUpdate() {
		return false
	}
	render() {
		return null
	}
}

const mapDispatchToProps = (dispatch) => ({
	tilePlayed: (tile) => dispatch(tilePlayed(tile)),
	tileStopped: (tile) => dispatch(tileStopped(tile))
})

export default connect(null, mapDispatchToProps)(KeyBinder)