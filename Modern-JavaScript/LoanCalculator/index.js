const loanAmount = document.getElementById("loan-amount")
const interestPercentage = document.getElementById("interest-percentage")
const totalYears = document.getElementById("payback-years")
const calculateBtn = document.getElementById("calculate")
const monthWisePayableAmount = document.getElementById("monthly-pay-ammount")
const totalAmount = document.getElementById("total-payment")
const interest = document.getElementById("Total Interest")

const date = new Date()
// console.log(date.getFullYear())

calculateBtn.addEventListener("click" , function(e){
    e.preventDefault()
    const loanAmountValue = parseFloat(loanAmount.value);
    const interestPercentageValue = parseFloat(interestPercentage.value)
    const totalYearsValue = parseFloat(totalYears.value)

    const calculateInterest = loanAmountValue * (interestPercentageValue/100)
    console.log(calculateInterest)
    const totalPayableAmount = calculateInterest + loanAmountValue
    console.log(totalPayableAmount)
    const monthlyPay = totalPayableAmount / (totalYearsValue*12) 
    console.log(monthlyPay)
    monthWisePayableAmount.innerText = monthlyPay
    totalAmount.innerText = totalPayableAmount
    interest.innerText = calculateInterest

    loanAmount.value = ""
    interestPercentage.value = ""
    totalYears.value = ""

})