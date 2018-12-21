import Game from './Game/Game.js'
import Level from './Game/Level.js'
import Car from './Game/Car.js'

class MyCar extends Car {
  constructor(level) {
    super(level)
  }
  
  update() {
    this.goForwards()
  }
}

class MyLevel extends Level {
  create() {
    super.create()
    
    const car = new MyCar(this)
    this.add.existing(car)
  }

  update() {
    super.update()
  }
}

const level = new MyLevel()
new Game(level)
