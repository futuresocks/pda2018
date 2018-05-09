require('minitest/autorun')
require('minitest/rg')

require_relative('../practical_task')

class Practical_Test < MiniTest::Test

  def test_func1()
    assert_equal(true, func1(1))
    assert_equal(false, func1(3))
  end

  def test_max()
    assert_equal(50, max(50,45))
    assert_equal(100, max(99,100))
  end

  def test_looper()
    assert_equal(10, looper)
  end

  def test_altogether()
    assert_equal("Test Passed", altogether)
  end

end
