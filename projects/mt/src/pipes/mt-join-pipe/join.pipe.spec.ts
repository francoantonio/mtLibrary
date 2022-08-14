/* tslint:disable:no-unused-variable */

import { JoinPipe } from './join.pipe';

describe('Pipe: Joine', () => {
  it('create an instance', () => {
    let pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return a string ""', () => {
      let pipe = new JoinPipe();
      expect(pipe.transform([])).toBe('');
    });

    it('should return a string "1,2,3,4,5"', () => {
      let pipe = new JoinPipe();
      expect(pipe.transform([1, 2, 3, 4, 5])).toBe('1,2,3,4,5');
    });
    it('should return a string "1|2|3|4|5"', () => {
      let pipe = new JoinPipe();
      expect(pipe.transform([1, 2, 3, 4, 5], '|')).toBe('1|2|3|4|5');
    });
  });
});
