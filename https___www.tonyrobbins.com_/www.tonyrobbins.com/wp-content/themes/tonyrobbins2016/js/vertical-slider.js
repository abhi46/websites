// Vertical slider plugin
$.fn.extend({
	verticalSlider: function(options) {
		var $slider = $(this);
		var $items = $slider.children();
		var slideBy = findHighest($items);
		var arrows = '<div class="slider-actions"><a href="#" class="slider-prev">prev</a><a href="#" class="slider-next">next</a></div>';
		var multiplier = options.items == 1 ? 2 : 1;
		var totalSlide = -(slideBy * multiplier);
		var itemsNum;
		var resizeTimer;

		initSlider();

		function initSlider() {
			$slider.wrap('<div class="vertical-slider-container"/>');

			$slider.parent().wrap('<div class="vertical-slider-wrapper"/>');

			$slider.on('prev', prev);

			$slider.on('next', next);

			$slider.on('destroy', destroy);

			$items.outerHeight(findHighest($items));

			cloneItems();
			startNav();

			if (options.touchSwipe) {
				startSwipe();
			}

			$slider.addClass('vertical-slider');
			$slider
				.parent()
				.outerHeight($items.outerHeight() * options.items);

			addTransition();
			setActive();

			$(window).on('resize', function(){
				updateVars();
			});
		}

		function startSwipe() {
			var yPos;
			var yPosEnd;
			var disableScroll = false;

			$slider.on('touchstart', function(e){
				yPos = e.originalEvent.touches[0].pageY;
				yPosEnd = e.originalEvent.touches[0].pageY;
				disableScroll = true;
			});

			$(window).on('touchmove', function(e){
				if (disableScroll) {
					e.preventDefault();
				}
			});

			$slider.on('touchmove', function(event){
				yPosEnd = event.originalEvent.touches[0].pageY;
			});

			$slider.on('touchend', function(e){
				if (yPos - 50 > yPosEnd) {
					$slider.trigger('next');
				} else if (yPos + 50 < yPosEnd) {
					$slider.trigger('prev');
				}
				disableScroll = false;
			});
		}

		function addTransition() {
			$slider.css({
				'transition': options.speed / 1000 + 's'
			});
		}

		function updateVars() {
			if ($slider.hasClass('vertical-slider')) {
				var hght = findHighest($items);

				$slider
					.find('.slide')
					.outerHeight(hght);

				$slider
					.parent()
					.outerHeight(findHighest($items) * options.items);

				slideBy = findHighest($items);

				refreshView();
			}
		}

		function refreshView() {
			var newView = slideBy * $slider.find('.active').index();

			totalSlide = -(newView);

			$slider.css({
				'transition': '0s',
				'transform': 'translateY(' + (-newView) + 'px)'
			});

			clearTimeout(resizeTimer);

			resizeTimer = setTimeout(function() {
				addTransition();
			}, 50);
		}

		function findHighest($items) {
			var hght = 0;

			$items.each(function(){
				var $item = $(this);

				$item.height('auto');

				if ($item.outerHeight() > hght) {
					hght = $item.outerHeight();
				}
			});

			return hght;
		}

		function cloneItems() {
			var $firstItem = $slider.children().eq(0).clone();
			var $secondItem = $slider.children().eq(1).clone();
			var $lastItem = $slider.children().eq($items.length - 1).clone();
			var $secondLastItem = $slider.children().eq($items.length - 2).clone();

			$slider.css({
				'transform': 'translateY(' + -(slideBy * multiplier) + 'px)'
			});

			$firstItem.addClass('cloned');
			$secondItem.addClass('cloned');
			$lastItem.addClass('cloned');
			$secondLastItem.addClass('cloned');

			$slider.prepend($lastItem);
			$slider.prepend($secondLastItem);
			$slider.append($firstItem);
			$slider.append($secondItem);

			itemsNum = $slider.children().length;
		}

		function startNav() {
			var $sliderContainer = $slider.parent();

			$sliderContainer
				.after(arrows);

			var $prev = $sliderContainer
									.next()
									.find('.slider-prev');

			var $next = $sliderContainer
									.next()
									.find('.slider-next');

			$prev.on('click', function(e){
				e.preventDefault();

				prev();
			});									

			$next.on('click', function(e){
				e.preventDefault();

				next();
			});
		}

		function prev() {
			totalSlide += slideBy;

			if (typeof options.onPrev == 'function') {
				options.onPrev();
			}

			$slider.css({
				'transform': 'translateY(' + totalSlide + 'px)'
			});

			loop('prev');
		}

		function next() {
			totalSlide -= slideBy;

			if (typeof options.onNext == 'function') {
				options.onNext();
			}

			$slider.css({
				'transform': 'translateY(' + totalSlide + 'px)'
			});

			loop('next');
		}

		function loop(data) {
			if (totalSlide > 0) {
				if (options.items == 1) {
					totalSlide = -slideBy * $items.length;
					var newPosition = totalSlide + slideBy;

					animateSlider(newPosition);

					totalSlide += slideBy;
				} else {
					totalSlide = -(slideBy * $items.length);
					var newPosition = totalSlide + slideBy;

					animateSlider(newPosition);

					totalSlide += slideBy;
				}
			} else if (totalSlide < -((itemsNum - options.items) * slideBy)) {
				if (options.items == 1) {
					totalSlide = -($items.outerHeight() * 3);

					animateSlider(-($items.outerHeight() * 4));

					totalSlide = -($items.outerHeight() * 4);
				} else {
					var itemIndex = Math.floor(options.items / 2);

					totalSlide = -($items.outerHeight() * itemIndex);

					animateSlider(-($items.outerHeight() * (itemIndex + 1)));

					totalSlide = -($items.outerHeight() * (itemIndex + 1));
				}
			}

			setActive();
		}

		function setActive() {
			if (options.items == 1) {
				$slider
					.find('.slide')
					.eq(-(totalSlide/slideBy))
					.addClass('active')
					.siblings()
					.removeClass('active');
			} else {
				var actives = [];

				actives.push($slider
					.find('.slide')
					.eq(-(totalSlide/slideBy)))

				for (var i = 0; i < options.items - 1; i++) {
					actives.push(actives[i].next());
				}

				$slider
					.find('.slide')
					.removeClass('active center');

				for (var i = 0; i < actives.length; i++) {
					actives[i].addClass('active');
				}

				if (options.items % 2) {
					actives[Math.floor(options.items / 2)].addClass('center');
				}
			}
		}

		function animateSlider(newPosition) {
			$slider.css({
				'transition': '0s',
				'transform': 'translateY(' + totalSlide + 'px)'
			});

			setTimeout(function() {
				$slider.css({
					'transition': options.speed / 1000 + 's',
					'transform': 'translateY(' + newPosition + 'px)'
				});
			}, 10);
		}

		function destroy() {
			if ($slider.hasClass('vertical-slider')) {
				for (var i = 0; i < 2; i++) {
					$slider
						.unwrap();
				}

				$slider
					.next()
					.remove();

				$slider
					.removeClass('vertical-slider')
					.css({
						'transition': '',
						'transform': ''
					});

				$slider.off('touchstart touchmove touchend prev next');

				$slider
					.find('.cloned')
					.detach();

				$items.css({
					'height': ''
				}).removeClass('active center');
			}
		}
	}
});
