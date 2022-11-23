import * as THREE from "three";
import CelestialBody from "./CelestialBody";


class Orbiter extends CelestialBody {
    orbiting: CelestialBody;
    orbitAngle: number;
    orbitRadius: number;
    orbitSpeed: number;

    constructor(radius: number, rotationSpeed: number, color: number, orbiting: CelestialBody, orbitRadius: number, orbitSpeed: number) {
        super(new THREE.Vector3(0, 0, 0), radius, rotationSpeed, color);
        this.orbiting = orbiting;
        this.orbitAngle = 0;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.position = this.calcPositionFromOrbiting();
    }
    calcPositionFromOrbiting(): THREE.Vector3 {
        const angle = this.orbitAngle;
        const x = this.orbiting.position.x + this.orbitRadius * Math.cos(angle);
        const y = this.orbiting.position.y + this.orbitRadius * Math.sin(angle);
        return new THREE.Vector3(x, y, 0);
    }
    update() {
        // this.mesh.rotation.y += this.rotationSpeed;
        // this.mesh.position.z += 100
        this.orbitAngle += this.orbitSpeed;
        this.position = this.calcPositionFromOrbiting();
    }
}

export default Orbiter;