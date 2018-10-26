import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(10)).toEqual(100)
  });
});
