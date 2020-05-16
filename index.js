
function writeCards(name,events){
  for(let i=0;i<name.length;i++){
    console.log(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
  }
  return name,events;
}
writeCards(name,"surprise")
let countup = 10;
function countDown(countup){
while (countup >= 0 ) {
  console.log(countup--);
}
return countup;
}
countDown(countup)
