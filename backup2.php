<?php
// Template Name:  Front-page
?>
<?php get_header(); ?>
<canvas id="space"></canvas>
<div class="skillset d-flex justify-content-center flex-wrap">
	<ul class="languages">
		<li>Languages</li>
		<hr>
		<li>HTML/CSS</li>
		<li>Sass</li>
		<li>JavaScript</li>
		<li>PHP</li>
		<li>Liquid</li>
	</ul>
	<ul class="environments">
		<li>Environments</li>
		<hr>
		<li>WordPress</li>
		<li>Shopify</li>
		<li>Squarespace</li>
		<li>WooCommerce</li>
	</ul>
	<ul class="libraries">
		<li>Libraries</li>
		<hr>
		<li>JQuery</li>
		<li>Bootstrap</li>
		<li>three.js</li>
		<li>d3.js</li>
		<li>Mapbox / Leaflet</li>
		<li>Turf.js</li>
	</ul>
	<ul class="design">
		<li>Graphic Design</li>
		<hr>
		<li>Mad Photoshop Skills</li>
		<li>Adobe Creative Suite</li>
		<li>Blender (just started)</li>
	</ul>
	<ul class="marketing">
		<li>Marketing</li>
		<hr>
		<li>Google Adwords</li>
		<li>Facebook/IG Ads</li>
		<li>Basic SEO</li>
	</ul>
</div>
<div class="astronaut-container Small Init">
	<div class="astronaut">
		<div class="head">
			<img class="helmet" src="<?php echo get_template_directory_uri(); ?>/svg/helmet.svg">
			<img class="shield" src="<?php echo get_template_directory_uri(); ?>/svg/shield.svg">
			<img class="details" src="<?php echo get_template_directory_uri(); ?>/svg/helmet-details.svg">
		</div>
		<div class="upper-body">
			<img class="torso" src="<?php echo get_template_directory_uri(); ?>/svg/torso-contents.svg">
			<img class="torso" src="<?php echo get_template_directory_uri(); ?>/svg/torso-body.svg">
			<div class="right-arm">
				<img class="upper" src="<?php echo get_template_directory_uri(); ?>/svg/upper-arm-right.svg">
				<div class="lower">
					<img class="forearm" src="<?php echo get_template_directory_uri(); ?>/svg/lower-arm-right.svg">
					<div class="hand">
						<img id="particle" style="display: none" src="<?php echo get_template_directory_uri(); ?>/media/particle.png">
						<img class="whole-hand" src="<?php echo get_template_directory_uri(); ?>/svg/hand-right.svg">
						<img class="thumb" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-left.svg">
						<img class="finger-1" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-right.svg">
						<img class="finger-2" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-right.svg">
						<img class="finger-3" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-right.svg">
						<img class="finger-4" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-right.svg">
					</div>
					<svg height="100" width="100" class="jet right"></svg>
				</div>
			</div>
			<div class="left-arm">
				<img class="upper" src="<?php echo get_template_directory_uri(); ?>/svg/upper-arm-left.svg">
				<div class="lower">
					<img class="forearm" src="<?php echo get_template_directory_uri(); ?>/svg/lower-arm-left.svg">
					<div class="hand">
						<img id="particle-rev" style="display: none" src="<?php echo get_template_directory_uri(); ?>/media/particle-rev.png">
						<img class="whole-hand" src="<?php echo get_template_directory_uri(); ?>/svg/hand-left.svg">
						<img class="thumb" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-left.svg">
						<img class="finger-1" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-left.svg">
						<img class="finger-2" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-left.svg">
						<img class="finger-3" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-right.svg">
						<img class="finger-4" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-right.svg">
					</div>
					<svg height="100" width="100" class="jet jet-left"></svg>
				</div>
			</div>
			<img class="belt" src="<?php echo get_template_directory_uri(); ?>/svg/belt.svg">
		</div>
		<div class="lower-body">
			<div class="right-leg">
				<img class="upper" src="<?php echo get_template_directory_uri(); ?>/svg/upper-leg-right.svg">
				<div class="lower">
					<img class="calve" src="<?php echo get_template_directory_uri(); ?>/svg/lower-leg-right.svg">
					<img class="foot" src="<?php echo get_template_directory_uri(); ?>/svg/foot-right.svg">
				</div>
			</div>
			<div class="left-leg">
				<img class="upper" src="<?php echo get_template_directory_uri(); ?>/svg/upper-leg-left.svg">
				<div class="lower">
					<img class="calve" src="<?php echo get_template_directory_uri(); ?>/svg/lower-leg-left.svg">
					<img class="foot" src="<?php echo get_template_directory_uri(); ?>/svg/foot-left.svg">
				</div>
			</div>
		</div>
	</div>
