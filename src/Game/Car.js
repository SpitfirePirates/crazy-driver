import 'phaser'

export default class Car extends Phaser.Physics.Matter.Image {
  constructor(level) {
    super(level.matter.world, level.spawnPoint.x, level.spawnPoint.y, 'car')

    this.setAngle(-90);
    this.setFrictionAir(0.1);
    this.setMass(10);
  }

  goForwards() {
    this.thrust(0.025);
  }
}