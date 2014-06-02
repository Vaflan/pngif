<<<<<<< HEAD
/*
 * jQuery PNGIF Plugin 1.0
 * https://github.com/Vaflan/pngif
 *
 * Copyright 2014, Ruslans Jermakovics
 * http://tfu.lv
 */

/*params: frames, delay(msec), position(right, down), width(custom), height(custom) */

(function($) {
	$.fn.pngif = function(options) {
		// ÐŸÐ¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° Ð²Ñ…Ð¾Ð´ÑÑ‰Ð¸Ñ… Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¾Ð²
		if(typeof options === 'number' && parseFloat(options) == parseInt(options, 10) && !isNaN(options)) {
			options = {'frames': options};
		}
		if('position' in options) {
			var pstn = options['position'];
			if(pstn.indexOf('hor')>-1 || pstn.indexOf('right')>-1)
				options['position'] = 0;
			if(pstn.indexOf('ver')>-1 || pstn.indexOf('down')>-1)
				options['position'] = 1;
		}

		// ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¿Ð¾-ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ
		var $this = $(this),
			settings = $.extend({
				'src': this.attr('src'),
				'height': this.height(),
				'width': this.width(),
				'position': 1,
				'delay': 100,
				'frames': 1,
				'timer': 0,
				'frame': 0,
				'fix': 0,
			}, options)
		;

		// Ð¢ÑƒÑ‚ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð» PNGIF Ð¿Ð»Ð°Ð³Ð¸Ð½Ð°
		this.css({
			'background': 'url('+settings['src']+') 0px 0px no-repeat',
			'height': settings['height'],
			'width': settings['width']
		});
		this.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
		if(settings['position']) {
			settings['fix'] = parseInt(settings['height'] / settings['frames']);
			this.css('height', settings['fix']);
		}
		else {
			settings['fix'] = parseInt(settings['width'] / settings['frames']);
			this.css('width', settings['fix']);
		}

		settings['timer'] = setInterval(function() {
			var settings = $this.data('settings');
			var go = settings['fix'] * settings['frame'] * -1;
			$this.css('background-position', settings['position'] ? '0px '+go+'px' : go+'px 0px');
			settings['frame']++;
			if(settings['frame'] == settings['frames'])
				settings['frame'] = 0;
			$this.data('settings', settings);
		}, settings['delay']);
		$this.data('settings', settings);

		return this;
	};
})(jQuery);
=======
/*
 * jQuery PNGIF Plugin 1.0
 * https://github.com/Vaflan/pngif
 *
 * Copyright 2014, Ruslans Jermakovics
 * http://tfu.lv
 */

/*params: frames, delay(msec), position(right, down), width(custom), height(custom) */

(function($) {
	$.fn.pngif = function(options) {
		// Ïîäãîòîâêà âõîäÿùèõ ïàðàìåòðîâ
		if(typeof options === 'number' && parseFloat(options) == parseInt(options, 10) && !isNaN(options)) {
			options = {'frames': options};
		}
		if('position' in options) {
			var pstn = options['position'];
			if(pstn.indexOf('hor')>-1 || pstn.indexOf('right')>-1)
				options['position'] = 0;
			if(pstn.indexOf('ver')>-1 || pstn.indexOf('down')>-1)
				options['position'] = 1;
		}

		// Íàñòðîéêè ïî-óìîë÷àíèþ
		var $this = $(this),
			settings = $.extend({
				'src': this.attr('src'),
				'height': this.height(),
				'width': this.width(),
				'position': 1,
				'delay': 100,
				'frames': 1,
				'timer': 0,
				'frame': 0,
				'fix': 0,
			}, options)
		;

		// Òóò ôóíêöèîíàë PNGIF ïëàãèíà
		this.css({
			'background': 'url('+settings['src']+') 0px 0px no-repeat',
			'height': settings['height'],
			'width': settings['width']
		});
		this.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
		if(settings['position']) {
			settings['fix'] = parseInt(settings['height'] / settings['frames']);
			this.css('height', settings['fix']);
		}
		else {
			settings['fix'] = parseInt(settings['width'] / settings['frames']);
			this.css('width', settings['fix']);
		}

		settings['timer'] = setInterval(function() {
			var settings = $this.data('settings');
			var go = settings['fix'] * settings['frame'] * -1;
			$this.css('background-position', settings['position'] ? '0px '+go+'px' : go+'px 0px');
			settings['frame']++;
			if(settings['frame'] == settings['frames'])
				settings['frame'] = 0;
			$this.data('settings', settings);
		}, settings['delay']);
		$this.data('settings', settings);

		return this;
	};
})(jQuery);
>>>>>>> 9b561af1776ec8d04fafa97f5cb40cf145a02233
