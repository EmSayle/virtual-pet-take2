const MAXIUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;

function Cat(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIUM_HUNGER;
};

Cat.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

Cat.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Cat.prototype.walk = function() {
  if(this.fitness < 6) {
    this.fitness += 4;
  } else (this.fitness = MAXIUM_HUNGER);
};

Cat.prototype.feed = function() {
  if(this.hunger > 3) {
    this.hunger -= 3;
  } else (this.hunger = MINIMUM_HUNGER);
};

Cat.prototype.checkUp = function() {
  if(this.fitness <= 3 && this.hunger >= 5) {
    return 'I am hungry and I need a walk'
  } else if(this.fitness <= 3) {
    return 'I need a walk'
  } else if(this.hunger >= 5) {
    return 'I am hungry';
  } else {
    return 'I am puuurrrfect';
  };
};



module.exports = Cat;