<?php
// Template Name:  Front-page
?>
<?php get_header(); ?>
<canvas id="space"></canvas>
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