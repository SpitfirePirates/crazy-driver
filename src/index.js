import Game from '../Core/Game.js'
import Level from '../Core/Level.js'
import Car from '../Core/Car.js'

class MyCar extends Car {
  constructor(level) {
    super(level)
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
