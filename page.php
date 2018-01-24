<?php
// Template Name: Page
?>
<?php get_header(); ?>
<div class="page">
	<canvas id="space"></canvas>
	<div class="intro-content">
		<div class="section-block">
			<div class="intro">
				<h1>Hey, I'm Alex.</h1>
				<div class="skills">
					<h4>Here's my resume.</h4>
					<div class="links">
						<a href="https://www.linkedin.com/in/alexander-mckay-b870b625?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BuKy9V3wPQfyFGMnJVXJ2nQ%3D%3D">
							<img src="<?php echo get_bloginfo('template_directory') ?>/svg/linkedin.svg">
						</a>
						<a href="<?php echo get_bloginfo('template_directory') ?>/media/resume.pdf">
							<img src="<?php echo get_bloginfo('template_directory') ?>/svg/resume.svg">
						</a>
					</div>
				</div>
				<div class="contact">
					<h1>Get at me.</h1>
					<h4>alex@boldcoastcreative.com</h4>
					<img class="antenna" src="<?php echo get_bloginfo('template_directory') ?>/media/antenna.png">
				</div>
			</div>
			<div class="astro">
				<img class="tv" src="<?php echo get_bloginfo('template_directory') ?>/media/tv.png">
				<div class="astronaut-container">
					<div class="astronaut Relax">
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
				<div class="space-bg No-Animate">
					<div class="space outerspace" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
					<div class="space innerspace Slow-Float" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="page-content">
		<!-- Ajax -->
	</div>
</div>
<?php get_footer(); ?>