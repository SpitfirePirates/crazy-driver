import Game from './Game/Game.js'
import Level from './Game/Level.js'

class MyLevel extends Level {
  create() {
    super.create()
  }

  update() {
    super.update()
  }
}

const level = new MyLevel()
new Game(level)
