const Cat = require('../src/cat');

describe('Cat', () => {
  it('creates an instance of Cat', () => {
    expect(new Cat()).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const cat = new Cat('Mr Whiskerson');
    expect(cat.name).toEqual('Mr Whiskerson');
  });
});

describe('growUp method', () => {
  it('growUp() increases the cat age by 1', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.growUp();
    expect(cat.age).toEqual(1);
  });
  it('increases the cat hunger by 5', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 0;
    cat.growUp();
    expect(cat.hunger).toEqual(5);
  });
  it('decreases the cat fitness by 3', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.fitness = 10;
    cat.growUp();
    expect(cat.fitness).toEqual(7);
});

describe('walk method', () => {
  it('increases the cat fitness by 4', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.fitness = 2;
    cat.walk();
    expect(cat.fitness).toEqual(6);
  });
  it('increases the cat fitness by 4', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.fitness = 8;
    cat.walk();
    expect(cat.fitness).toEqual(10);
  });
});

describe('feed method', () => {
  it('decreases the cat hunger by 3', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 5;
    cat.feed();
    expect(cat.hunger).toEqual(2);
  });
  it('decreases the cat hunger by 3', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 2;
    cat.feed();
    expect(cat.hunger).toEqual(0);
  });
});

});