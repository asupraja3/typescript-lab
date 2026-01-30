
const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

function getRandomNumber(arr:number[]):number{

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log(getRandomNumber(numbers));
//Output: Random number from the array