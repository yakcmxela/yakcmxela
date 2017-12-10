<?php

// The footer template. No Frills Oil.
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
		<div class="work">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/work.svg">
		</div>
		<div class="skills">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/skills.svg">
		</div>
		<div class="experience">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/work.svg">
		</div>
		<div class="about">
			<img src="<?php echo get_template_directory_uri(); ?>/svg/about.svg">
		</div>
		<div class="contact" >
			<img src="<?php echo get_template_directory_uri(); ?>/svg/work.svg">
		</div>
		
	</div>
</nav>
