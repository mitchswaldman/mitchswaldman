import React from 'react'
import {renderTiledWord} from 'Helpers'
import './CodeScreen.css'

const CodeScreen = (props) => {
	return (
		<React.Fragment>
			{renderTiledWord('CODE', 'clr2')}
			<div className='spacer'></div>
			<div className='code-container'>	
				<img src='img/mitchswaldman.png'/>
				<a href='https://github.com/mitchswaldman/mitchswaldman'><h4 className='project-title'><i className='fab fa-github'></i> This website </h4></a>
				<h6 className='project-subtitle'>&ldquo;Hello, my name is Mitch.&rdquo;</h6>
				<ul className='tech-list'>
					<li><img className='tech-icon' src='https://www.qualium-systems.com/wp-content/uploads/2015/07/icon-reactjs.svg'></img></li>
					<li><img className='tech-icon' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'></img></li>
					<li><img className='tech-icon' src='https://visualpharm.com/assets/136/Css3-595b40b65ba036ed117d3eb8.svg'></img></li>
					<li><img className='tech-icon' src='https://cdn.iconscout.com/public/images/icon/free/png-512/html5-logo-341eda6a9876c66d-512x512.png'></img></li>
				</ul>
				<p>
					This website was built using React/Redux, the awesome Web Audio API, and the handy CSS grid. 
					I really enjoy using React and Redux together. They enable a really nice data flow for sample launching that 
					allows a modular architecture. A sample launch could easily trigger all sorts of weirdness. Getting the right 
					data model, now that's a different story...<br/><br/>
					CSS grid was really the inspiration for the homepage. After learning about this display style, I felt 
					inspired to create something that really emphasized the &ldquo;grid&rdquo; responsive layout; thus, a responsive sample pad. 
					It may not work on all browsers, but soon that's not gonna be an issue. Let's move forward, amirite?<br/><br/>
					Man, I love the Web Audio API, and the documentation of it. It makes loading and playing the samples a breeze. 
					The visualization on the homepage is also made super easy by Web Audio's ability to grab frequency data from an audio node.<br/>
					Click that Github link if you wanna see the nitty-gritty.
				</p>
			</div>
			<div className='code-container'>
				<img src='img/rentennial.png'/>
				<a href='https://github.com/mitchswaldman/rentennial'><h4 className='project-title'><i className='fab fa-github'></i> Rentennial</h4></a>
				<h6 className='project-subtitle'>Home rental platform for independent landlords and tenants.</h6>
				<ul className='tech-list'>
					<li><img className='tech-icon' src='https://cdn.worldvectorlogo.com/logos/django.svg'/></li>
					<li><img className='tech-icon' src='https://stripe.com/img/v3/home/twitter.png'/></li>
					<li><img className='tech-icon' src='https://jaystack.com/wp-content/uploads/2017/06/rabbitmq-1.png'/></li>
					<li><img className='tech-icon' src='https://www.qualium-systems.com/wp-content/uploads/2015/07/icon-reactjs.svg'></img></li>
					<li><img className='tech-icon' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'></img></li>
					<li><img className='tech-icon' src='https://react.semantic-ui.com/logo.png'/></li>
					<li><img className='tech-icon' src='https://cdn.iconscout.com/public/images/icon/free/png-512/heroku-logo-31e53ea68ff108fc-512x512.png'/></li>
				</ul>
				<h6 className='project-subtitle'><a href='https://rentennial.io/' style={{color: 'purple'}}>https://rentennial.io</a></h6>
				<p>
					Okay, so this is a big ol' project. It started out as my senior engineering project, but after I graduated 
					I decided to take some more time to build it out.<br/><br/>
					Rentennial is a end-to-end home rental management website for small-time landlords and their tenants. The 
					target audience is landlords who rent out a room or a home or two, and their tenants. The app aims to 
					be a one-stop shop for managing a rental: tenants can search listings, apply, sign a lease, and pay rent on the 
					site. Rentennial does not require users to participate in every aspect of the site, as it's intended to provide 
					a light-weight framework for users. <br/><br/>
					While the site is live, payments are disabled until further integration testing (testing Stripe webhooks is 
					a pain in the butt). Accepting people's money is scary, and I don't want to mess that up. I'm also currently applying to different VC firms, so if ya know anyone by the name of Mr. Moneybags 
					who may be interested, drop me a line.
				</p>
			</div>
			<div className='code-container'>
				<img src='img/mattmillerladykiller.png'/>
				<a href='https://github.com/mitchswaldman/mattmiller-ladykiller'><h4 className='project-title'><i className='fab fa-github'></i> Matt Miller Lady Killer</h4></a>
				<h6 className='project-subtitle'>Bonson or Chanson</h6>
				<ul className='tech-list'>
					<li><img className='tech-icon' src='https://www.qualium-systems.com/wp-content/uploads/2015/07/icon-reactjs.svg'></img></li>
					<li><img className='tech-icon' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'></img></li>
					<li><img className='tech-icon' src='https://visualpharm.com/assets/136/Css3-595b40b65ba036ed117d3eb8.svg'></img></li>
					<li><img className='tech-icon' src='https://cdn.iconscout.com/public/images/icon/free/png-512/html5-logo-341eda6a9876c66d-512x512.png'></img></li>
				</ul>
				<h6 className='project-subtitle'><a href='mattmillerladykiller.com' style={{color: 'purple'}}>http://mattmillerladykiller.com</a></h6>
				<p>
					This was a Christmas gift for a good friend of mine. It's a precursor to the site you are on now. 
					Building this site taught me the basics of using React, Redux, and Web Audio together. 
					The grid sample pad area is actually implemented in flexbox though, not CSS grid. This was before I 
					knew about CSS grid. The samples in this site are chopped up from a recording of my friend 
					that I had him do under false pretenses in order to keep the site a secret. Sorry I lied to you, Matt.<br/><br/>
					Engage the Chanson mode for a little change in tone.  
				</p>
			</div>
			<div className='code-container'>
				<img src='img/robot.jpg'/>
				<h4 className='project-title'>NASA RASC-AL RoboOps - SJSU, 2015</h4>
				<h6 className='project-subtitle'>Almost beat M.I.T. We done tied.</h6>
				<ul className='tech-list'>
					<li><img className='tech-icon' src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png'/></li>
					<li><img className='tech-icon' src='https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png'/></li>
				</ul>
				<p>
					In my junior year of college, I joined the SJSU Robotics club. We built a rover to compete in the 
					NASA RASC-AL RoboOps contest. The contest challenges engineerings teams from around the country to build a rover 
					that will be deployed in Houston, TX and piloted from your university. The winner is the school whose 
					rover can traverse the make-shift "martian terrain" and collect the most "alien rock samples" (colored rocks  
					scattered throughout the terrain). My partner and I programmed the robot's "eye," a camera mounted on a gyro 
					whose pitch and yaw was programmable via an Arduino interface. I built the web interface for controlling 
					the camera, and I piloted the eye during the actual competition. It was insanely fun and intense. 
				</p>
			</div>
		</React.Fragment>
	)
}

export default CodeScreen