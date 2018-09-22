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

describe('growUp function', () => {
  it('growUp() increases the cat age by 1', () => {
    const cat = new Cat('Mr Whiskerson');
    cat.growUp();
    expect(cat.age).toEqual(1);
  });
});