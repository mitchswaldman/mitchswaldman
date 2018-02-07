import React from 'react'
import {renderTiledWord} from 'Helpers'
import './SoundsScreen.css'

const SoundsScreen = (props) => {
	return (
		<React.Fragment>
			{renderTiledWord('SOUNDS', 'clr3')}
			<div className='spacer'>
			</div>
			<div className='sound-container'>
				<iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/32835731&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
				<p>This is my favorite collaboration with a rapper - <a href='https://lucidoptics.bandcamp.com/'>Lucid Optics</a>. Get past the intro to get to da groove.</p>
			</div>
			<div className='sound-container'>
				<iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198507737&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
				<p>This is more my older style. Pink Floyd inspired.</p>
			</div>
			<div className='sound-container'>
				<iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345258941&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
				<p>This marked my first foray into pure synth song writing. It's a little too "major sounding", but it grooves nicely.</p>
			</div>
			<div className='sound-container'>
				<iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/244170548&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
				<p>This is the score I made for a friends short film. The music in the movie was pretty much all diegetic, so the score is
				 pretty much all indie. 
				</p>
			</div>
		</React.Fragment>
	)
}

export default SoundsScreen