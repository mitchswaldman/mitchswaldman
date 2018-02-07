import React from 'react'
import Transition from 'react-transition-group/Transition'

const Tile = ({color, onEnter: onEnterCb = null, isLoaded = false, onLeave : onLeaveCb = null, playing = false, children}) => {
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
	const defaultStyle = {
	  transition: `opacity ${300}ms ease-in-out`,
	  opacity: 0,
	}

	const transitionStyles = {
	  entering: { opacity: 0 },
	  entered:  { opacity: 1 },
	};
	return (
		<Transition in={isLoaded} timeout={300}>
			{(state) => (
				<div 
					style={{
						...defaultStyle,
						...transitionStyles[state]
					}}>
					<div className={`letter-box ${color} ${playing && 'letter-box-hover'}`} 
			        onMouseEnter={onEnter}
			        onMouseLeave={onLeave}
			        onTouchStart={onEnter}
			        onTouchEnd={onLeave}>
			        	{children}
			      	</div>
		      	</div>
	      	)}
      	</Transition>
	)
}

export default Tile