/*............. 1 ............. */

let out1="";
for(let i=1;i<=10;i++){
out1+=i +" ";
}
console.log(out1);

/*............ 2 ............ */
let i=1;
let out2="";
while(i<=10)
{
   out2+=i+" ";
    i++;
}
console.log(out2);

/*.............. 3 ............ */

let array3=[1,2,3,4,5];
let out3="";
for(let i=0;i<array3.length;i++)
{
    out3+=array3[i]+" ";
}
console.log(out3);

/*............. 4 ............. */
let out4="";
for(let i=0;i<=10;i++)
{
    if((i%2)==0)
    {
        out4+=i+" ";
    }
}
console.log(out4);

/*............. 5 ............. */
let sum5=0;
for(let i=1;i<=10;i++)
{
   sum5+=i;
}
console.log(sum5);

/*............. 6 ............. */

let max6=1;
let array6=[1,2,3,4,5];
for(let i=0;i<array6.length;i++)
{
    if(array6[i]>=max6)
    {
        max6=array6[i];
    }
}
console.log(max6);

/*............. 7 ............. */

let min7=1;
let array7=[1,2,3,4,5];
for(let i=0;i<array7.length;i++)
{
    if(array7[i]<min7)
    {
        min7=array7[i];
    }
}
console.log(min7);

/*............. 8 ............. */
let avg8=0;
let sum8=0;
let array8=[1,2,3,4,5];
for(let i=0;i<array8.length;i++)
{
  sum8+=array8[i];
}
avg8=sum8/array8.length;
console.log(avg8);

/*............. 9 ............. */

let inp8=5;
let out8=1;
for(let i=inp8;i>=1.;i--){
    out8*=i
}
console.log(out8);

/*............. 10 ............. */
let a=0, b=1, c=0;
let inp10=10;
let out10="";

while(true){
    out10+=a+ " ";
    c=a+b;
    a=b;
    b=c;
    if(a>=10)
    break;
   
}
console.log(out10);

/*............. 11 ............. */
let out11="";
for(let i = 2; i <= 20; i++){
    let flag = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        out11+=i+" ";
    }
   
}

console.log(out11);

/*............. 12 ............. */
let inp12=5;
let out12="";
let array12=[1,2,3,4,5,6,7,8,9,10];
for(let i = 0;i<array12.length;i++){
    out12+="5*"+array12[i]+"="+array12[i]*inp12+", ";
}
console.log(out12);

/*............. 13 ............. */
let inp13=[[1,2,3], [4,5,6], [7,8,9]];
let out13="";
for(let i = 0; i < inp13.length; i++){
    for(let j = 0; j < inp13[i].length; j++){
       out13+=inp13[i][j]+ " ";
    }
  }
 console.log(out13);

 /*............. 14 ............. */

 let array14=[1,2,3,4,5];
 let out14="";
 for(let i=array14.length-1;i>=0;i--){
    out14+=array14[i]+" ";
 }
 console.log(out14);

 /*............. 15 ............. */
 let array15=[[1,2,3,4,5],2,3];
 let out15="";
 for(let i = 0; i < array15.length; i++){
    for(let j = 0; j < array15[i].length; j++){
       if(i==0 && (j>=2 &&j<=4))
       out15+=array15[i][j]+" ";
    }
  }
console.log(out15);

 /*............. 16 ............. */
 let array16=[[1,2,3,4,5],2];
 let out16="";
 for(let i = 0; i < array16.length; i++){
    for(let j = 0; j < array16[i].length;j+=2){
out16+=array16[i][j]+" ";
    }
}
console.log(out16);

 /*............. 17 ............. */
 let array17=[[1,2,3,4,5],4];
 let flag;
 for(let i = 0; i < array17.length; i++){
    for(let j = 0; j < array17[i].length; j++){
if(!isNaN(array17[i][j])){
flag=true;
continue;
}
else{
    flag=false;
    break;
}
    }
}
console.log(flag);

 /*............. 18 ............. */

 let arr = [[1,2,1,3,2,1],1];
  let num = 1;
  let occurrences = 0;
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === num){
        occurrences++;
      }
    }
  }
  
console.log(occurrences);  
  