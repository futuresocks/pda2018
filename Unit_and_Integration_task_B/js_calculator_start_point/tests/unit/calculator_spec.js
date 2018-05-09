var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.add(2);
    assert.equal(2, calculator.runningTotal)
  });

  it('can subtract', function(){
    calculator.subtract(2);
    assert.equal(-2, calculator.runningTotal)
  });

  it('can multiply', function(){
    calculator.previousTotal = 2;
    calculator.multiply(5);
    assert.equal(10, calculator.runningTotal)
  });

  it('can divide', function(){
    calculator.previousTotal = 9;
    calculator.divide(3);
    assert.equal(3, calculator.runningTotal);
  });

  it('can numberClick', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(9);
    calculator.numberClick(0);
    assert.equal(false, calculator.newTotal);
    assert.equal(1234567890, calculator.runningTotal);
  });

  it('can + operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(5, calculator.previousTotal);
  });

  it('can - operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(-1, calculator.previousTotal);
  });

  it('can * operatorClick', function(){
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(6, calculator.previousTotal);
  });

  it('can / operatorClick', function(){
    calculator.numberClick(3);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(1, calculator.previousTotal);
  });

  it('can clearClick', function(){
    calculator.previousTotal = 3;
    calculator.operatorClick("/");
    assert.equal("/", calculator.previousOperator);
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
    assert.equal(null, calculator.previousTotal);
  });

  it('can clearClick with previous operator', function(){
    calculator.operatorClick("/");
    calculator.numberClick('3');
    assert.equal(3, calculator.runningTotal);
    assert.equal("/", calculator.previousOperator);
    calculator.clearClick();
    assert.equal("/", calculator.previousOperator);
    assert.equal(0, calculator.runningTotal);
  });








});
