import 'phaser'

export default class Game extends Phaser.Game {
  constructor(level) {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'matter',
        matter: {
          debug: false,
          gravity: {
            x: 0,
            y: 0
          }
        }
      },
      scene: [
        level
      ]
    }

    super(config)
  }
}
