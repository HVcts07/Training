const Mark={
    fullname:"Mark Zukerberg",
    mass:80,
    height:2,

    calcBMI: function(){
        this.bmi=this.mass/(this.height**2);
        return(this.bmi);
    }
}

const John={
    fullname:"John Wick",
    mass:70,
    height:1.8,

    calcBMI: function(){
        this.bmi=this.mass/(this.height**2);
        return(this.bmi);
    }
}

console.log(Mark.calcBMI()) // once this function runs, it stores the value in "bmi"
console.log(Mark.bmi);   // when we call mark.bmi--> calculated bmi is shown

console.log(John.calcBMI());

if(Mark.bmi>John.bmi){
    console.log(`${Mark.fullname}'s BMI (${Mark.bmi}) is higher than ${John.fullname}'s BMI (${John.bmi})`);
}
else{
    console.log(`${John.fullname}'s BMI (${John.bmi}) is higher than $(Mark.fullname)'s BMI (${Mark.bmi})`);
}
