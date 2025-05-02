let str="Run 45 steps, then Jump 30 STEPS, finally run 25 Steps!";
str=str.split(",");
for(let i=0;i<str.length;i++){
    str[i]=str[i].trim().split(" ");    
}
let r=0,w=0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<str[i].length;j++){
        if(str[i][j][0]==0||str[i][j][0]==1||str[i][j][0]==2||str[i][j][0]==3||
            str[i][j][0]==4||str[i][j][0]==5||str[i][j][0]==6||str[i][j][0]==7||
            str[i][j][0]==8||str[i][j][0]==9){
                str[i][j]=+str[i][j];
            }            
    }
    for(let k=0;k<str[i].length;k++){
        if( typeof str[i][k]==="string") str[i][k]=str[i][k].toLowerCase();
    }
   if(str[i].includes("run")){
    for(let l=0;l<str[i].length;l++){
        if(typeof str[i][l]==="number") r+=str[i][l];
    }
   }
   else if(str[i].includes("jump")){
    for(let l=0;l<str[i].length;l++){
        if(typeof str[i][l]==="number") w+=str[i][l];
    }
   }
}
let obj={};
obj["run"]=r;
obj["jump"]=w;
console.log(obj);

