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

describe('checkUp method', () => {
  it('checks the cat fitness status', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.fitness = 2;
    expect(cat.checkUp()).toEqual('I need a walk');
  });
  it('checks the cat hunger status', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 5;
    expect(cat.checkUp()).toEqual('I am hungry');
  });
  it('checks both hunger and fitness together', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 6;
    cat.fitness = 3;
    expect(cat.checkUp()).toEqual('I am hungry and I need a walk');
  });
  it('checks both hunger and fitness together', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 4;
    cat.fitness = 8;
    expect(cat.checkUp()).toEqual('I am puuurrrfect');
  });
});

describe('isAlive', () => {
  it('returns a boolean whether the pet is still alive', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 10;
    cat.fitness = 8;
    cat.age = 10;
    expect(cat.isAlive).toEqual(false);
  });
  it('returns a boolean whether the pet is still alive', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.hunger = 4;
    cat.fitness = 8;
    cat.age = 10;
    expect(cat.isAlive).toEqual(true);
  });
});

});
