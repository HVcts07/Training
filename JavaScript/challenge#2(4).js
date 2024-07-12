
let bills=[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let totals=[];

const calcTip= function(billValue){
    return billValue>=50 && billValue<=300 ? 0.15*billValue:
     0.20*billValue;
  }

for (let i =0; i<bills.length;i++){
    const tip=calcTip(bills[i]);
    tips.push(tip);
    totals.push(tips[i]+bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage= function(arr){
    let sum=0;
    for(let i =0; i<arr.length;i++){
        sum=sum+arr[i];
    }
    let avg= sum/arr.length;
    console.log(avg);
}

calcAverage(totals);
