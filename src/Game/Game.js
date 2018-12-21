import 'phaser'

export default class Game extends Phaser.Game {
  constructor(level) {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: [
        level
      ]
    }

    super(config)
  }
}
