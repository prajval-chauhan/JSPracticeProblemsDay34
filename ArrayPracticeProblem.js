//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program 1: To find second max and second min entry in array without using sort function
var arr = [1000,220,30,465,5,46,74,8365,90147,1010];//[Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),
    // Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),
    // Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
    var secondMin = 0;
    var secondMax = 0;
for(i=0; i<arr.length; i++){
    var countMin = 0;
    var countMax = 0;
    for(j=0; j<arr.length; j++){
        if(arr[i] < arr[j]){
            countMin += 1;
        }
    }
    if(countMin == (arr.length - 2)){
        secondMin = arr[i]; 
    }
    if(countMin == 1){
        secondMax = arr[i];
    }
}
console.log('Second Min= '+secondMin + '\tSecondMax= '+secondMax);
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program 2: Sorting the array to find the second largest and second minimum number 
var arr = [1000,220,30,465,5,46,74,8365,90147,1010];
arr.sort(function(a,b){return a-b});
console.log('Second Min= '+arr[1] + '\tSecondMax= '+arr[8]);
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Finding the prime factors of a number and storing the factors into an array
var primeFactors = [];
function findPrimeFactors(number){
    let tempNum = number;
    let arrayIndex = 0;
    for(i=2; i <= (tempNum/2); i++)
    {
        let count = 0;
        if(tempNum % i == 0)//condition to check if the number is a facotr of given number or not
        {
            for (j = 1; j <= Math.sqrt(i); j++) //for loop to check if the factor is prime number of not
            {
                rem = i % j;
                if (i % j == 0) 
                {
                  count++;
                }
            }
            if(count <= 1)
            {
                primeFactors[arrayIndex] = i;
                arrayIndex++; 
            }
        }
    }
    console.log('Prime Factors of the '+number+'are: ');
    for(i=0; i <= primeFactors.length; i++)
    {
        console.log(primeFactors[i]);
    }
}
const prompt = require('prompt-sync')();
var number = prompt("Enter the number to find its prime factors: ");
findPrimeFactors(number);
