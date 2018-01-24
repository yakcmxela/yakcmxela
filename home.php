<?php
// Template Name:  Front-page
?>
<?php get_header(); ?>
<div class="space-bg Nav-Closed">
	<div class="space outerspace" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
	<div class="space innerspace Slow-Float" style="background-image: url('<?php echo get_template_directory_uri(); ?>/media/stars-retro.jpg');"></div>
	<div class="planets">
		<div class="chipmans Hidden" data-site="chipmans-wharf">
			<img class="buoy" src="<?php echo get_bloginfo('template_directory') ?>/svg/buoy.svg">
			<img class="lobster" src="<?php echo get_bloginfo('template_directory') ?>/svg/lobster.svg">
			<img class="water-back" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-2.svg">
			<img class="water-front" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-1.svg">
			<img class="water-front" src="<?php echo get_bloginfo('template_directory') ?>/svg/water-1.svg">
			<img class="antenna" src="<?php echo get_bloginfo('template_directory') ?>/svg/antenna.svg">
		</div>
		<div class="nofrills Hidden" data-site="no-frills-oil">
			<div class="planet"></div>
			<div class="ring"></div>
			<div class="ring"></div>
		</div>
		<div class="epa Hidden" data-site="eastport-port-authority">
			<div class="water"></div>
			<div class="water"></div>
			<div class="water">
				<img class="ship" src="<?php echo get_bloginfo('template_directory') ?>/svg/cargo.svg">
				<img class="ship" src="<?php echo get_bloginfo('template_directory') ?>/svg/cargo.svg">
			</div>	
		</div>
		<div class="darthia Hidden" data-site="darthia-farm">
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
		<div class="bcc" data-site="bold-coast-creative">
			<div class="rotate">
				<img class="bg" src="<?php echo get_bloginfo('template_directory') ?>/media/bccbg.jpg">
				<img class="storm" src="<?php echo get_bloginfo('template_directory') ?>/media/storm.png">
			</div>
		</div>
	</div>	
</div>
<div class="content">
	<?php echo memory_get_peak_usage(); ?>
	<?php
		if( have_rows('portfolio') ) :
			while( have_rows('portfolio') ) : the_row();
				$project = get_sub_field('project');
				$before = get_field('before', $project);
				$images = get_field('after', $project);
				$title = $project->post_title;
				$description = get_field('description', $project);
				$libs = get_field('libs_skills', $project);
				$name = $project->post_name;
				?>
				<div class="project" data-site="<?php echo $name ?>">
					<div class="info">
						<div class="read">
							<h1><?php echo $title; ?></h1>
							<?php echo $description; ?>
							<a href="">Visit the site.</a>
						</div>
						<div class="list">
							<?php echo $libs ?>
						</div>
					</div>
					<div class="images">
						<?php if($before) : ?>
							<div class="container">
								<img src="<?php echo $before; ?>">
								<p class="before">Before</p>
							</div>
						<?php endif; ?>
						<?php foreach($images as $image): ?>
							<div class="container">
								<img src="<?php echo $image['sizes']['xl']; ?>">
							</div>
						<?php endforeach; ?>
						</div>
					</div>

				<?php
			endwhile;
		endif;
	?>
</div>

<?php get_footer(); ?>