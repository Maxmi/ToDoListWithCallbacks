var expect = require('chai').expect;
var {readFileCallback} = require('../commands/helpers');

describe('readFileCallback', function() {
  const callback = () => {};
  it('should throw if error', function() {
    expect(function(){
      readFileCallback(callback, 'test')('error', null);
    }).to.throw();
  });

  it('should return single value if file is empty', function() {
    expect(readFileCallback(callback, 'test')(null, '')).to.eql([{ id: 0 }]);
  });
  
  it('should return parsed data when data is passed', function() {
    const testData = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    expect(readFileCallback(callback, 'test')(null, JSON.stringify(testData))).to.eql(testData);
  });
  
});
