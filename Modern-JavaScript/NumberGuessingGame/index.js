//taking input
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const showResult = document.getElementById("result")

//generating random no.
const randomNum = Math.floor(Math.random() * 10) + 1;

//defining no of turn
let trial = 3


btn.addEventListener("click" , function(e){
    e.preventDefault()
    const inputValue = input.value
        if(inputValue == randomNum){
            showResult.innerText = "You Guessed Right"
            btn.innerText = "Wanna Play Again?"
            btn.addEventListener("click" , function(e){
                location.reload();
            }) 
        }else{
            trial-- ;
            showResult.innerText = "Not Correct! you have " + trial + " trials left"
            if(trial==0){
                showResult.innerText = "You Loose"
                input.disabled = true
                btn.innerText = "Wanna Play Again?"
                btn.addEventListener("click" , function(e){
                    location.reload();
                })
            }  
        }
})