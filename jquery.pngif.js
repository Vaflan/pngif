/*
 * jQuery PNGIF Plugin 1.3 [21.02.2019]
 * https://github.com/Vaflan/pngif
 *
 * Copyright 2014, Ruslans Jermakovics
 * http://tfu.lv
 */

(function($) {
	/** Options: frames, delay(msec), position(right, down), width(custom), height(custom)
	 * $('img').pngif('destroy') - Destory pngif
	 * @param {object|number|string} options
	 * @return object jQuery
	 */
	$.fn.pngif = function(options) {
		var $this = $(this);

		// Подготовка входящих параметров
		if(options === undefined) {
			options = 8;
		}
		if(!!options && !isNaN(options) && Number(options) === parseInt(options, 10)) {
			options = {frames: options};
		}
		if (options === 'destroy') {
			var oldSettings = $this.data('settings');
			clearInterval(oldSettings.timer);
			return $this
				.css({background: 'none', width: 'auto', height: 'auto'})
				.attr('src', oldSettings.src)
				.data('settings', '');
		}

		if('position' in options) {
			var textPosition = options.position;
			if(textPosition.indexOf('hor')>-1 || textPosition.indexOf('right')>-1)
				options.position = 0;
			else if(textPosition.indexOf('ver')>-1 || textPosition.indexOf('down')>-1)
				options.position = 1;
			else if(textPosition.indexOf('left')>-1)
				options.position = 2;
			else if(textPosition.indexOf('top')>-1)
				options.position = 3;
		}

		// Настройки по-умолчанию
		var settings = $.extend({
			src: $this.attr('src'),
			height: $this.height(),
			width: $this.width(),
			left: 0,
			top: 0,
			position: 0,
			delay: 100,
			frames: 1,
			timer: 0,
			frame: 0,
			fix: 0
		}, options);

		// Тут функционал PNGIF плагина
		$this.css({
			background: 'url('+settings.src+') 0 0 no-repeat',
			height: settings.height,
			width: settings.width
		});
		$this.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
		if(settings.position % 2) {
			settings.fix = parseInt(settings.height / settings.frames);
			$this.css('height', settings.fix);
		}
		else {
			settings.fix = parseInt(settings.width / settings.frames);
			$this.css('width', settings.fix);
		}

		settings.timer = setInterval(function() {
			var go = settings.fix * settings.frame * -1;
			$this.css('background-position', (settings.position%2) ? settings.left+'px '+go+'px' : go+'px '+settings.top+'px');

			if(settings.position > 1) {
				settings.frame--;
				if(settings.frame < 0)
					settings.frame = settings.frames - 1;
			}
			else {
				settings.frame++;
				if(settings.frame === settings.frames)
					settings.frame = 0;
			}
		}, settings.delay);
		return $this.data('settings', settings);
	};
})(jQuery);