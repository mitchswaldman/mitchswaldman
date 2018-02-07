import React from 'react'

const Tile = ({color, onEnter: onEnterCb = null, onLeave : onLeaveCb = null, playing = false, children}) => {
	const onEnter = ({currentTarget}) => {
		currentTarget.classList.add('letter-box-hover')
		if (typeof onEnterCb === 'function') {
			onEnterCb()
		}
	}

	const onLeave = ({currentTarget}) => {
		currentTarget.classList.remove('letter-box-hover')
		if (typeof onLeaveCb === 'function') {
			onLeaveCb()
		}
	}

	return (
		<div className={`letter-box ${color} ${playing && 'letter-box-hover'}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onTouchStart={onEnter}
        onTouchEnd={onLeave}>
        	{children}
      	</div>
	)
}

export default Tile