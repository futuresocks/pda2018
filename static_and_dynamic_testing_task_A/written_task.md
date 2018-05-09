### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Highlight any errors you can see without correcting them.

 
def func1 val        #  missing parenthesis around val
  if val = 1         #double equals
  return true
  else
  return false
  end
end
  
dif max a b        #"def" is mispelled. Also, missing parenthesis around a and b, requires a comma between a and b
  if a > b
      return a 
  else
  b               #this could be on one line?
  end 
end 
end   #extra end
  
def looper 
  for i in 1..10     #needs parenthesis
  puts i
  end
end                
                      #if the rest of this code is meant to be one method, it needs defining
failures = 0 
 
if looper == 10             #at the moment looper doesn't return anything, it just puts 1 to 10 out.
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
                                #needs an end

if func1(3) == false            #assuming the func1() method works, this is a certainty... but okay.
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
                                 
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"          #in keeping with what's going on here, "func1(3)" should be "max(100,1)"
  failrues = failures + 1         #failures is mispelled
end

  
if failures                   #no indication for what failures should be here. 'if failures' what?
  puts "Test Failed"
else
  puts "Test Passed"
end
                              #needs an end here

