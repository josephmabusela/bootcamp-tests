var transportFee = function(cost) {
    switch(cost) {
      case "morning":
        return 'R20'
        break;
      case "afternoon":
        return 'R10'
        break;
      case "nightshift":
        return 'free'
    }
}