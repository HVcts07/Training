// 4) for each element in the array use call back to multiply by 2
// function forEachElement(arr, callback) 
// callback: will multiply each element with 2


let arr= [1,2,3,4,5];
let arr1=[];

function forEachElement(arr,callback){
    arr.forEach((ele) =>{
        //console.log(ele);
        //const e= sample(ele);
        arr1.push(sample(ele));
    });     
    console.log('Given Array:',arr)
    console.log('New Array:' ,arr1);
}

function sample(a){
    a=a*2;
    return a;
}

forEachElement(arr,sample)