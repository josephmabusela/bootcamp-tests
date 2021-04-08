function yearsAgo(year) {
  
    const currentYear = new Date();
    var yearsDiff = currentYear.getFullYear() - year
    return yearsDiff
  }
  
yearsAgo(2020, 1978)