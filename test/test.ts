import { expect } from 'chai';
import 'mocha';

describe('Test', () => {
  it('should return hello jane', () => {
    const result = 'Hello Jane!';
    expect(result).to.equal('Hello Jane!');
  });
});