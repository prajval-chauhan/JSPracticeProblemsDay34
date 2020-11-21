//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//Program 1: To roll a dice and then store its values into the map subject to some constraints
let rollResult = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
function storeInMap(number, rollResult)
{
    let valuestr = rollResult.get(number);
    rollResult.set(number, valuestr + 1);
    return (valuestr + 1 == 10 ? true : false);
}
do
{
    let diceRoll = Math.floor(Math.random()*6 + 1);
    var check = storeInMap(diceRoll, rollResult);
}while(check == false);
for(let [key, value] of rollResult)
{
    console.log(key +' count = '+value);
}