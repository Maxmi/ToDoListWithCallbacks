const expect = require('chai').expect;
const list = require('../commands/list');

describe('listFile', function() {
  let testData = [{
    id: 1,
    desc: 'test',
    isComplete: false
  }];

  describe('render', function() {
    let expected = '\nID Description \n-- ----------- \n 1 test\n';
    it('should return list of tasks', function(){
      expect(list.render(testData)).to.equal(expected);
    })
  });

  describe('list', function() {
    let expected = 'You have 1 task(s).';
    it('should return number of tasks', function(){
      expect(list.list(testData)).to.equal(expected);
    })
  })
});
