<?php

// Header
// Author: Alex McKay 2017
// Bold Coast Creative www.boldcoastcreative.com

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<?php
// Custom Fields

?>

<nav>
	<div class="menu d-flex">
		<div class="about Active">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/about.svg">
			<p>About</p>
		</div>
		<div class="skills">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/skills.svg">
			<p>Skills</p>
		</div>
		<div class="work">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/work.svg">
			<p>Work</p>
		</div>
		<div class="contact" >
			<img src="<?php echo get_template_directory_uri(); ?>/svg/satellite-dish.svg">
			<p>Contact</p>
		</div>
		
	</div>
</nav>
