let obj = {
    HR: { Q1: 50000, Q2: 70000 },
    Tech: { Q1: 150000, Q2: 130000 },
    Sales: { Q1: 80000, Q2: 85000 }
  };
  
  let arr = [];
  
  for (let dept in obj) {
    let budget = obj[dept];
    let total = 0;
  
    for (let quarter in budget) {
        if (budget[quarter] >= 150000) {
            arr.push(dept);
          }
    }
  
   
  }
  
  console.log(arr);