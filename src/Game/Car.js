import 'phaser'

export default class Car extends Phaser.GameObjects.Sprite {
  constructor(level) {
    super(level, level.spawnPoint.x, level.spawnPoint.y, 'car')
  }

  goForwards() {
    
  }
}