import Game from './Game/Game.js'
import Level from './Game/Level.js'
import Car from './Game/Car.js'

class MyCar extends Car {
  constructor(level) {
    super(level)
    this.setActive(true)
  }

  preUpdate() {
    this.goForwards()
  }
}

class MyLevel extends Level {
  create() {
    super.create()
    
    const car = new MyCar(this)
    this.spawn(car)
  }

  update() {
    super.update()
  }
}

const level = new MyLevel()
new Game(level)
