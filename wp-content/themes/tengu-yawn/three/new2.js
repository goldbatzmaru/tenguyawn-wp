if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.y = 500;
				// camera.position.x = 500;

				scene = new THREE.Scene();

				var object;

				var ambientLight = new THREE.AmbientLight( 0xcccccc, 1 );
				scene.add( ambientLight );

				var pointLight = new THREE.PointLight( 0xffffff, 1 );
				camera.add( pointLight );
				scene.add( camera );






			    var diameter = 75;
			    var radialSegments = 64;
			    var geometry = new THREE.CylinderGeometry( diameter, diameter, 5, radialSegments );
			    
			    var medal = "textures/tgyn_medal.jpg";
			    var gold = "textures/gold.jpg";

			    var texture1 = new THREE.TextureLoader().load( medal );
			    var texture2 = new THREE.TextureLoader().load( gold );
			    var texture3 = new THREE.TextureLoader().load( medal );


				var materials = [];
				        materials.push(new THREE.MeshBasicMaterial({ map: texture1 }));
				        materials.push(new THREE.MeshBasicMaterial({ map: texture2 }));
				        materials.push(new THREE.MeshBasicMaterial({ map: texture3 }));
				        var l = geometry.faces.length;
				        for (var i = 0; i < l; i++) {
				            if (geometry.faces[i].normal.y !== 0) {
				                // these are caps
				                geometry.faces[i].materialIndex = 0;
				            } else {
				                geometry.faces[i].materialIndex = 1;
				            }
				        }

				//

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 300, 0, 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 100, 0, 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 100, 0, 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 300, 0, 400 );
				scene.add( object );

				//

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 300, 0, 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 100, 0, 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 100, 0, 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 300, 0, 200 );
				scene.add( object );

				//

				object = new THREE.Mesh(geometry, materials);
				object.position.set( -300, 0, 0 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( -100, 0, 0 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 100, 0, 0 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 300, 0, 0 );
				scene.add( object );

				//

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 300, 0, - 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 100, 0, - 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 100, 0, - 200 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 300, 0, - 200 );
				scene.add( object );

				//

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 300, 0, - 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( - 100, 0, - 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 100, 0, - 400 );
				scene.add( object );

				object = new THREE.Mesh(geometry, materials);
				object.position.set( 300, 0, - 400 );
				scene.add( object );

				//

				renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setClearColor( 0x000000, 0 );
				document.body.appendChild( renderer.domElement );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				var timer = Date.now() * 0.0001;

				camera.position.x = Math.cos( timer ) * 400;
				camera.position.z = Math.sin( timer ) * 400;

				camera.lookAt( scene.position );

				scene.traverse( function( object ) {

					if ( object.isMesh === true ) {

						object.rotation.x = timer * 5;
						object.rotation.y = timer * 2.5;

					}

				} );

				renderer.render( scene, camera );

			}