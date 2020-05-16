const name= ["Lisa", "Kaitlin", "Jan"];
const event=["birthday"];
function writeCards(name){
for (let i=0;i<name.length;i++){
  console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return name;
}
writeCards(name)
