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
<div class="astronaut-container">
	<div class="astronaut Jets-On On-Earth On-Load">
		<div class="head">
			<img class="helmet Black" src="<?php echo get_template_directory_uri(); ?>/svg/helmet.svg">
			<img class="shield" src="<?php echo get_template_directory_uri(); ?>/svg/shield.svg">
			<img class="details" src="<?php echo get_template_directory_uri(); ?>/svg/helmet-details.svg">
		</div>
		<div class="upper-body Black">
			<img class="torso" src="<?php echo get_template_directory_uri(); ?>/svg/torso-contents.svg">
			<img class="torso" src="<?php echo get_template_directory_uri(); ?>/svg/torso-body.svg">
			<div class="right-arm">
				<img class="upper" src="<?php echo get_template_directory_uri(); ?>/svg/upper-arm-right.svg">
				<div class="lower">
					<img class="forearm" src="<?php echo get_template_directory_uri(); ?>/svg/lower-arm-right.svg">
					<div class="hand">
						<img id="particle" style="display: none" src="<?php echo get_template_directory_uri(); ?>/media/particle.png">
						<img class="whole-hand" src="<?php echo get_template_directory_uri(); ?>/svg/hand-right.svg">
						<img class="finger-1" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-right.svg">
						<img class="finger-2" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-right.svg">
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
						<img class="finger-1" src="<?php echo get_template_directory_uri(); ?>/svg/finger-1-left.svg">
						<img class="finger-2" src="<?php echo get_template_directory_uri(); ?>/svg/finger-2-left.svg">
					</div>
					<svg height="100" width="100" class="jet jet-left"></svg>
				</div>
			</div>
			<img class="belt" src="<?php echo get_template_directory_uri(); ?>/svg/belt.svg">
		</div>
		<div class="lower-body Black">
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
<div class="earth-content">
	<div class="start-maine" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/rocks-hendrix.jpg');"">
		<div class="about-content" style="max-width: 650px; padding: 64px">
			<p><strong>Greetings</strong>,</p>
			<p>I am a self taught web developer from Washington DC, now living in coastal Downeast Maine. Like so many, my journey into code began at sea, on a lobster fishing vessel named the Uptown Girl.</p>
			<p>I created my first website while fishing -- a simple Shopify store. While I didn't earn any money, I discovered that more than anything, I loved tinkering with the site's code. My intrigue quickly snowballed into a passion.</p>
			<p>I quit fishing soon afterwards, began <a href="www.boldcoastcreative.com" target="_blank">Bold Coast Creative</a>, and set out outbuilding websites for local businesses. I love researching, practicing, and improving my understanding of programming.</p>
			<p>I am currently seeking full-time employment, and willing to relocate.</p>
			<p class="right mr-3"><strong>Alex McKay</strong></p>
		</div>
	</div>
	<img class="cloud" src="<?php echo get_template_directory_uri(); ?>/media/cloud.png">
	<img class="cloud" src="<?php echo get_template_directory_uri(); ?>/media/cloud.png">
	<img class="cloud" src="<?php echo get_template_directory_uri(); ?>/media/cloud.png">
</div>
<div class="space-content">
	<div class="space-container">
		<div class="space outerspace" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
		<div class="space innerspace Slow-Float" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
	</div>
</div>

<?php get_footer(); ?>