//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program 1: To find second max and second min entry in array without using sort function
var arr = [1,2,3,4,5,6,7,8,9,10];//[Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),
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