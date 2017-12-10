<?php
// Template Name:  Front-page
?>
<?php get_header(); ?>

<div class="content">
	<div class="name d-flex">
		<h1 class="y">y</h1>
		<h1 class="ab">a</h1>
		<h1 class="k">k</h1>
		<h1 class="c">c</h1>
		<h1 class="m">m</h1>
		<h1 class="x">x</h1>
		<h1 class="e">e</h1>
		<h1 class="l">l</h1>
		<h1 class="aa">a</h1>
		<div class="loader-container">
			<div class="loader"></div>
		</div>
	</div>
	<canvas id="space"></canvas>
	<div class="space Slow-Float" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars.jpg');"></div>
	<div class="astronaut-container">
		<div class="astronaut Relax">
			<div class="head">
				<img class="helmet" src="<?php echo get_template_directory_uri(); ?>/svg/helmet.svg">
				<img class="shield" src="<?php echo get_template_directory_uri(); ?>/svg/shield.svg">
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
</div>
<div class="canvas">
	<div class="epaPlanet"></div>
</div>
<!-- <div class="info d-flex align-items-center justify-content-center flex-column">
	<h6 class="center">Hello, my name is Alex McKay. <br/>Welcome to my brain.</h6>
	<div class="menu d-flex align-items-center justify-content-center">
		<h6 id="portfolio" data-page="portfolio">Portfolio</h6>
		<h6 id="capabilities" data-page="capabilities">Capabilities</h6>
		<h6 id="experience" data-page="experience">Experience</h6>
		<h6 id="bio" data-page="bio">Bio</h6>
	</div>
</div> -->

<script type="text/javascript">


</script>
<?php get_footer(); ?>