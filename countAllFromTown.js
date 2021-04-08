function countAllFromTown(reg, location) {
    var registrations = reg.split(",");
    var count = 0;
    
    for (var i = 0; i <  registrations.length; i ++) {
      var plate = registrations[i].trim();
      if (plate.startsWith(location)) {
        count++ ;
      }
    }
    return count;
}