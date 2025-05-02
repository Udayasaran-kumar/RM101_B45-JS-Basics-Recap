let array=[
    { name: "Aarav", marks: [88, 76, 92] },
    { name: "Diya", marks: [99, 91, 85] },
    { name: "Kabir", marks: [72, 89, 68] }
  ];
  let narr=[];
  let marr=[];

  for(let i=0;i<array.length;i++){
     let n= array[i].marks.reduce((acc,j)=>acc+j);
    // console.log(array[i].marks);
    narr.push(array[i].name);
    marr.push(n)
  }
  
//   console.log(narr,marr);
  for(let i=0;i<marr.length-1;i++){
    if(marr[i]<marr[i+1]){
        let t1=marr[i];
        marr[i]=marr[i+1];
        marr[i+1]=t1;
        let t2=narr[i];
        narr[i]=narr[i+1];
        narr[i+1]=t2;
    }
  }
  console.log(narr);