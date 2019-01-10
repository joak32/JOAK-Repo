var testArray = [1, 2, 3, 4, 5, 10];

function findMax(testArray){
    
    var max = 0;

    for (var arrayPosition = 0; arrayPosition < (testArray.length - 1); arrayPosition++){

        var currentElement = testArray[arrayPosition];
        var nextElement = testArray[arrayPosition + 1];

        console.log(currentElement);
        console.log(nextElement);

        if (currentElement > nextElement && currentElement > max) {
            max = currentElement;
        }
        else if (currentElement < nextElement && nextElement > max) {
            max = nextElement;
        }
    }
    console.log("Max is " + max);
}
