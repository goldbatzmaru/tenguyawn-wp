<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
$fixedFooter = get_field('fixed_footer');
?>

<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>

<div class="wrapper<?php if($fixedFooter): ?> fixed<?php endif; ?>" id="wrapper-footer">

	<footer class="site-footer" id="colophon">

		<div id="copyright">&copy; <?php echo date('Y'); ?> tenguyawn</div>

	</footer><!-- #colophon -->


</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>

