const expect = require('chai').expect;
const del = require('../commands/delete');

describe('deleteTask', function() {
  let testData = [
    {id: 0},
    {
    id: 1,
    desc: 'play',
    isComplete: true
  },
  {
    id: 2,
    desc: 'test',
    isComplete: true
  }];

  it('should print success message after deleting task', function() {
    let expected = 'Deleted task 2: test';
    expect(del(testData, 2)).to.equal(expected);
  });

  it('should print info message if task id not found', function() {
  let expected = `Can not delete this task, id 34 not found`;
    expect(del(testData, 34)).to.equal(expected);
  });


}); //end of function
