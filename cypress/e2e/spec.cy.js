import { loadLandPage,calculate, dividebyzero,expectedErrorCalculate} from "./Actions/homepageAction";
import { homeElements } from "./elements/home-Elements";

describe('Calculator test cases Protoype',() => {
  beforeEach(() =>{
    loadLandPage(0);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 1',() => {
  beforeEach(() =>{
    loadLandPage(1);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 2',() => {
  beforeEach(() =>{
    loadLandPage(2);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 3',() => {
  beforeEach(() =>{
    loadLandPage(3);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 4',() => {
  beforeEach(() =>{
    loadLandPage(4);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 5',() => {
  beforeEach(() =>{
    loadLandPage(5);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 6 ',() => {
  beforeEach(() =>{
    loadLandPage(6);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 7 ',() => {
  beforeEach(() =>{
    loadLandPage(7);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 8 ',() => {
  beforeEach(() =>{
    loadLandPage(8);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})

describe('Calculator test cases Build 9 ',() => {
  beforeEach(() =>{
    loadLandPage(9);
  })

  it('simple addition',() => {
    calculate(1,2,"Add",3)
  })
  
  it('adition with zero',() => {
    calculate(0,2,"Add",2)
  })
  
  it('adition with negative number',() => {
    calculate(-1,2,"Add",1)
  })
  
  it('addition of Large Numbers',() => {
    calculate(999999,1,"Add",1000000)
  })
  
  it('Simple Subtraction',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(9,4,"Subtract",5)
  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(3,8,"Subtract",-5)
  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(-3,-7,"Subtract",4)
  })
  
  it('simple Multiplication',() => {
    calculate(4,3,"Multiply",12)
  })
  
  it('multiplication with Zero',() => {
    calculate(0,10,"Multiply",0)
  })
  
  it('multiplication with Large Numbers',() => {
    calculate(1000 ,2000,"Multiply",2000000)
  })
  
  it(' simple Division',() => {
    calculate(8 ,2,"Divide",4)
  })
  
  it(' division by one',() => {
    calculate(9 ,1,"Divide",9)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(7 ,2,"Divide",3.5)
  })
  
  it(' division by zero',() => {
    expectedErrorCalculate(5 ,0,"Divide",'Divide by zero error!')
  })
  
  it(' does NOT allow characters as input  ',() => {
    expectedErrorCalculate('a' ,0,"Divide","Number 1 is not a number")
  })

})