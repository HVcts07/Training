
const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

//test1
const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas= calcAverage(65,54,49);

const scoreDolphins1=calcAverage(84,54,41);
const scoreKoalas1= calcAverage(23,34,27);

function checkWinner(avgDolphins,avgKoalas){
   if(avgDolphins>=2*avgKoalas){
    console.log(`Dolphins win! (${avgDolphins} VS ${avgKoalas})`);
   }
   else if(avgKoalas>=2*avgDolphins){
    console.log(`Koalas win! (${avgKoalas} VS ${avgDolphins})`);
   }
   else{
    console.log("No Team Wins!")
   }

}

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins1,scoreKoalas1);
