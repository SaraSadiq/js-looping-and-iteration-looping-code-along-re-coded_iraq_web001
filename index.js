const name= ["Lisa", "Kaitlin", "Jan"];
const events=["birthday"];
function writeCards(name,events){
for (let i=0;i<name.length;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
}
return  name, events;
}
writeCards(name)


let countup = 10;
function countDown(countup){
while (countup >= 0 ) {
  console.log(countup--);
}
return countup;
}
countDown(countup)
