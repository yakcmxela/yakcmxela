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
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113186429-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-113186429-1');
</script>

<?php wp_head(); ?>
</head>

<?php
// Custom Fields

?>

<h3 class="portfolio-site-name"></h3>
<nav>
	<div id="open-menu">
		<i class="button"></i>
	</div>
	<div id="about">
		<img src="<?php echo get_bloginfo('template_directory') ?>/svg/about-color.svg">
		<p>About</p>
	</div>
	<div id="skills">
		<img src="<?php echo get_bloginfo('template_directory') ?>/svg/skills-color.svg">
		<p>Skills</p>
	</div>
	<div id="work">
		<img src="<?php echo get_bloginfo('template_directory') ?>/svg/work-color.svg">
		<p>Work</p>
	</div>
	<div id="contact" >
		<img src="<?php echo get_bloginfo('template_directory') ?>/svg/contact-color.svg">
		<p>Contact</p>
	</div>
</nav>
