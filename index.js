const names= ["Lisa", "Kaitlin", "Jan"];
const events="surprise";
function writeCards(name,events){
for (let i=0;i<names.length;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
}
return  (names, events);
}
writeCards(names,events)

let countup = 10;
function countDown(countup){
while (countup >= 0 ) {
  console.log(countup--);
}
return countup;
}
countDown(countup)
