function countAllPaarl(reg) {
    var registrations = reg.split(",");
    var count = 0;
    
    for (var plate of registrations) {
      plate = plate.trim()
      if (plate.startsWith("CJ")) {
      count ++
    }
  }
  return count
}