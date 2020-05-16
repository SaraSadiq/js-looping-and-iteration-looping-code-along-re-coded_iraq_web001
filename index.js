// Code your solutions in this file
const name=["Ada", "Brendan", "Ali"]
const events=["birthday"]
function writeCards(name){
for (let i=0;i<name.length;i++){
  console.log("Thank you,${name[i]}, for the wonderful ${events} gift!");
}
return name;
}
