let data=[
    "react",
    { tags: ["js", "frontend", "react"] },
    { tags: ["frontend", "css"] },
    "css",
    { tags: ["react", "js"] }
  ];
  let narr=[];
  for(let i=0;i<data.length;i++){
    if(typeof data[i]==="string"){
        // console.log(data[i]);
        narr.push(data[i]);
    }else{
        let t=[...data[i].tags];
        for(let j=0;j<t.length;j++){
            narr.push(t[j]);
        }     
    }
  }  
//   console.log(narr);
  let nobj={};
  for(let i=0;i<narr.length;i++){
    if(nobj[narr[i]]) nobj[narr[i]]++;
    else nobj[narr[i]]=1;
  }
//   console.log(nobj);
  let m='',c=-Infinity;
  for(let key in nobj){
    if(nobj[key]>c){
        c=nobj[key];
        m=key;
    }
  }
  console.log(m);
