var container;

var camera, scene, renderer;

var map, object;
var zoom;

var mouseX, mouseY, mouseXp, mouseYp, mouseXd, mouseYd;

var log;

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.OrthographicCamera( window.innerWidth / - zoom, window.innerWidth / zoom, window.innerHeight / zoom, window.innerHeight / - zoom, -400, 800 );
	camera.position.x = 300;
	camera.position.y = 0;
	camera.position.z = 0;

	setCamera();

	mouseYp = 0;
	mouseXp = 0;
	mouseYd = 0;
	mouseXd = 0;

	scene = new THREE.Scene();

	scene.add( new THREE.AmbientLight( 0xffffff ) );

	map = THREE.ImageUtils.loadTexture( '../imgs/ty.png' );
	map.wrapS = map.wrapT = THREE.RepeatWrapping;
	map.repeat.set( 1, 1 );

	var material = new THREE.MeshLambertMaterial( { ambient: 0xffffff, map: map, side: THREE.DoubleSide, transparent: true } );
	material.depthWrite = false

	object = new THREE.Mesh( new THREE.CylinderGeometry( 100, 100, 150, 150, 1, true ), material );
	object.position.set( 0, 0, 0 );
	scene.add( object );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );

	renderer.setClearColor(0xffffff);

	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener('mousemove', onMouseMove);
	window.addEventListener('devicemotion', onDeviceMotion);
}

function onDeviceMotion(event) {	
	var accelerationX = event.accelerationIncludingGravity.x;  
	var accelerationY = event.accelerationIncludingGravity.y;  
	var accelerationZ = event.accelerationIncludingGravity.z;  
	mouseXp = mouseXp - (accelerationX * 0.01);
	mouseXp = ( accelerationX + 10 ) / 20;
	mouseXp = (mouseXp > 1)? 1 : mouseXp;
	mouseXp = (mouseXp < 0)? 0 : mouseXp;
	mouseYp = ( accelerationY + 10 ) / 20;
	mouseYp = (mouseYp > 1)? 1 : mouseYp;
	mouseYp = (mouseYp < 0)? 0 : mouseYp;
}  

function onMouseMove(event){
	mouseX = event.pageX;
	mouseY = event.pageY;

	mouseXp = mouseX/window.innerWidth;
	mouseYp = mouseY/window.innerHeight;
}

function onWindowResize() {

	setCamera();

	renderer.setSize( window.innerWidth, window.innerHeight );
}

function setCamera(){

	var shortest = (window.innerWidth < window.innerHeight)? window.innerWidth : window.innerHeight;

	zoom =  shortest * .004; 

	camera.left = window.innerWidth / - zoom;
	camera.right = window.innerWidth / zoom;
	camera.top = window.innerHeight / zoom;
	camera.bottom = window.innerHeight / - zoom;
	camera.near = -400;
	camera.far = 800;

	camera.updateProjectionMatrix();
}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var timer = Date.now() * 0.0001;

	map.offset.x	+= 0.004;

	camera.lookAt( scene.position );

	mouseXd = mouseXd - ((mouseXd - mouseXp) * 0.02);
	mouseYd = mouseYd - ((mouseYd - mouseYp) * 0.02);

	object.rotation.z = 1-(2* mouseYd);
	object.rotation.x = 1-(2* mouseXd);

	renderer.render( scene, camera );

}