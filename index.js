const rolls = [2, 6, 8, 10, 12, 20]

let rollType = 0

let response = 0

function setRollType(value){
    rollType = value
    console.log(`A: ${rollType} B: ${value}`)
}

function roll(animationStep, timeDelay){
    response = 0;

    response += Math.round(Math.random() * (rolls[rollType]-1)) + 1
    const number = document.getElementById('rolled-number');
    const diceNumbers = document.getElementById('dice-numbers');

    if (diceNumbers.value != 1){
        for (let actual = 1; actual < diceNumbers.value; actual++){
            response += Math.round(Math.random() * (rolls[rollType]-1)) + 1
        }
        console.log(response)
    }

    number.innerHTML = response
    if (animationStep < 34){ 
        number.classList.remove("verde")
        number.classList.remove("vermelho")
        setTimeout(() => roll(animationStep + 1, timeDelay*1.1), timeDelay) 
    } else {
        document.getElementById('result-text-fail').innerHTML = ""
        document.getElementById('result-text-sucess').innerHTML = "" 


        if (response == rolls[rollType] * diceNumbers.value) {
            number.classList.add("verde")
            document.getElementById('result-text-sucess').innerHTML = "Cagado Filha da Puta"
            document.getElementById('audio-sucess').play();
        } else if (response == 1 * diceNumbers.value){
            number.classList.add("vermelho")
            document.getElementById('result-text-fail').innerHTML = "Se fudeu" 
            document.getElementById('audio-fail').play();
        } 
        else {
            number.classList.remove("verde")
            number.classList.remove("vermelho")
            document.getElementById('audio-sucess').remove();
            document.getElementById('audio-fail').remove();
        }
    }
}

