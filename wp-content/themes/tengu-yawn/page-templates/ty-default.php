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
							<!-- General Content -->
							<?php the_content(); ?>
							<!-- Image Link Array -->
							<?php if( $image_link_array &&  ($image_link_array['enable'] == true) ): ?>

								<?php include 'acf-modules/image-link-array.php'; ?>

							<?php endif; ?>
							<!-- Event List -->
							<?php if( $events &&  ($events['enable'] == true) ): ?>

								<?php include 'acf-modules/event-list.php'; ?>

							<?php endif; ?>
							<!-- Three JS Animation Background -->
							<?php if($threeJs){echo '<iframe src="' . $three_path . $threeJs . '"></iframe>';}?>

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
