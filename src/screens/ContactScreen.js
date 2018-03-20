import React from 'react'
import {renderTiledWord} from 'Helpers'
import './ContactScreen.css'

const ContactScreen = (props) => {
	return (
		<React.Fragment>
			{renderTiledWord('@', 'clr4')}
			<div class='spacer'></div>
			<p className='Contact__p'><span style={{color: 'var(--primary)'}}>Email&nbsp;</span><a href="mailto:mitchswaldman@gmail.com?subject=Sup?">mitchswaldman@gmail.com</a></p>
			<p className='Contact__p'><span style={{color: 'var(--primary)'}}>Github&nbsp;</span><a href='https://github.com/mitchswaldman'>mitchswaldman</a></p>
			<p className='Contact__p'><span style={{color: 'var(--primary)'}}>Facebook&nbsp;</span><a href='https://www.facebook.com/mitch.waldman'>Mitch Waldman</a></p>
			<p className='Contact__p'><span style={{color: 'var(--primary)'}}>LinkedIn&nbsp;</span><a href='https://www.linkedin.com/in/mitch-waldman-42199439/'>Mitch Waldman</a></p>
		</React.Fragment>
	)
}

export default ContactScreen