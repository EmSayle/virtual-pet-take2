const Cat = require('../src/cat');

describe('Cat', () => {
  it('creates an instance of Cat', () => {
    expect(new Cat()).toBeInstanceOf(Object);
  });
});