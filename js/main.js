$(document).ready(function() {
	var startMaine = $(".start-maine");
	var horizonLeaving = $(".horizon-leaving")
	var astronautContainer = $(".astronaut-container");
	var astronaut = $(".astronaut");
	var outerspace = $(".outerspace");
	var space = $(".space-content");
	var innerspace = $(".innerspace");
	var leftJet = $(".left-arm .hand");
	var rightJet = $(".right-arm .hand");
	var nav = $("nav");
	var color;
	var earth = $(".earth-content");
	var cloud = $(".cloud");
	var blastOff;
	var shootParticles;
	var leftJetX;
	var leftJetY;
	var rightJetX;
	var rightJetY;
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  	window.requestAnimationFrame = requestAnimationFrame;
  	var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  	var viewportWidth;
  	var viewportHeight;

// Define viewport size
	function defineViewport() {
		viewportWidth = window.innerWidth;
		viewportHeight = window.innerHeight;
	}

// Maths
	function randomColor() {
		var randomRed = Math.floor(Math.random() * 255) + 1;
		var randomBlue = Math.floor(Math.random() * 255) + 1;
		var randomGreen = Math.floor(Math.random() * (230 - 130)) + 130;
		color = "rgb(" + randomRed + "," + randomGreen + "," + 255 + ")"; 
		return color;
	}  	
	function random( min, max ) {
		return Math.random() * ( max - min ) + min;
	}
	function calculateDistance( p1x, p1y, p2x, p2y ) {
		var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
		return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
	}                       
// Loader Animation
	var alphabet = {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J", 11:"K", 12:"L", 13:"M", 14:"N", 15:"O", 16:"P", 17:"Q", 18:"R", 19:"S", 20:"T", 21:"U", 22:"V", 23:"W", 24:"X", 25:"Y", 26:"Z"};

	var name = $(".name");
	var loader = $(".loader-container .loader");

	var y = $(".y");
	var Y = "Y";
	var ab = $(".ab");
	var A = "A";
	var k = $(".k");
	var K = "K"
	var c = $(".c");
	var C = "C";
	var m = $(".m");
	var M = "M";
	var x = $(".x");
	var X = "X";
	var e = $(".e");
	var E = "E";
	var l = $(".l");
	var L = "L";
	var aa = $(".aa")

	function letterRandomizer(div, delay, stopLetter) {
		var i = 0;
		var letter;
		var randomLetter = 
		setInterval(function() {
			i++;
			letter = Math.floor(Math.random() * 26) + 1;
			randomRed = Math.floor(Math.random() * 255) + 1;
			randomBlue = Math.floor(Math.random() * 255) + 1;
			randomGreen = Math.floor(Math.random() * 255) + 1;

			div.html(alphabet[letter]);
			div.css("color", randomColor());

			if (i > 1) { //50
				clearInterval(randomLetter);
				div.html(stopLetter);
			}

		}, delay);	
	}

	setTimeout(function() {
		$(".menu").addClass("Active");
	}, 7500);

	function loaderBar() {
		var width = 1;
		var loaderBar = 
		setInterval(function() {
			if (width >= 100) {
				clearInterval(loaderBar);
				setTimeout(function() {
					loader.css("background-color", "white")
					loader.css("border-color", "white")
					name.css("color", "white");
					setTimeout(function() {
						name.addClass("Loaded");
					}, 1000);
				}, 1000);
			} else {
				width++;
				loader.css("width", width + "%");
			}
		}, 1); //75
	}

	function randomizeMyName() {
		letterRandomizer(y, random(10, 1), Y);
		letterRandomizer(ab, random(10, 1), A);
		letterRandomizer(k, random(10, 1), K);
		letterRandomizer(c, random(10, 1), C);
		letterRandomizer(m, random(10, 1), M);
		letterRandomizer(x, random(10, 1), X);
		letterRandomizer(e, random(10, 1), E);
		letterRandomizer(l, random(10, 1), L);
		letterRandomizer(aa, random(10, 1), A);
	}
// Nav
	spacebg = $('.space-bg');
	content = $('.content');
	cover = $('.cover');
	var nav = {
		container: $("nav"),
		radius: $("nav").width()/2,
		menuButton: $('#open-menu'),
		main: {
			about: $("#about"),
			work: $("#work"),
			skills: $("#skills"),
			contact: $("#contact")
		},
	}

	function findX(originX, radius, angle) {
		btnX = originX + radius * Math.cos(angle);
		return btnX;	
	}

	function findY(originY, radius, angle) {
		btnY = originY + radius * Math.sin(angle);
		return btnY;
	}

	function positionAroundCircle(button, radius, angle) {
		var origin = (button.width()/2*-1) + radius;
		
		findX(origin, radius, angle);
		findY(origin, radius, angle);

		$(button).css("left", btnX);
		$(button).css("top", btnY);
	}

	function findRadians(section, index, start, span) {
		// Count length of nav buttons
		var count = Object.keys(section).length;
		// Find necessary angle to fit in quarter of circle
		var angle = span / (count + 1);
		// Add to 270 to make bottom right quadrant
		var degrees =  (index * angle) + start;
		// convert to radians
		var radians = degrees * Math.PI/180;
		
		return radians;
	}
	// Main nav
	function setNavPos() {
		defineViewport();
		if(viewportWidth > 768) {
			positionAroundCircle(nav.menuButton, nav.radius, findRadians(nav.container, 2, 90, 90));
			positionAroundCircle(nav.main.about, nav.radius, findRadians(nav.main, 1, 0, 90));
			positionAroundCircle(nav.main.work, nav.radius, findRadians(nav.main, 2, 0, 90));
			positionAroundCircle(nav.main.skills, nav.radius, findRadians(nav.main, 3, 0, 90));
			positionAroundCircle(nav.main.contact, nav.radius, findRadians(nav.main, 4, 0, 90));
		} else if (viewportWidth <= 768) {
			nav.menuButton.css('left', 'initial');
			nav.menuButton.css('top', 'initial');
			nav.main.about.css('left', 'initial');
			nav.main.about.css('top', 'initial');
			nav.main.work.css('left', 'initial');
			nav.main.work.css('top', 'initial');
			nav.main.skills.css('left', 'initial');
			nav.main.skills.css('top', 'initial');
			nav.main.contact.css('left', 'initial');
			nav.main.contact.css('top', 'initial');
		}
	};

	setNavPos();

	nav.menuButton.on('click', function(){toggleNav()});
	nav.main.about.on('click', function(){toggleNav()});
	nav.main.work.on('click', function(){toggleNav()});
	nav.main.contact.on('click', function(){toggleNav()});
	nav.main.skills.on('click', function(){toggleNav()});

	function toggleNav() {
		nav.container.toggleClass('Open');
	}
	
	function blinkOut(div, transform) {
		div.addClass("Shut-Down");
		div.css('transform', transform + ' scaleX(1.5) scaleY(0.03)')
		setTimeout(function() {
			div.css('transform', transform + ' scaleX(0.022) scaleY(0.03)')
		}, 250);
		setTimeout(function() {
			div.remove();
		}, 1000)
		astronaut.removeClass("Wave");
	}

	function glitch(div, container, translate) {
		div.removeClass("Shut-Down").removeClass("Pop");
		var elLoader = div.clone().addClass("Loader").removeClass("Hidden");
		var elRepeater = div.clone().addClass("Repeater");
		div.eq(1).addClass("Original");

		elLoader.appendTo(container);
		elRepeater.appendTo(container);

		var transform;

		var glitchEffect = 
			setInterval(function() {
				var newEl = $(".Repeater").clone();
				var randomNumber = random(.8, 1.2);

				transform = translate + " scale(" + randomNumber + ")";

				newEl.addClass("Glitch").removeClass("Hidden").removeClass("Repeater");
				newEl.css("transform", transform);
				newEl.css("filter", "blur(" + (randomNumber - .5) + "px)");

				if (randomNumber > 1) { 
					newEl.css("animation", "glitch-effect-right " + randomNumber + "s ease-in-out") 
					newEl.css("box-shadow", "1px 1px 3px black");
					newEl.css('background-color',randomColor());
					newEl.css('color', 'white');
				} else if (randomNumber < .95) {
					newEl.css("animation", "glitch-effect-left " + randomNumber + "s ease-in-out") 
					newEl.css("box-shadow", "-1px 1px 3px rgba(0, 0, 0, .5)");
					newEl.css('background-color', '#e8e8e8');
					newEl.css('color', 'white');
				} else {
					newEl.css("animation", "glitch-effect-center " + randomNumber + "s ease-in-out") 
					newEl.css('background-color',randomColor());
					newEl.css('color', 'white');
				}
				newEl.appendTo(container);
			}, 200);

		setTimeout(function() {
			clearInterval(glitchEffect);
		}, 2000);

		setTimeout(function() {
			div.removeClass("Hidden");
			var loader = $(".Loader");
			var glitch = $(".Glitch");
			var repeater = $(".Repeater");
			glitch.remove();
			repeater.remove();
			loader.remove();
		}, 3200);
	}

	var pageOpen;
	var animationsComplete;

	// Outro
		var outro = '<div class="outro">';
			outro += '<h1>Get at me.</h1>';
			outro += '<a href="mailto:alex@boldcoastcreative.com">';
			outro += '<h5>alex@boldcoastcreative.com</h5>';
			outro += '</a></div>';

	// Open project collection
		nav.main.work.on("click", function() {

			var requestResponse = $.ajax({
				url: "https://boldcoastdev.com/yakcmxela/index.php/wp-json/wp/v2/posts",
				method: "GET",
			});

			requestResponse.fail(function(textStatus) {
				console.log(textStatus);
			});

			requestResponse.done(function(data) {
				console.log(data);
				var portfolioArray = [];
				var delay = .2;
				if(pageOpen !== 'portfolio') {
					$.each(data, function(key, val) {
						var url = val.acf.url;
						var name = val.title.rendered;
						var id = val.id;
						var slug = val.slug;
						var dir = root_dir.template_url;
						if(slug == 'bold-coast-creative') {
							var section = '';
							var svgs = val.acf.svgs;
							section += '<div class="section-block" style="transition-delay:' + delay + '">';
							section += '<div class="block bcc">';
							svgs.forEach(function(filename){
								section += '<img src="' + dir + '/svg/' + filename.svg + '.svg" class="' + filename.svg + '">';
							});

							section += '<a href="' + url +'"><h2>' + name + '</h2></a>';
							section += '</div>';
							section += '</div>';
							console.log(section);
						} else if(slug == 'chipmans-wharf') {
							var section = '';
							var svg = val.acf.svg;
							var images = val.acf.images;
							section += '<div class="section-block chipmans" style="transition-delay:' + delay + '">';
							section += '<div class="block">';
							section += '<div class="menu">';
							section += '<a href="' + url +'"><h2>' + name + '</h2></a>';
							section += '</div>';
							section += '<div class="wheel-container">';
							section += '<div class="wheel">';
							section += '<img src="' + dir + '/svg/' + svg + '.svg" class="' + svg + '">';
							section += '<img src="' + dir + '/svg/' + svg + '.svg" class="' + svg + '">';
							section += '<img src="' + dir + '/svg/' + svg + '.svg" class="' + svg + '">';
							section += '<img src="' + dir + '/svg/' + svg + '.svg" class="' + svg + '">';
							section += '<div class="circle"></div>';
							section += '</div>';
							section += '</div>';
							section += '</div>';
							section += '<div class="block">';
							images.forEach( function(image) {
								section += '<img class="store ' + image.title + '" src="' + image.url + '">';
							});
							section += '</div>';
							section += '</div>';
						} else if(slug == 'no-frills-oil') {
							var section = '';
							var form = val.acf.forms;
							var images = val.acf.images;
							section += '<div class="section-block nofrills" style="transition-delay:' + delay + '">';;
							section += '<a href="' + url +'"><h2>' + name + '</h2></a>';
							section += '<img src="' + form + '" class="forms">';
							section += '<div class="images">';
							images.forEach( function(filename) {
								section += '<div class="img-container">';
								section += '<img src="' + filename.image + '">';
								section +='</div>'; 
							});
							section += '</div>';
							section += '</div>';
						} else if(slug == 'axly') {
							var section = '';
							var blocks = val.acf.block;
							section += '<div class="section-block axly" style="transition-delay:' + delay + '">';
							blocks.forEach( function(image) {
								section += '<div class="block ' + image.class + '" style="background-image: url(' + image.background + ')">';
								section += '<img src="' + image.object + '">';
								section += '</div>';
							});
							section += '<h2>' + name + '</h2>';
							section += '</div>';
							section += '</div>';
						}
						portfolioArray.unshift(section);
						delay = delay + .05;
					});
					closePages();
					nav.menuButton.css('pointer-events', 'none');
					$('canvas').removeClass('Hidden');
					setTimeout(function() {
						activateAstronaut();
					}, 200);
					setTimeout(function() {
						$('canvas').addClass('Hidden');
						$('.intro-content').addClass('Up');
						$('.page-content').addClass('Up');
						$('.page-content').html(portfolioArray);
						$('.page-content').append(outro);
						portfolioEvents();
					}, 2200);
					setTimeout(function() {
						$('.section-block').addClass('Active');
						nav.menuButton.css('pointer-events', 'initial');
					}, 2250);
					pageOpen = 'portfolio'
				}

			});
			
		});
	
	// Open about content
		nav.main.about.on('click', function() {
			if(pageOpen !== 'about'){
				var id = $(e.currentTarget).data('site');
				var requestResponse = $.ajax({
					url: "https://boldcoastdev.com/yakcmxela/index.php/wp-json/wp/v2/posts?categories=5",
					method: "GET",
				});

				requestResponse.fail(function(textStatus) {
					console.log(textStatus);
				});

				requestResponse.done(function(data) {
					console.log(data);
					var el = '';
					$.each(data, function(key, val) {
						var content = val.content.rendered;
						el += '<div class="about Hidden">';
						el += content;
						el += '</div>';
					});
					closePages();
					defineViewport();
					if(viewportWidth < 650) {
						$('.page .intro-content .section-block').css('overflow-y', 'visible');
					}
					nav.menuButton.css('pointer-events', 'none');
					$('.intro').append(el);
					$('canvas').addClass('Hidden');
					setTimeout(function() {	
						var container = $('.intro');
						var div = $('.about');
						$('.intro').addClass('About');
						$('.astro').addClass('About');
						glitch(div, container, 'translate(0%, 0%)');
						astronaut.addClass('Wave');
					}, 500);
					setTimeout(function() {
						astronaut.removeClass('Wave');
						nav.menuButton.css('pointer-events', 'initial');
					}, 3250);
					pageOpen = 'about';
					
				});	
			}	
		});

	// Open skills page
		nav.main.skills.on('click', function() {
			closePages();
			$('canvas').addClass('Hidden');
			$('.astro').addClass('Skills');
			$('.intro').addClass('Skills');
			$('.intro .skills').addClass('Active');
			pageOpen = 'skills';
		});

	// Open contact page
		nav.main.contact.on('click', function() {
			closePages();
			$('canvas').addClass('Hidden');
			$('.astro').addClass('Contact');
			$('.intro .contact').addClass('Active');
			$('.antenna').addClass('Active');
			pageOpen = 'contact';
		})

	function closePages() {
		console.log(pageOpen);
		if(pageOpen == 'contact') {
			closeContact();
		} else if(pageOpen == 'skills') {
			closeSkills();
		} else if(pageOpen == 'portfolio') {
			closePortfolio();
		} else if(pageOpen == 'about') {
			closeAbout();
		}	
	}
	function closeContact() {
		$('.astro').removeClass('Contact');
		$('.intro').removeClass('Contact');
		$('.intro .contact').removeClass('Active');
		$('canvas').addClass('Hidden');
	}

	function closeSkills() {
		$('.astro').removeClass('Skills');
		$('.intro').removeClass('Skills');
		$('.intro .skills').removeClass('Active');
		$('canvas').addClass('Hidden');
	}
	
	function closeAbout() {
		var div = $('.about');
		blinkOut(div, 'translate(0%, 0%)');
		astronaut.removeClass('Wave');
		$('canvas').addClass('Hidden');
		$('.intro').removeClass('About');
		$('.astro').removeClass('About');
	}

	function closePortfolio() {
		$('html, body').animate({scrollTop:0},'50');
		astronaut.removeClass('Down');
		astronaut.removeClass('Take-Off');
		astronaut.removeClass('Jets-On');
		astronaut.addClass('Relax');
		astronautContainer.removeClass('To-Top');
		$('.intro-content').removeClass('Up');
		$('.page-content').removeClass('Up');
		$('canvas').addClass('Hidden');
		setTimeout(function() {
			$('.page-content').html('');
		}, 1001);
	}

	function sizeSpaceBG() {
		var height = $('.tv').outerHeight();
		var width = $('.tv').outerWidth();
		console.log(width);
		spacebg.css('height', height - 75);
		spacebg.css('width', width - 50);
		spacebg.removeClass('No-Animate');

	}
	$(window).on('load',function() {
		sizeSpaceBG();
		setNavPos();
	});
	$(window).on('resize', function() {
		sizeSpaceBG();
		setNavPos();
	});

	function parallax(div, scrollSpeed, axis, centered, transforms) {
		$.each(div, function() {
			divPosition = $(this).offset().top;
			divHeight = $(this).height();
			pageLocation = $(window).scrollTop();
			scroll = (pageLocation / (divPosition + divHeight)) * scrollSpeed;
			if(transforms == undefined) {
				transforms = '';
			}
			if(axis == 'y' && centered == true) {

				if (scroll < 50 && scroll > -50) {
					if(transforms !== '') {
						$(div).css('transform', 'translate(-50%, ' + scroll + '%) ' + transforms);
					} else {
						$(div).css('transform', 'translate(-50%, ' + scroll + '%)');
					}
				}
			} else if(axis == 'x' && centered == true) {
				if (scroll < 50 && scroll > -50) {
					if(transforms !== '') {
						$(div).css('transform', 'translate(' + scroll + '%, -50%) ' + transforms);
					} else {
						$(div).css('transform', 'translate(' + scroll + '%, -50%)');
					}
				}
			} else if(axis == 'y' && centered == false) {
				if (scroll < 50 && scroll > -50) {
					if(transforms !== '') {
						$(div).css('transform', 'translateY(' + scroll + '%) ' + transforms);
					} else {
						$(div).css('transform', 'translateY(' + scroll + '%)');
					}
				}
			} else if(axis == 'x' && centered == false) {
				if (scroll < 50 && scroll > -50) {
					if(transforms !== '') {
						$(div).css('transform', 'translateX(' + scroll + '%) ' + transforms);
					} else {
						$(div).css('transform', 'translateX(' + scroll + '%)');
					}	
				}
			} else if(axis == 'lrbt') {
				if (scroll < 50 && scroll > -50) {
					if(transforms !== '') {
						$(div).css('transform', 'translate(' + scroll + '%, ' + (-1* scroll) + '%) ' + transforms);
					} else {
						$(div).css('transform', 'translate(' + scroll + '%, ' + (-1* scroll) + '%)');
					}	
				}
			}
			
			
			// if (scroll < 100 && scroll > 0) {
			// 	$(div).css('transform', 'translate' + axis + '(' + scroll + '%)');
			// } else if (scroll < 0 && scroll > -100) {
			// 	$(div).css('transform', 'translate' + axis + '(' + (scroll) + '%)');
			// }
		});
	};

	var boat = $('.boat');
	var lobster = $('.lobster');
	var rockpile = $('.rockpile');
	var oysters = $('.oysters');
	var wheel = $('.wheel');
	var wheelNavOpen = false;

	wheel.on('click', function() {
		if(wheelNavOpen == false) {
			$(this).removeClass('Nav-Closed');
			$(this).addClass('Nav-Open');
			wheelNavOpen = true;
		} else if(wheelNavOpen == true) {
			$(this).removeClass('Nav-Open');
			$(this).addClass('Nav-Closed');
			wheelNavOpen = false;
		}
	});

	function portfolioEvents() {
		var forms = $('.forms');

		var joshuatreeBG = $('.joshuatree');
		var allgoldBG = $('.allgold');
		var joshuatree = $('.joshuatree img');
		var allgold = $('.allgold img');

		var gulls = $('.gulls');

		sizeSpaceBG();

		parallax(forms, -50, 'y', false);

		parallax(joshuatreeBG, 50, 'y', false);
		parallax(allgoldBG, 50, 'y', false);

		parallax(joshuatree, 50, 'y', true);
		parallax(allgold, -50, 'y', true);

		parallax(gulls, 50, 'xy', false);

		$(window).on('scroll', function() {
			parallax(forms, -50, 'y', false);

			parallax(joshuatreeBG, 50, 'y', false);
			parallax(allgoldBG, 50, 'y', false);

			parallax(joshuatree, 50, 'y', true);
			parallax(allgold, -50, 'y', true);

			parallax(gulls, 50, 'lrbt', false);
		});
	}
	portfolioEvents();
	
// Canvas stuff 
	var canvas = document.getElementById("space");
	var ctx = canvas.getContext("2d");
	var particleImage = document.getElementById("particle");
	var ctxWidth;
	var ctxHeight;
	
	var particles = [];
	// Set canvas size and update on screen resize
		function canvasSize() {
			ctxWidth = window.innerWidth;
			ctxHeight = window.innerHeight;
			canvas.setAttribute("width", ctxWidth);
			canvas.setAttribute("height", ctxHeight);	
		}
		canvasSize();
		$(window).on("resize", function() {
			canvasSize();
		});

	// Find location of jets (hands of figure)
	
	function getSet() {
		// Needed to keep the stars in the right place during zoom out
		// Scale array is the transform matrix turned into an array of strings. Use scaleArray[0] for scale value.
		var scaleArray = astronautContainer.css("transform").slice(7);
		scaleArray = scaleArray.slice(0, -1);
		scaleArray = scaleArray.replace(/,/g, "");
		scaleArray = scaleArray.trim().split(/\s+/);

		var scale = scaleArray[0];

		if (scale < 1) {
			leftJetY = leftJet.offset().top + (leftJet.height() / 2) * scale;
			leftJetX = leftJet.offset().left + leftJet.width() * scale;
			rightJetY = rightJet.offset().top + (leftJet.height() / 2) * scale;
			rightJetX = rightJet.offset().left + leftJet.width() * scale;
		} else {
			leftJetY = leftJet.offset().top + (leftJet.height() / 2);
			leftJetX = leftJet.offset().left + leftJet.width();
			rightJetY = rightJet.offset().top + (leftJet.height() / 2);
			rightJetX = rightJet.offset().left + leftJet.width();
		}
		winWidth = window.innerWidth;
		winHeight = window.innerHeight;
	}
	getSet();
	//Particles
		function Particle( x, y, side, init ) {

			var hue = 190;
			this.x = x;
			this.y = y;
			// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
			this.coordinates = [];
			this.coordinateCount = 2;
			while( this.coordinateCount-- ) {
					this.coordinates.push( [ this.x, this.y ] );
				}
			if (winWidth < 550) {
				this.particleSize = 2;
			} else {
				this.particleSize = 6;
			}
			this.side = side;
			this.init = init;
			// set a random angle in all possible directions, in radians
			this.angle = random( 0, Math.PI *.25 );
			this.speed = random( 1, 10 );
			// friction will slow the particle down
			this.friction = 0.95;
			// gravity will be applied and pull the particle down
			this.gravity = 5;
			// set the hue to a random number +-20 of the overall hue variable
			this.hue = random( hue - 20, hue + 20 );
			this.brightness = random( 50, 80 );
			this.alpha = 1;
			// set how fast the particle fades out
			this.decay = random( 0.015, 0.1 );
			this.pattern = ctx.createPattern(particleImage, "repeat");
		}

		Particle.prototype.update = function( index ) {
			// remove last item in coordinates array
			this.coordinates.pop();
			// add current coordinates to the start of the array
			this.coordinates.unshift( [ this.x, this.y ] );
			// slow down the particle
			this.speed *= this.friction;
			// apply velocity
			if (this.side == "right" ) {
				this.x += Math.sin( this.angle ) * this.speed * -1;
			} else if (this.side == "left" ) {
				this.x += Math.sin( this.angle ) * this.speed;
			}
			this.y += Math.sin( this.angle ) * this.speed + this.gravity;
			this.hue = this.hue + 3;
			// fade out the particle
			this.alpha -= this.decay;
			// remove the particle once the alpha is low enough, based on the passed in index
			if( this.alpha <= this.decay ) {
				particles.splice( index, 1 );
			}
			if (this.init == false) {
				particles.splice(index++, 1);
			}
		}

		Particle.prototype.draw = function() {
			ctx.beginPath();
			// move to the last tracked coordinates in the set, then draw a line to the current x and y
			ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
			ctx.lineTo( this.x, this.y );
			ctx.strokeStyle = "hsla(" + this.hue + ", 100%, " + this.brightness + "%, " + this.alpha + ")";
			ctx.lineWidth = 3;
			
			// ctx.beginPath();
			ctx.lineTo( this.x, this.y );
			ctx.lineTo( this.x + this.particleSize, this.y + (this.particleSize * 1.5));
			ctx.lineTo( this.x - this.particleSize, this.y + (this.particleSize * 1.5));
			ctx.lineTo( this.x, this.y);
			ctx.moveTo( this.x, this.y + (this.particleSize * 2));
			ctx.lineTo( this.x -this.particleSize, this.y + (this.particleSize / 2));
			ctx.lineTo( this.x + this.particleSize, this.y + (this.particleSize / 2));
			ctx.lineTo( this.x, this.y + (this.particleSize * 2));
			ctx.fillStyle = this.pattern;
			ctx.fill();
			ctx.closePath();
			ctx.stroke();
			ctx.clearRect(0, 0, winWidth, topEndBoundary);
			ctx.clearRect(0, bottomStartBoundary, winWidth, winHeight);
		}
	
	function createParticles() {
		getSet();
		blastOff = requestAnimationFrame(createParticles);
		// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
		var particleCount = 2;
		while( particleCount-- ) {
			particles.push( new Particle( leftJetX, leftJetY, "left", true ) );
			particles.push( new Particle( rightJetX, rightJetY, "right", true ) );
		}
		ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.fillRect( particle.x, particle.y, canvas.width, canvas.height );
		ctx.globalCompositeOperation = "lighter";
		topEndBoundary = spacebg.offset().top * 1.1;
		bottomStartBoundary = spacebg.offset().top + spacebg.innerHeight() * .75;
		var i = particles.length;
		while( i-- ) {
			particles[ i ].draw();
			particles[ i ].update( i );
		}
	}

	function removeParticles() {
		getSet();
		blastOff = requestAnimationFrame(removeParticles);
		// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
		var particleCount = 2;
		while( particleCount-- ) {
			particles.push( new Particle( leftJetX, leftJetY, "left", false ) );
			particles.push( new Particle( rightJetX, rightJetY, "right", false ) );
		}
		ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.fillRect( 0, 0, canvas.width, canvas.height );
		ctx.globalCompositeOperation = "lighter";
		topEndBoundary = spacebg.offset().top * 1.1;
		bottomStartBoundary = spacebg.offset().top + spacebg.innerHeight() * .75;
		var i = particles.length;
		while( i-- ) {
			particles[ i ].draw();
			particles[ i ].update( i );
		}
	}

	var topEndBoundary;
	var bottomStartBoundary;

	function setSizing() {
		getSet();
		var containerHeight = astronaut.parent().height();
		var width = containerHeight / 1.86;
		astronaut.parent().css("width", width);
		astronaut.css("width", width);
	}

	function easeInQuad (t) { 
		return t;
	}
	
	var baseSpaceSpeed = 120;
	var easing = 1;
	var targetSpeed = 1;
	function speedUp() {
		var targetSpeed = 1;
		baseSpaceSpeed = baseSpaceSpeed - easing;
		outerspace.css("animation-duration", baseSpaceSpeed + "s");
		console.log(baseSpaceSpeed);
		if (baseSpaceSpeed <= targetSpeed) {
			spaceTravel = cancelAnimationFrame(speedUp);	
		} else {
			spaceTravel = requestAnimationFrame(speedUp);
		}	
	}

	function initAstronaut() {
		setSizing();
		astronaut.addClass("Take-Off");
		astronaut.addClass("Jets-On");	
		astronautContainer.removeClass("Init");
		blastOff = requestAnimationFrame(createParticles);
		setTimeout(function() {
			astronaut.removeClass("Jets-On");
			astronaut.removeClass("Take-Off");
			astronaut.addClass("Relax");
			cancelAnimationFrame(blastOff);
			// ease jets out with new animation 
			blastOff = requestAnimationFrame(removeParticles);
		}, 3500);
		setTimeout(function () {
			// cancel animation frame after easing complete
			cancelAnimationFrame(blastOff);
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}, 3600);
	}

	function relaxAstronaut() {
		astronaut.removeClass("Jets-On");
		astronaut.removeClass("Take-Off");
	}

	function activateAstronaut() {
		setSizing();
		astronaut.removeClass("Relax");
		astronaut.addClass("Down");
		setTimeout(function() {
			astronaut.addClass("Take-Off");
			astronaut.addClass("Jets-On");
			astronautContainer.addClass("To-Top");
			blastOff = requestAnimationFrame(createParticles);
		}, 1000);
		setTimeout(function() {
			
		}, 1095);
		setTimeout(function() {
			cancelAnimationFrame(blastOff);
		}, 4000);
		setTimeout(function() {
			blastOff = requestAnimationFrame(removeParticles);
		}, 4001)
		setTimeout(function() {
			cancelAnimationFrame(blastOff);
		}, 5000);
	}

	function closeUp() {
		setSizing();
		astronaut.removeClass("Relax");
		astronaut.removeClass("Jets-On");
		astronaut.addClass("Down");
		setTimeout(function() {
			astronaut.addClass("Take-Off");
			astronaut.addClass("Jets-On");	
			astronautContainer.addClass("To-Top");
		}, 1000);
		setTimeout(function() {
			blastOff = requestAnimationFrame(createParticles);
			astronautContainer.removeClass("Small");
		}, 1095);
		setTimeout(function() {
			astronautContainer.removeClass("To-Top");
			astronautContainer.addClass("Transparent");
			astronautContainer.addClass("Reset-Bottom");
			cancelAnimationFrame(blastOff);
		}, 5500);
		setTimeout(function() {
			astronautContainer.removeClass("Transparent");
			blastOff = requestAnimationFrame(removeParticles);
		}, 5501)
		setTimeout(function() {
			astronautContainer.removeClass("Reset-Bottom");
			astronautContainer.addClass("Up-Close");
			relaxAstronaut();
			cancelAnimationFrame(blastOff);
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}, 6000)
	}

	$(window).on("resize", function() {
		setSizing();
		$(".astronaut-container").find("*").addClass("No-Transition");
		setTimeout(function() {
			$(".astronaut-container").find("*").removeClass("No-Transition");
		})
	});

	loaderBar();
	randomizeMyName();

	var camera;
	var controls;
	var axes;
	var helper;
	var scene;
	var textureLoader;
	var bccTexture;
	var bccMaterial;
	var bccSphere;
	var chipmansTexture;
	var chipmansMaterial;
	var chipmansSphere;
	var nofrillsTexture;
	var nofrillsMaterial;
	var nofrillsRingColor;
	var nofrillsRing;
	var nofrillsSphere;
	var epaTexture;
	var epaMaterial;
	var epaSphere;
	var sphere;
	var torus;
	var renderer;
	var canvasHeight = outerspace.height();
	var aspectRatio = window.innerWidth / canvasHeight;
	var viewSize = 1000;
	var mouseX = 0;
	var mouseY = 0;
	var windowHalfX = window.innerHeight / 2;
	var windowHalfY	= window.innerHeight / 2;
	var capabilitiesPage = false;
	var portfolioPage = true;
	var experiencePage = false;
	var bioPage = false;

	function init() {
		// Camera
		viewSize = 1000;
		
		windowHalfX = window.innerHeight / 2;
		windowHalfY	= window.innerHeight / 2;
		camera = new THREE.PerspectiveCamera( 45, aspectRatio, 0.1, 1000 );
		camera.position.set( 0, 0, 100 )

		// Controls
		// controls = new THREE.OrbitControls(camera);
		// controls.rotateSpeed = 1.0;
		// controls.zoomSpeed = 1.2;
		// controls.panSpeed = 0.8;

		// Scene
		scene = new THREE.Scene();

		// Helpers
		axes = new THREE.AxisHelper(30);
		helper = new THREE.GridHelper(1000, 10);

		// Textures
		textureLoader = new THREE.TextureLoader();
		bccTexture = textureLoader.load("/yakcmxela/wp-content/themes/yakcmxela/textures/bcc.jpg");
		bccMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: bccTexture } );
		darthiaTexture = textureLoader.load("/yakcmxela/wp-content/themes/yakcmxela/textures/darthia.jpg");
		darthiaMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: darthiaTexture } );
		chipmansTexture = textureLoader.load("/yakcmxela/wp-content/themes/yakcmxela/textures/lobsters.jpg");
		chipmansMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: chipmansTexture } );
		epaTexture = textureLoader.load("/yakcmxela/wp-content/themes/yakcmxela/textures/water.jpg");
		epaMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: epaTexture } );
		nofrillsTexture = textureLoader.load("/yakcmxela/wp-content/themes/yakcmxela/textures/nofrills.jpg");
		nofrillsMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: nofrillsTexture } );
		nofrillsRingColor = new THREE.MeshBasicMaterial( { color: 0xFFC600 } );

		// Geometries
		sphere = new THREE.SphereBufferGeometry(6, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
		sphereSmall = new THREE.SphereBufferGeometry(5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
		torus = new THREE.TorusBufferGeometry( 7.5, 1, 2, 100, Math.PI * 2 );

		bccSphere = new THREE.Mesh( sphere, bccMaterial );
		bccSphere.position.x = -60;
		bccSphere.position.y = -10;

		darthiaSphere = new THREE.Mesh( sphere, darthiaMaterial );
		darthiaSphere.position.x = -30;
		darthiaSphere.position.y = -3;

		epaSphere = new THREE.Mesh( sphere, epaMaterial );
		epaSphere.position.x = 0;
		epaSphere.position.y = 2;

		nofrillsRing = new THREE.Mesh( torus, nofrillsRingColor );
		nofrillsRing.position.x = 30;
		nofrillsRing.position.y = 6;
		nofrillsSphere = new THREE.Mesh( sphereSmall, nofrillsMaterial );
		nofrillsSphere.position.x = 30;
		nofrillsSphere.position.y = 6;

		chipmansSphere = new THREE.Mesh( sphere, chipmansMaterial );
		chipmansSphere.position.x = 60;
		chipmansSphere.position.y = 9;

		// Renderer
		renderer = new THREE.WebGLRenderer({antialiased: true, alpha: true});
		canvasHeight = $(".canvas").height();
		console.log(canvasHeight);
		renderer.setSize( window.innerWidth, canvasHeight );
		$(".canvas").append( renderer.domElement );

		// Add to scene
		// scene.add( helper );
		// scene.add( axes );
		scene.add( bccSphere );
		scene.add( nofrillsSphere );
		scene.add( nofrillsRing );
		scene.add( chipmansSphere );
		scene.add( darthiaSphere );
		scene.add( epaSphere );
		
		// Events
		// document.addEventListener( "mousemove", onDocumentMouseMove, false );

		// Click
		$(".epaPlanet").on("click", function() {
			function animatePlanet() {
				requestAnimationFrame( animatePlanet );

				epaSphere.rotation.y += 0.01;
			}

			animatePlanet();
		});
	}

	function onDocumentMouseMove( event ) {
		var position = { x: 0, y: 0 }
		mouseX = ( event.clientX - (windowHalfX * 1.8) );
		mouseY = ( event.clientY - windowHalfY );
		mouseX /= 500;
		mouseY /= 500;
		// var target = { x: mouseX, y: mouseY };
		// console.log(target);
		// var tween = new TWEEN.Tween(position).to(target, 2000);
		// tween.onUpdate(function() {
			
		// });

		// tween.start();

		camera.position.x = mouseX;
		camera.position.y = mouseY;

	}

	function animate() {
		requestAnimationFrame( animate );

		bccSphere.rotation.y += .003;
		chipmansSphere.rotation.y += 0.005;
		epaSphere.rotation.y += 0.003;
		nofrillsSphere.rotation.x = 1;
		nofrillsSphere.rotation.y += 0.001;
		nofrillsRing.rotation.x = 1.25;
		nofrillsRing.rotation.y += .001;
		TWEEN.update();
		renderer.render( scene, camera );
	}

	function tweenings(obj, sx, sy, ex, ey) {
		var position = {x: sx, y: sy}
		var target = {x: ex, y: ey}

		var tween = new TWEEN.Tween(position).to(target, 3000);
		console.log(position);
		tween.onUpdate(function() {
			obj.position.x = position.x;
			obj.position.y = position.y;
		});

		tween.easing(TWEEN.Easing.Back.InOut);

		tween.start();
	}

	$("#capabilities").on("click", function() {
		if ( portfolioPage = true ) {
			tweenings(bccSphere, -60, -10, -260, -10 );
			tweenings(darthiaSphere, -30, -3, -230, -3 );
			tweenings(epaSphere, 0, 2, -200, 2 );
			tweenings(nofrillsSphere, 30, 6, -170, 6 );
			tweenings(nofrillsRing, 30, 6, -170, 6 );
			tweenings(chipmansSphere, 60, 9, -140, 9 );
			outerspace.css("background-position-x", "-500%")
			outerspace.css("animation", "zoomies 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)");
		}
		setTimeout(function() {
			scene.remove( bccSphere );
			scene.remove( nofrillsSphere );
			scene.remove( nofrillsRing );
			scene.remove( chipmansSphere );
			scene.remove( darthiaSphere );
			scene.remove( epaSphere );
		}, 3000);
		capabilitiesPage = true;
		portfolioPage = false;
		bioPage = false;
		experiencePage = false;
	});

	$("#portfolio").on("click", function() {
		scene.add( bccSphere );
		scene.add( nofrillsSphere );
		scene.add( nofrillsRing );
		scene.add( chipmansSphere );
		scene.add( darthiaSphere );
		scene.add( epaSphere );
		tweenings(bccSphere, -260, -10, -60, -10 );
		tweenings(darthiaSphere, -230, -3, -30, -3 );
		tweenings(epaSphere, -200, 2, 0, 2 );
		tweenings(nofrillsSphere, -170, 6, 30, 6 );
		tweenings(nofrillsRing, -170, 6, 30, 6 );
		tweenings(chipmansSphere, -140, 9, 60, 9 );
		outerspace.css("background-position-x", "0%")
		outerspace.css("animation", "zoomies 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)");
		portfolioPage = true;
		capabilitiesPage = false;
		bioPage = false;
		experiencePage = false;
	});

// Document Ready
	setSizing();
	getSet();
// On Load

		
});