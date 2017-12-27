$(document).ready(function() {
	var startMaine = $('.start-maine');
	var horizonLeaving = $('.horizon-leaving')
	var astronautContainer = $('.astronaut-container');
	var astronaut = $('.astronaut');
	var outerspace = $('.outerspace');
	var space = $('.space-content');
	var innerspace = $('.innerspace');
	var leftJet = $('.left-arm .hand');
	var rightJet = $('.right-arm .hand');
	var nav = $('nav');
	var color;
	var earth = $('.earth-content');
	var cloud = $('.cloud');
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

// Maths
	function randomColor() {
		var randomRed = Math.floor(Math.random() * 255) + 1;
		var randomBlue = Math.floor(Math.random() * 255) + 1;
		var randomGreen = Math.floor(Math.random() * (230 - 130)) + 130;
		color = 'rgb(' + randomRed + ',' + randomGreen + ',' + 255 + ')'; 
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

	var name = $('.name');
	var loader = $('.loader-container .loader');

	var y = $('.y');
	var Y = 'Y';
	var ab = $('.ab');
	var A = 'A';
	var k = $('.k');
	var K = 'K'
	var c = $('.c');
	var C = 'C';
	var m = $('.m');
	var M = 'M';
	var x = $('.x');
	var X = 'X';
	var e = $('.e');
	var E = 'E';
	var l = $('.l');
	var L = 'L';
	var aa = $('.aa')

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
			div.css('color', randomColor());

			if (i > 1) { //50
				clearInterval(randomLetter);
				div.html(stopLetter);
			}

		}, delay);	
	}

	setTimeout(function() {
		$('.menu').addClass('Active');
	}, 7500);

	function loaderBar() {
		var width = 1;
		var loaderBar = 
		setInterval(function() {
			if (width >= 100) {
				clearInterval(loaderBar);
				setTimeout(function() {
					loader.css('background-color', 'white')
					loader.css('border-color', 'white')
					name.css('color', 'white');
					setTimeout(function() {
						name.addClass('Loaded');
					}, 1000);
				}, 1000);
			} else {
				width++;
				loader.css('width', width + '%');
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
	function cloud() {
		cloudTransform = requestAnimationFrame(cloud);
		windowHeight = window.innerHeight;
		cloudHeight = cloud.height();

		fullTransform = windowHeight + cloudHeight;

		cloud.css('transform', 'translateY(' + fullTransform + 'px)')

	}

	$('.menu-button').on('click', function() {
		$('.menu').toggleClass('Active');
	});
	var cloudTransform;
	$('.about').on('click', function() {
		$('.start-maine').toggleClass('Take-Off');
		space.removeClass('Hidden');
		setTimeout(function() {
			cloud.addClass('Active');
		}, 2000);
		setTimeout(function() {
			blastOff = requestAnimationFrame(createParticles);
			astronaut.removeClass('On-Load');
		}, 5000);

		setTimeout(function() {
			earth.addClass('Fade-Out');
			astronaut.removeClass('On-Earth');
			astronaut.removeClass('Jets-On');
			$('.upper-body').removeClass('Black');
			$('.lower-body').removeClass('Black');
			$('.helmet').removeClass('Black');
			cancelAnimationFrame(blastOff);
			blastOff = requestAnimationFrame(removeParticles);
			astronaut.addClass('Relax');
		}, 15000);

		setTimeout(function() {
			cancelAnimationFrame(blastOff);
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}, 16000);
	});

// Landing page
	
	
	function parallax(div, scrollSpeed, axis) {
		$.each(div, function() {
			divPosition = $(this).offset().top;
			divHeight = $(this).height();
			pageLocation = $(window).scrollTop();
			scroll = pageLocation / scrollSpeed;
			console.log(scroll);

			if (scroll <= 101 && scroll > -101) {
				$(div).css('transform', 'translate' + axis + '(' + scroll + '%)');
			}
			
			// if (scroll < 100 && scroll > 0) {
			// 	$(div).css('transform', 'translate' + axis + '(' + scroll + '%)');
			// } else if (scroll < 0 && scroll > -100) {
			// 	$(div).css('transform', 'translate' + axis + '(' + (scroll) + '%)');
			// }
		});
	};

	$(window).on('scroll', function() {
		// parallax(horizonLeaving, 0.1, 'y');
		// parallax(startMaine, 10, 'y');
		// parallax(nav, 10, 'y');
	});

// Canvas stuff 
	var canvas = document.getElementById('space');
	var ctx = canvas.getContext('2d');
	var particleImage = document.getElementById('particle');
	var ctxWidth;
	var ctxHeight;
	
	var particles = [];
	// Set canvas size and update on screen resize
		function canvasSize() {
			ctxWidth = window.innerWidth;
			ctxHeight = window.innerHeight;
			canvas.setAttribute('width', ctxWidth);
			canvas.setAttribute('height', ctxHeight);	
		}
		canvasSize();
		$(window).on('resize', function() {
			canvasSize();
		});
	// regl stuff
		// var numPoints = 1e4;
		// var pointWidth = 4;
		// var winWidth = window.innerWidth;
		// var winHeight = window.innerHeight;
		// var rng = d3.randomNormal(0, 0.15);
		// var points = d3.range(numPoints).map( i => ({
		// 	x: (rng() * winWidth) + (winWidth / 2),
		// 	y: (rng() * winHeight) + (winHeight / 2),
		// 	color: [0, Math.random(), 0],
		// }));

		// regl.frame(() =>{
		// 	regl.clear({
		// 		color: [0, 0, 0, 1],
		// 		depth: 1,
		// 	});

		// 	drawPoints({
		// 		pointWidth,
		// 		stageWidth: width,
		// 		stageHeight: height,
		// 	});
		// });

		// var drawPoints = regl({
		// 	frag: '',
		// 	vert: '',

		// 	attributes: {
		// 		position: points.map(d => [d.x, d.y]),
		// 		color: points.map(d => d.color),
		// 	},

		// 	uniforms: {
		// 		pointWidth: regl.prop('pointWidth'),

		// 		stateWidth: regl.prop('stageWidth'),
		// 		stageHeight: regl.prop('stageHeight'),
		// 	},x 1209 y 1015

		// 	count: points.length,

		// 	primitive: 'points',
		// });

	// Find location of jets (hands of figure)
	function getSet() {
		// Needed to keep the stars in the right place during zoom out
		var scale = astronautContainer.css('transform').slice(7, 11);

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
			this.pattern = ctx.createPattern(particleImage, 'repeat');
		}

		Particle.prototype.update = function( index ) {
			// remove last item in coordinates array
			this.coordinates.pop();
			// add current coordinates to the start of the array
			this.coordinates.unshift( [ this.x, this.y ] );
			// slow down the particle
			this.speed *= this.friction;
			// apply velocity
			if (this.side == 'right' ) {
				this.x += Math.sin( this.angle ) * this.speed * -1;
			} else if (this.side == 'left' ) {
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
			ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
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
		}
	
	function createParticles() {
		getSet();
		blastOff = requestAnimationFrame(createParticles);
		// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
		var particleCount = 2;
		while( particleCount-- ) {
			particles.push( new Particle( leftJetX, leftJetY, 'left', true ) );
			particles.push( new Particle( rightJetX, rightJetY, 'right', true ) );
		}
		ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		ctx.fillRect( particle.x, particle.y, canvas.width, canvas.height );
		ctx.globalCompositeOperation = 'lighter';
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
			particles.push( new Particle( leftJetX, leftJetY, 'left', false ) );
			particles.push( new Particle( rightJetX, rightJetY, 'right', false ) );
		}
		ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		ctx.fillRect( 0, 0, canvas.width, canvas.height );
		ctx.globalCompositeOperation = 'lighter';
		var i = particles.length;
		while( i-- ) {
			particles[ i ].draw();
			particles[ i ].update( i );
		}
	}

	$('.to').on('click', function() {
		takeOff();
		blastOff = requestAnimationFrame(createParticles);
	});

	$('.db').on('click', function() {
		cancelAnimationFrame(blastOff);
		// ease jets out with new animation 
		blastOff = requestAnimationFrame(removeParticles);
		// cancel animation frame after easing complete
		setTimeout(function() {
			cancelAnimationFrame(blastOff);
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}, 2000);
	});

	$('.contact').on('click', function() {
		activateAstronaut();
	});

	function setSizing() {
		var containerHeight = astronaut.parent().height();
		var width = containerHeight / 1.86;
		astronaut.parent().css('width', width);
		astronaut.css('width', width);
	}

	function takeOff() {
		astronaut.removeClass('Relax');
		astronaut.removeClass('Jets-On');
		astronaut.addClass('Down');
		setTimeout(function() {
			innerspace.addClass('Travel-Fade');
			outerspace.addClass('Up');
			astronaut.addClass('Take-Off');
			astronaut.addClass('Jets-On');	
			astronautContainer.addClass('Small');
		}, 500);
		setTimeout(function() {
			init();
			animate();
		}, 5000)
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
		outerspace.css('animation-duration', baseSpaceSpeed + 's');
		console.log(baseSpaceSpeed);
		if (baseSpaceSpeed <= targetSpeed) {
			spaceTravel = cancelAnimationFrame(speedUp);	
		} else {
			spaceTravel = requestAnimationFrame(speedUp);
		}	
	}

	function activateAstronaut() {
		startMaine.addClass('Lets-Go');
		horizonLeaving.addClass('Lets-Go');
		setTimeout(function() {
		astronaut.removeClass('On-Load');
		astronaut.addClass('Drop-In');
		}, 2000)
		setTimeout(function() {
			astronaut.remove('Jets-On');
			astronaut.removeClass('Drop-In');
			astronaut.addClass('Relax');
		}, 8000);
	}

	$(window).on('resize', function() {
		setSizing();
		$('.astronaut-container').find('*').addClass('No-Transition');
		setTimeout(function() {
			$('.astronaut-container').find('*').removeClass('No-Transition');
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
		bccTexture = textureLoader.load('/yakcmxela/wp-content/themes/yakcmxela/textures/bcc.jpg');
		bccMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: bccTexture } );
		darthiaTexture = textureLoader.load('/yakcmxela/wp-content/themes/yakcmxela/textures/darthia.jpg');
		darthiaMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: darthiaTexture } );
		chipmansTexture = textureLoader.load('/yakcmxela/wp-content/themes/yakcmxela/textures/lobsters.jpg');
		chipmansMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: chipmansTexture } );
		epaTexture = textureLoader.load('/yakcmxela/wp-content/themes/yakcmxela/textures/water.jpg');
		epaMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, map: epaTexture } );
		nofrillsTexture = textureLoader.load('/yakcmxela/wp-content/themes/yakcmxela/textures/nofrills.jpg');
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
		canvasHeight = $('.canvas').height();
		console.log(canvasHeight);
		renderer.setSize( window.innerWidth, canvasHeight );
		$('.canvas').append( renderer.domElement );

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
		// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

		// Click
		$('.epaPlanet').on('click', function() {
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

	$('#capabilities').on('click', function() {
		if ( portfolioPage = true ) {
			tweenings(bccSphere, -60, -10, -260, -10 );
			tweenings(darthiaSphere, -30, -3, -230, -3 );
			tweenings(epaSphere, 0, 2, -200, 2 );
			tweenings(nofrillsSphere, 30, 6, -170, 6 );
			tweenings(nofrillsRing, 30, 6, -170, 6 );
			tweenings(chipmansSphere, 60, 9, -140, 9 );
			outerspace.css('background-position-x', '-500%')
			outerspace.css('animation', 'zoomies 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)');
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

	$('#portfolio').on('click', function() {
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
		outerspace.css('background-position-x', '0%')
		outerspace.css('animation', 'zoomies 3s cubic-bezier(0.68, -0.55, 0.27, 1.55)');
		portfolioPage = true;
		capabilitiesPage = false;
		bioPage = false;
		experiencePage = false;
	});

// On Load
	setSizing();
});