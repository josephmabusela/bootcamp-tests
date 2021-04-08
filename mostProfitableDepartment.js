function mostProfitableDepartment(salesData) {
    var salesMap = {};
    var highestSale;
    
    for (var i = 0; i < salesData.length; i++) {
      var sale = salesData[i];
      if (Object.keys(salesMap).includes(sale.department)) {
        salesMap[sale.department] += sale.sales;
      } else {
       salesMap[sale.department] = sale.sales; 
      }
      //highestSale += sale.sales
      //salesMap[sale.sales] = highestSale
    }
     var maxSale = 0;
     var highestDepartment;
    
   for (var dep of Object.keys(salesMap)) {
      if (salesMap[dep] >= maxSale) {
          maxSale = salesMap[dep];
          highestDepartment = dep
      }
    }
    return highestDepartment;
    
    //console.log(highestDepartment)
  }
  
  function mostProfitableDay(salesData) {
     var salesMap = {};
    var profitableDay;
    
    for (var i = 0; i < salesData.length; i++) {
      var sale = salesData[i];
      if (Object.keys(salesMap).includes(sale.day)) {
        salesMap[sale.day] += sale.sales;
      } else {
       salesMap[sale.day] = sale.sales; 
      }
      //highestSale += sale.sales
      //salesMap[sale.sales] = highestSale
    }
   
     var highDay = 0;
     var highestDay;
    
   for (var day of Object.keys(salesMap)) {
      if (salesMap[day] > highDay) {
          highDay = salesMap[day];
          highestDay = day
      }
    }
    return highestDay;
}