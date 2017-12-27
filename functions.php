<?php
function get_mah_jquery() {
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-3.2.1.min.js', array(), null, true);
}
function get_mah_scripts() {
	wp_register_script('main', get_template_directory_uri() . '/js/main.js', array('jquery'), true);	
	wp_register_script('d3-js', 'https://d3js.org/d3.v4.min.js');
	wp_register_script('three-js', get_template_directory_uri() . '/js/three.min.js', array('jquery'), true, false, true);	
	wp_register_script('tween-js', 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js', true, false, true);
	wp_register_script('regl-js', 'https://npmcdn.com/regl/dist/regl.min.js', true, false, true);
	wp_register_script('tether',  'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', false, '1.4.0', true);	
	wp_register_script('bootstrap-js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', false, '4.0.0-alpha.6', true);
	wp_enqueue_script('tether');
	wp_enqueue_script('bootstrap-js');
	wp_enqueue_script('main');
	wp_enqueue_script('d3-js');
	wp_enqueue_script('regl-js');
	wp_enqueue_script('three-js');
	wp_enqueue_script('tween-js');
}
	function get_mah_styles() {
	wp_enqueue_style('boostrap', get_template_directory_uri() . '/css/bootstrap/bootstrap.min.css');
	wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css');
	wp_enqueue_style('jam-icons', 'https://unpkg.com/jam-icons@1.0.72/css/jam-icons.min.css');
	wp_enqueue_style('Roboto', 'https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text|Lato:300|Josefin+Sans:300|Poiret+One|Julius+Sans+One');
}
	add_action('wp_enqueue_scripts', 'get_mah_jquery');
	add_action('wp_enqueue_scripts', 'get_mah_scripts');
	add_action('wp_enqueue_scripts', 'get_mah_styles');
?>