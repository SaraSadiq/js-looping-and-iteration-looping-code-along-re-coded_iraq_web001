const name= ["Lisa", "Kaitlin", "Jan"];
const event=["birthday"];
function writeCards(name,event){
for (let i=0;i<name.length;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return name,event;
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
