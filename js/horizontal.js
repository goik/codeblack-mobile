jQuery(function($){
	'use strict';

	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------



	(function () {

		var scrollSelector1=$('.carousel-cell-pad');

		var $frame_1 = $('.slide-1');
		var $slidee_1 = $frame_1.children('ul').eq(0);
		var $wrap_1 = $frame_1.parent();

		$frame_1.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:scrollSelector1.parent().parent().find('.t1'),
			scrollBy:0,
			pagesBar:$wrap_1.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1
		});



		var scrollSelector2=$('.carousel-cell-pad');

		var $frame_2 = $('.slide-2');
		var $slidee_2 = $frame_2.children('ul').eq(0);
		var $wrap_2 = $frame_2.parent();

		$frame_2.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:scrollSelector2.parent().parent().find('.t2'),
			scrollBy:0,
			pagesBar:$wrap_2.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1
		});

		var scrollSelector3=$('.carousel-cell-pad');

		var $frame_3 = $('.slide-3');
		var $slidee_3 = $frame_3.children('ul').eq(0);
		var $wrap_3 = $frame_3.parent();

		$frame_3.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:scrollSelector3.parent().parent().find('.t3'),
			scrollBy:0,
			pagesBar:$wrap_3.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1
		});



		var scrollSelector3=$('.actor-slide');

		var $frame_3 = $('.actor-slide');
		var $slidee_3 = $frame_3.children('ul').eq(0);
		var $wrap_3 = $frame_3.parent();

		$frame_3.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:0,
			startAt:0,
			scrollBar:scrollSelector3.parent().parent().find('.scroll-horisontal-actors'),
			scrollBy:0,
			pagesBar:$wrap_3.find('.pages'),
			activatePageOn:'click',
			speed:1600,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1
		});




/*
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			$frame.sly('toStart', item);
		});

		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			$frame.sly('toCenter', item);
		});

		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
*/

	}());



/*=============*/

	(function () {
		var $frame  = $('#basic5');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollBarSelector1'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:800,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());



/*=============*/




//==============================//





	(function () {
		var $frame  = $('#basic4');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollBarSelector4'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:800,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());



//==============================//





	(function () {
		var $frame  = $('#basic2');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollBarSelector2'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:800,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());





	(function () {
		var $frame  = $('#basic3');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollBarSelector3'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:800,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());






	(function () {
		var $frame  = $('#basic4');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollBarSelector4'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:800,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());

	// -------------------------------------------------------------
	//   Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#centered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'centered',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:4,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Force Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#forcecentered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'forceCentered',
			smart:1,
			activateMiddle:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:0,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#cycleitems');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:0,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Cycling
			cycleBy:'items',
			cycleInterval:1000,
			pauseOnHover:1,

			// Buttons
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next')
		});

		// Pause button
		$wrap.find('.pause').on('click', function () {
			$frame.sly('pause');
		});

		// Resume button
		$wrap.find('.resume').on('click', function () {
			$frame.sly('resume');
		});

		// Toggle button
		$wrap.find('.toggle').on('click', function () {
			$frame.sly('toggle');
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Pages
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#cyclepages');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:0,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Cycling
			cycleBy:'pages',
			cycleInterval:1000,
			pauseOnHover:1,
			startPaused:1,

			// Buttons
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// Pause button
		$wrap.find('.pause').on('click', function () {
			$frame.sly('pause');
		});

		// Resume button
		$wrap.find('.resume').on('click', function () {
			$frame.sly('resume');
		});

		// Toggle button
		$wrap.find('.toggle').on('click', function () {
			$frame.sly('toggle');
		});
	}());

	// -------------------------------------------------------------
	//   One Item Per Frame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#oneperframe');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'forceCentered',
			smart:1,
			activateMiddle:1,
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:0,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Effects
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#effects');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'forceCentered',
			smart:1,
			activateMiddle:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			speed:300,
			elasticBounds:1,
			easing:'swing',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Crazy
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#crazy');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal:1,
			itemNav:'basic',
			smart:1,
			activateOn:'click',
			mouseDragging:1,
			touchDragging:1,
			releaseSwing:1,
			startAt:3,
			scrollBar:$wrap.find('.scrollbar'),
			scrollBy:1,
			pagesBar:$wrap.find('.pages'),
			activatePageOn:'click',
			speed:300,
			elasticBounds:1,
			easing:'easeOutExpo',
			dragHandle:1,
			dynamicHandle:1,
			clickBar:1,

			// Buttons
			forward:$wrap.find('.forward'),
			backward:$wrap.find('.backward'),
			prev:$wrap.find('.prev'),
			next:$wrap.find('.next'),
			prevPage:$wrap.find('.prevPage'),
			nextPage:$wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());
});