function Cat(name) {
  this.name = name;
  this.age = 0;
};

Cat.prototype.growUp = function() {
  this.age += 1;
}

module.exports = Cat;