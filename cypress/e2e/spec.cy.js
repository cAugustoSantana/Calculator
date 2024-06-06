import { loadLandPage,calculate, dividebyzero,expectedErrorCalculate} from "./Actions/homepageAction";
import { homeElements } from "./elements/home-Elements";

const dataJson =require('..//fixtures/data.json');

describe('Calculator test cases Protoype',() => {
  beforeEach(() =>{
    loadLandPage(0);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 1',() => {
  beforeEach(() =>{
    loadLandPage(1);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 2',() => {
  beforeEach(() =>{
    loadLandPage(2);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 3',() => {
  beforeEach(() =>{
    loadLandPage(3);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 4',() => {
  beforeEach(() =>{
    loadLandPage(4);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 5',() => {
  beforeEach(() =>{
    loadLandPage(5);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 6',() => {
  beforeEach(() =>{
    loadLandPage(6);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})


describe('Calculator test cases Build 7',() => {
  beforeEach(() =>{
    loadLandPage(7);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 8',() => {
  beforeEach(() =>{
    loadLandPage(8);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})

describe('Calculator test cases Build 9',() => {
  beforeEach(() =>{
    loadLandPage(9);
  })

  it('simple addition',() => {
    calculate(dataJson.addition[0].number1,dataJson.addition[0].number2,dataJson.addition[0].operation,dataJson.addition[0].expectedResult)
  })
  
  it('adition with zero',() => {
    calculate(dataJson.addition[1].number1,dataJson.addition[1].number2,dataJson.addition[1].operation,dataJson.addition[1].expectedResult)
  })
  
  it('adition with negative number',() => {
    calculate(dataJson.addition[2].number1,dataJson.addition[2].number2,dataJson.addition[2].operation,dataJson.addition[2].expectedResult)
  })
  
  it('addition of Large Numbers',() => {
    calculate(dataJson.addition[3].number1,dataJson.addition[3].number2,dataJson.addition[3].operation,dataJson.addition[3].expectedResult)
  })
  
  it('Simple Subtraction',() => {
    calculate(dataJson.subtraction[0].number1,dataJson.subtraction[0].number2,dataJson.subtraction[0].operation,dataJson.subtraction[0].expectedResult)

  })
  
  
  it('subtraction Resulting in Zero',() => {
    calculate(dataJson.subtraction[1].number1,dataJson.subtraction[1].number2,dataJson.subtraction[1].operation,dataJson.subtraction[1].expectedResult)

  })
  
  
  it('subtraction  with Negative Result',() => {
    calculate(dataJson.subtraction[2].number1,dataJson.subtraction[2].number2,dataJson.subtraction[2].operation,dataJson.subtraction[2].expectedResult)

  })
  
  it('subtraction with Negative Numbers',() => {
    calculate(dataJson.subtraction[3].number1,dataJson.subtraction[3].number2,dataJson.subtraction[3].operation,dataJson.subtraction[3].expectedResult)

  })
  
  it('simple Multiplication',() => {
    calculate(dataJson.multiplication[0].number1,dataJson.multiplication[0].number2,dataJson.multiplication[0].operation,dataJson.multiplication[0].expectedResult)

  })
  
  it('multiplication with Zero',() => {
    calculate(dataJson.multiplication[1].number1,dataJson.multiplication[1].number2,dataJson.multiplication[1].operation,dataJson.multiplication[1].expectedResult)

  })
  
  it('multiplication with Large Numbers',() => {
    calculate(dataJson.multiplication[2].number1,dataJson.multiplication[2].number2,dataJson.multiplication[2].operation,dataJson.multiplication[2].expectedResult)

  })
  
  it(' simple Division',() => {
    calculate(dataJson.division[0].number1,dataJson.division[0].number2,dataJson.division[0].operation,dataJson.division[0].expectedResult)

  })
  
  it(' division by one',() => {
    calculate(dataJson.division[1].number1,dataJson.division[1].number2,dataJson.division[1].operation,dataJson.division[1].expectedResult)
  })
  
  it(' division Resulting in Fraction',() => {
    calculate(dataJson.division[2].number1,dataJson.division[2].number2,dataJson.division[2].operation,dataJson.division[2].expectedResult)
  })
  
  it(' division by zero',() => {
    calculate(dataJson.division[3].number1,dataJson.division[3].number2,dataJson.division[3].operation,dataJson.division[3].expectedResult)
  })
  
  it(' does NOT allow characters as input  ',() => {
    calculate(dataJson.division[4].number1,dataJson.division[4].number2,dataJson.division[4].operation,dataJson.division[4].expectedResult)
  })

})
