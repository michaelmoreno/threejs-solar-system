import * as THREE from 'three';
import CelestialBody from './CelestialBody';
import Orbiter from './Orbiter';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const canvas = document.querySelector('#background') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

const sun = new CelestialBody(new THREE.Vector3(0, 0, 0), 7, 0.01, 0xffff00);
const mercury = new Orbiter(2, 0.01, 0xaaaaaa, sun, 20, 0.01);
scene.add(sun.mesh);
scene.add(mercury.mesh);

 function animate() {
    requestAnimationFrame( animate );
    mercury.update();
    renderer.render( scene, camera );
 }

animate();