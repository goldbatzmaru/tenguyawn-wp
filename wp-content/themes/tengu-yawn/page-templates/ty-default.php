<?php
/**
 * Template Name: TY Default
 *
 * Default TY template. Does not show sidebar ever.
 *
 * @package tenguyawn
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();

$container = get_theme_mod( 'understrap_container_type' );
$theme_path = do_shortcode( '[theme-path]' );

// ACF
$threeJs = get_field('three_js_html');
$contentTop = get_field('content_top');
$image_link_array = get_field('image_link_array');
$events = get_field('event_list');
$flexCenterContent = get_field('flex_center_content');
$fixedFooter = get_field('fixed_footer');
$three_path = $theme_path . '/three/';
?>

<div class="wrapper ty-default" id="full-width-page-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content">

		<div class="row">

			<div class="col-md-12 content-area no-padding" id="primary">

				<main class="site-main" id="main" role="main">

					<?php while ( have_posts() ) : the_post(); ?>
						<div class='ty-content <?php if($contentTop): ?>content-top<?php endif; ?> <?php if($flexCenterContent): ?>acf-active<?php endif; ?>'>

							<?php if(get_the_content() != ''): ?>
								<!-- General Content -->
								<div id="general-content">
									<?php the_content(); ?>
								</div>
							<?php endif; ?>
							
							
							<?php if( $image_link_array &&  ($image_link_array['enable'] == true) ): ?>
								<!-- Image Link Array -->
								<?php include 'acf-modules/image-link-array.php'; ?>

							<?php endif; ?>
							
							<?php if( $events &&  ($events['enable'] == true) ): ?>
								<!-- Event List -->
								<?php include 'acf-modules/event-list.php'; ?>

							<?php endif; ?>
							<?php if($threeJs){
								// Three JS Animation Background
								wp_register_script( 'animation', $three_path . $threeJs . '.js' );
							    wp_localize_script( 'animation', 'animation_data',
							      array( 
							          'texture_path' => $three_path . '/textures'
							      )
							    );
								wp_enqueue_script( 'animation');
								echo '<div id="background-animation"></div>';
							}?>

							<?php 
							  if(!$fixedFooter){
							    get_footer(); 
							  }
							?>
						</div>

						
					<?php endwhile; // end of the loop. ?>

				</main><!-- #main -->

			</div><!-- #primary -->

		</div><!-- .row end -->

	</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php 
  if($fixedFooter){
    get_footer(); 
  }
?>
