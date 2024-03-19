// Sort an array in ascending order
// Original array: 
// 0 23 14 12 9 

const inputArray = [0, 23, 14, 12, 9];

const sortArrayAscending = (arr) => {

    for (let indexOne = 0; indexOne < arr.length; indexOne++) {

        for (let indexTwo = 0; indexTwo < arr.length; indexTwo++) { 

            if(arr[indexTwo] > arr[indexTwo + 1]) {
                let temp = arr[indexTwo];
                arr[indexTwo] = arr[indexTwo + 1];
                arr[indexTwo + 1] = temp;
            }
            

        }


    }
    return arr;
};

console.log(sortArrayAscending(inputArray));