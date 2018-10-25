jQuery( document ).ready( function() {

	'use strict';

	// Add icons to custom css.
	jQuery( '#accordion-section-custom_css > h3' ).prepend( '<span class="fa fa-fw fa-plus-square" style="padding-right:.2em;"></span>' );
	jQuery( '#sub-accordion-section-custom_css .customize-section-title > h3' ).append( '<span class="fa fa-fw fa-plus-square" style="padding-right:.2em; padding-top: 2px; float:left;"></span>' );
	
	// Add icons to static front page.
	jQuery( '#accordion-section-static_front_page > h3' ).prepend( '<span class="fa fa-fw fa-globe" style="padding-right:.2em;"></span>' );
	jQuery( '#sub-accordion-section-static_front_page .customize-section-title > h3' ).append( '<span class="fa fa-fw fa-globe" style="padding-right:.2em; padding-top: 2px; float:left;"></span>' );

	// Add icons to site identity. 
	jQuery( '#accordion-section-title_tagline > h3' ).prepend( '<span class="fa fa-fw fa-paperclip" style="padding-right:.2em;"></span>' );
	jQuery( '#sub-accordion-section-title_tagline .customize-section-title > h3' ).append( '<span class="fa fa-fw fa-paperclip" style="padding-right:.2em; padding-top: 2px; float:left;"></span>' );

	// Add icons to widgets.
	jQuery( '#sub-accordion-panel-widgets .panel-title' ).prepend( '<span class="fa fa-fw fa-star" style="padding-right:.2em; padding-top: 2px;"></span>' );
	jQuery( '#accordion-panel-widgets > h3' ).prepend( '<span class="fa fa-fw fa-star" style="padding-right:.2em;"></span>' );

	// Add icons to menus.
	jQuery( '#sub-accordion-panel-nav_menus .panel-title' ).prepend( '<span class="fa fa-fw fa-list" style="padding-right:.2em; padding-top: 2px;"></span>' );
	jQuery( '#accordion-panel-nav_menus > h3' ).prepend( '<span class="fa fa-fw fa-list" style="padding-right:.2em;"></span>' );


});
