import { Vector3 } from "three";
import * as THREE from 'three';
import Orbiter from "./Orbiter";

class CelestialBody {
    rotationSpeed: number;
    orbiters: Orbiter[];
    mesh: THREE.Mesh;

    constructor(position: Vector3, radius: number, rotationSpeed: number, color: number) {
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(radius, 64, 32 ),
            new THREE.MeshBasicMaterial( { color: color } ));
        this.mesh.position.set(position.x, position.y, position.z);
        this.rotationSpeed = rotationSpeed;
        this.orbiters = [];
    }
    get position(): Vector3 { return this.mesh.position }
    set position(position: Vector3) {
        this.mesh.position.set(position.x, position.y, position.z);
    }
}

export default CelestialBody;