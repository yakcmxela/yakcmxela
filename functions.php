<?php
// Load stuff
function get_mah_jquery() {
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-3.2.1.min.js', array(), null, true);
}
function get_mah_scripts() {
	wp_register_script('main', get_template_directory_uri() . '/js/main.js', array('jquery'), true);
	$path_info = array( 'template_url' => get_bloginfo('template_directory') );
	wp_localize_script( 'main', 'root_dir', $path_info);
	wp_register_script('lodash', get_bloginfo('template_directory') . '/js/lodash.js', true);
	wp_register_script('d3-js', 'https://d3js.org/d3.v4.min.js');
	wp_register_script('three-js', get_template_directory_uri() . '/js/three.min.js', array('jquery'), true, false, true);	
	wp_register_script('tween-js', 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js', true, false, true);
	wp_register_script('regl-js', 'https://npmcdn.com/regl/dist/regl.min.js', true, false, true);
	wp_enqueue_script('main');
	wp_enqueue_script('lodash');
	wp_enqueue_script('d3-js');
	wp_enqueue_script('regl-js');
	wp_enqueue_script('three-js');
	wp_enqueue_script('tween-js');
}
	function get_mah_styles() {
	wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css');
	wp_enqueue_style('jam-icons', 'https://unpkg.com/jam-icons@1.0.72/css/jam-icons.min.css');
	wp_enqueue_style('Font', 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i|Khula:300|Assistant:200');
}
	add_action('wp_enqueue_scripts', 'get_mah_jquery');
	add_action('wp_enqueue_scripts', 'get_mah_scripts');
	add_action('wp_enqueue_scripts', 'get_mah_styles');
// Add image size
	add_image_size('xl', 1200, 675);

?>