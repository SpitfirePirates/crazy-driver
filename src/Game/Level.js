import 'phaser'

export default class Level extends Phaser.Scene {
  constructor() {
    super()
    this.spawnPoint = {
      x: 200,
      y: 400
    }
  }

  preload() {
    this.load.image('car', 'assets/car.png')
  }
  
  create() {
  }
  
  update() {
  }

  spawn(gameObject) {
    this.add.existing(gameObject)
  }
}