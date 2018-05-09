var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    running_total = element(by.css('#running_total'));
    add = element(by.css('#operator_add'));
    subtract = element(by.css('#operator_subtract'));
    divide = element(by.css('#operator_divide'));
    multiply = element(by.css('#operator_multiply'));
    equals = element(by.css('#operator_equals'));
    one = element(by.css('#number1'));
    two = element(by.css('#number2'));
    three = element(by.css('#number3'));
    four = element(by.css('#number4'));
    five = element(by.css('#number5'));    
    six = element(by.css('#number6'));    
    seven = element(by.css('#number7'));    
    eight = element(by.css('#number8'));
    nine = element(by.css('#number9'));
    zero = element(by.css('#number0'));
  });

  // write integration tests here in the form of "it should do something..."
  // Do the number buttons work to update the display of the running total?
 it('should have working number buttons', function(){
  one.click();
  nine.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('19');
 })

 // Do each of the arithmetical operations work to update the display with the result of the operation?

 it('can add', function(){
  one.click();
  add.click();
  one.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 })

 it('can subtract', function(){
  one.click();
  subtract.click();
  one.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
 })

 it('can multiply', function(){
  two.click();
  multiply.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
 })

 it('can divide', function(){
  four.click();
  divide.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 })


 // Can we chain multiple operations together?

 it('can chain functions', function(){
  four.click();
  divide.click();
  two.click();
  add.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
  three.click();
  multiply.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5');
  five.click();
  subtract.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('25');
  five.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('20');
 })

 // Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)

it('can handle negatives', function(){
  six.click();
  subtract.click();
  seven.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-1');
})

it('can handle decimals', function(){
  two.click();
  divide.click();
  four.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
})

it('can handle large numbers', function(){
  one.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  multiply.click();
  one.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  zero.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1000000000000000000');
})


 // What does the code do in exceptional circumstances?
 // If you divide by zero, what is the effect?
 // Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

it('can handle division by zero', function(){
  one.click();
  divide.click();
  zero.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
})

 

});