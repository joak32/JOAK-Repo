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
    var moneyArray = new Array();
    var rolls = 0;
    var maxMoney = 0;
    var maxRoll = 0;

    // Will check if startingNum is greater than 0
    if (gameMoney <= 0) {
        alert("Insufficient funds; starting bet must be greater than 0.00");
        document.forms["wallet"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["wallet"]["num1"].focus();
        return false;
    }
    else {
        while (gameMoney > 0) {
            var firstDice = rollDice();
            var secondDice = rollDice();
            var diceTotal = firstDice + secondDice;
            rolls++;

            if (diceTotal == 7) {
                gameMoney += 4;
                if (gameMoney > maxMoney) {
                    maxMoney = gameMoney;
                    maxRoll = rolls;
                }
            }
            else {
                gameMoney -= 1;
            }
            //rollArray.push(rolls);
            moneyArray.push(gameMoney);
        }

        //var countRolls = rollArray.length;
        //var maxMoney = findMax(moneyArray);
        //var rollsMaxIndex = rollArray.indexOf(maxMoney);
       // var rollAtMax = rollArray[rollsMaxIndex];
    }

    //Game Over
    
    document.getElementById("results").style.display = "inline"; //consider inline
    document.getElementById("resultHead").style.display = "inline";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("initialBet").innerText = ("$" + startingNum + ".00"); //Number(num1) + Number(num2);
    document.getElementById("totalRolls").innerText = rolls;
    document.getElementById("highestAmount").innerText = ("$" + maxMoney + ".00");
    document.getElementById("rollAtHigh").innerText = maxRoll;
    return false;
}