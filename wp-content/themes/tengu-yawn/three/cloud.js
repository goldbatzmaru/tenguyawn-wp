var camera, scene, renderer,
    geometry, material, mesh;
 
init();
animate(); 

function init() {
    clock = new THREE.Clock();

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x49f0ff, 0.25 );
 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1250;
    scene.add( camera );
 
    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0x00ffff, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;

    light = new THREE.DirectionalLight(0x00ffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);
    
    var smoke = animation_data.texture_path + "/Smoke-Element.png";
    smokeTexture = THREE.ImageUtils.loadTexture(smoke);
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, map: smokeTexture, transparent: true});
    smokeMaterial.opacity = 0.5;
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }
 
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x00ffff, 0 );
    renderer.domElement.id = 'ty-canvas';
    document.getElementById('background-animation').appendChild( renderer.domElement );
 
}
 
function animate() {
 
    // note: three.js includes requestAnimationFrame shim
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );
 
}