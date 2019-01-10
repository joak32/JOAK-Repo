function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function findMax() {
    var max = 0;
    for (var arrayPosition = 0; arrayPosition < (maxMoney.length - 1); arrayPosition++) {

        var currentElement = maxMoney[arrayPosition];
        var nextElement = maxMoney[arrayPosition + 1];

        if (currentElement > nextElement && currentElement > max) {
            max = currentElement;
        }
        else if (currentElement < nextElement && nextElement > max) {
            max = nextElement;
        }
    }
}


function validateItems() {
    var startingNum = Number(document.forms["wallet"]["startingBet"].value);
    var gameMoney=startingNum;
    var rollArray = new Array();
    var moneyArray = new Array();
    var rolls = 0;

// Will check if startingNum is greater than 0
    if (gameMoney <= 0) {
        alert("Insufficient funds; starting bet must be greater than 0.00");
        document.forms["wallet"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["wallet"]["num1"].focus();
        return false;
    }
    else {
        while (gameMoney > 0) {
            var firstDice = Math.floor(Math.random() * 6) + 1;
            var secondDice = Math.floor(Math.random() * 6) + 1;
            var diceTotal = firstDice + secondDice;

            if (diceTotal == 7) {
                gameMoney += 4;
            }
            else {
                gameMoney -= 1;
            }
            rolls++;
            rollArray.push(rolls);
            moneyArray.push(gameMoney);
        }

        var countRolls = rollArray.length;
        var maxMoney = findMax(moneyArray);
        var rollsMaxIndex = rollArray.indexOf(maxMoney);
        var rollAtMax = rollArray[rollsMaxIndex];
    }

//Game Over
    document.getElementById("results").style.display = "inline"; //consider inline
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("initialBet").innerText = ("$" + startingNum); //Number(num1) + Number(num2);
    document.getElementById("totalRolls").innerText = countRolls;
    document.getElementById("highestAmount").innerText = maxMoney;
    document.getElementById("rollAtHigh").innerText = rollAtMax;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}