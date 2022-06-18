let arraySize = 40;
let min = 3;
let max = 250;

let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray(){
    for (var i = 0; i < arraySize; ++i){
        array[i] = generateValue(min, max);
    }

    if (array[i] == array[i - 1]){
        array[i] = generateValue(min, max);
    }
}


function generateValue(){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(array);
bubbleSort();

function bubbleSort(){
    sortedArray = Array.from(array);


    for (var i = 0; i < sortedArray.length - 1; ++i){
        for (var j = 0; j < sortedArray.length - 1; ++j){
            if (sortedArray[j] > sortedArray[j + 1]){
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp; 
            }
        }
    }

}

console.log(sortedArray);