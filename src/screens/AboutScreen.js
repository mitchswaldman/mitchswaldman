import React from 'react'
import {renderTiledWord} from 'Helpers'
import {Link} from 'react-router-dom'
import './AboutScreen.css'

const AboutScreen = (props) => {
	
	return (
		<React.Fragment>
			{renderTiledWord('ABOUT')}
			<p className='About__p'> 
				My name is Mitch Waldman. I am a software engineer living in San Jose, CA.
				I am a bedroom musician (but who isn't these days). I really love dogs (but who doesn't these days).
				I want to work on products that make people's lives a bit more colorful and enjoyable (but who wouldn't these days).
				<br/>
				<br/>
				In the <Link to='/code'><span style={{color: 'var(--primary)'}}>Code</span></Link> section, you can find some summary info about the programming projects I've participated in.
				<br/>
				<br/>
				In the <Link to='/sounds'><span style={{color: 'var(--primary)'}}>Sounds</span></Link> section, you can find a curated list of music I've produced.
				<br/>
				<br/>
				In the <Link to='/contact'><span style={{color: 'var(--primary)'}}>Contact</span></Link> section, you can find, well, you know. 
			</p>
		</React.Fragment>
	)
}

export default AboutScreen