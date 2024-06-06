const CalculatorUrl = {
    selector: 'https://testsheepnz.github.io/BasicCalculator.html'
}

const urlVerifcation = {
    selector: "//p[contains(.,'Basic Calculator)]"
}

const CalculateButton = {
    selector: '[id="calculateButton"]'
}

const firstNumberField = {
    selector: '[id="number1Field"]'
}

const secondNumberField = {
    selector: '[id="number2Field"]'
}

const operationDropdown = {
    selector: '[id="selectOperationDropdown"]'
}

const buildDropdown = {
    selector: '[id="selectBuild"]'
}

const answerField = {
    selector: '[id="numberAnswerField"]'
}

const integerCheckbox = {
    selector: "//input[@id='integerSelect']"
}

const errorMsgField = {
    selector: "[id='errorMsgField']"
}

export const homeElements = {
    CalculatorUrl,
    urlVerifcation,
    CalculateButton,
    firstNumberField,
    secondNumberField,
    operationDropdown,
    buildDropdown,
    answerField,
    integerCheckbox,
    errorMsgField

}