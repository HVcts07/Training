const massMark=80;
const heightMark=1.8;

const massJohn=100;
const heightJohn=2;


BMIJohn= massJohn/(heightJohn**2);
BMIMark= massMark/(heightMark**2);

console.log(BMIJohn,BMIMark)

if ( BMIMark>BMIJohn){
    console.log("Mark's BMI is higher than John's!")
}
else{
    console.log("John's BMI is higher than Mark's!")
}