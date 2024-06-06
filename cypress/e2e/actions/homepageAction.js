import { homeElements } from "../elements/home-Elements";

export function loadLandPage(build){
    cy.visit(homeElements.CalculatorUrl.selector)
    cy.get(homeElements.buildDropdown.selector).select(build).should('have.value',build)

}


export function calculate(n1,n2,operation,n3){
    
    cy.get(homeElements.firstNumberField.selector).type(n1)
    cy.get(homeElements.secondNumberField.selector).type(n2)
    cy.get(homeElements.operationDropdown.selector).select(operation)
  
    cy.get(homeElements.CalculateButton.selector).click()
  
    cy.get(homeElements.answerField.selector).should('have.value', n3)
}

export function expectedErrorCalculate(n1,n2,operation,errorMsg){
   
    cy.get(homeElements.firstNumberField.selector).type(n1)
    cy.get(homeElements.secondNumberField.selector).type(n2)
    cy.get(homeElements.operationDropdown.selector).select(operation)
  
    cy.get(homeElements.CalculateButton.selector).click()
    errorMsg
    cy.get(homeElements.errorMsgField.selector).contains(errorMsg)
}