</div>
<div class="space-bg">
	<div class="space outerspace" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
	<div class="space innerspace Slow-Float" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
</div>
<div class="content">
	<div class="about Hidden">
		<h3><span>Greetings</span></h3>
		<p>I am a self taught web developer from Washington DC, now living in coastal Downeast Maine. Like so many, my journey into code began at sea, on a lobster fishing vessel named the Uptown Girl.</p>
		<p>I created my first website while fishing -- a simple Shopify store. While I didn't earn any money, I discovered that more than anything, I loved tinkering with the site's code. My intrigue quickly snowballed into a passion.</p>
		<p>I quit fishing soon afterwards, began <a href="www.boldcoastcreative.com" target="_blank">Bold Coast Creative</a>, and set out outbuilding websites for local businesses. I love researching, practicing, and improving my understanding of programming.</p>
		<p>I am currently seeking full-time employment.</p>
		<h3><span>Alex McKay</span></h3>
	</div>
	<div class="portfolio">
		<div class="project">
			<div id="chipmans" class="planet portfolio-site" data-site="chipmans">
				<h2>Lobsters shipped from Maine.</h2>
				<img class="buoy" src="<?php echo get_bloginfo('template_directory') ?>/svg/buoy.svg">
				<img class="lobster" src="<?php echo get_bloginfo('template_directory') ?>/svg/lobster.svg">
				<img class="water-back" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-2.svg">
				<img class="water-front" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-1.svg">
				<img class="water-front" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-1.svg">
				<img class="antenna" src="<?php echo get_bloginfo('template_directory') ?>/svg/antenna.svg">
			</div>
		</div>
		<div class="project ">
			<div id="nofrills" class="planet portfolio-site" data-site="nofrills">
				<div class="planet"></div>
				<div class="ring"></div>
				<div class="ring"></div>
			</div>
		</div>
		<div class="project">
			
		</div>
		<div id="epa" class="portfolio-site" data-site="epa">
			<div class="water"></div>
			<div class="water"></div>
			<div class="water">
				<img class="ship" src="<?php echo get_bloginfo('template_directory') ?>/svg/cargo.svg">
				<img class="ship" src="<?php echo get_bloginfo('template_directory') ?>/svg/cargo.svg">
			</div>	
		</div>
		<div id="darthia" class="portfolio-site" data-site="darthia">
			<div class="planet">
				<img class="dirt" src="<?php echo get_bloginfo('template_directory') ?>/svg/dirt.svg"">
				<div class="plant">
					<img class="tomato" src="<?php echo get_bloginfo('template_directory') ?>/svg/tomato.svg"">
					<img class="sprout" src="<?php echo get_bloginfo('template_directory') ?>/svg/sprout.svg"">
				</div>
				<div class="plant">
					<div class="petals">
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
						<div class="petal"></div>
					</div>
					<img class="sprout" src="<?php echo get_bloginfo('template_directory') ?>/svg/sprout-1.svg"">
				</div>
				<div class="plant">
					<img class="sprout" src="<?php echo get_bloginfo('template_directory') ?>/svg/carrot-leaf.svg"">
					<div class="carrot"></div>
				</div>
			</div>
		</div>
		<div id="bcc" class="portfolio-site" data-site="bcc">
			<img class="bg" src="<?php echo get_bloginfo('template_directory') ?>/media/bccbg.jpg">
			<img class="storm" src="<?php echo get_bloginfo('template_directory') ?>/media/storm.png">
		</div>
	</div>
	<div class="skills">
	</div>
	<div class="contact">
	</div>
	<div class="site-info chipmans Hidden" data-site="chipmans">
		<h3><span>Chipman's Wharf</span></h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
		<div class="site-info epa Hidden" data-site="epa">
		<h3>Eastport Port Authority</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
		<div class="site-info darthia Hidden" data-site="darthia">
		<h3>Darthia Farm</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
		<div class="site-info bcc Hidden" data-site="bcc">
		<h3>Bold Coast Creative</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
	<div class="site-info nofrills Hidden" data-site="nofrills">
		<h3>Chipman's Wharf</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</div>


<?php get_footer(); ?>