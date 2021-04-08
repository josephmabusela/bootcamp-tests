function totalPhoneBill(str) {
    var bill = str.split(',');
    var total = 0;
    const callPrice = 2.75;
    const smsPrice = 0.65;
    
    
    for (var phoneActivity of bill) {
        phoneActivity = phoneActivity.trim()
      if (phoneActivity == 'call') {
        total += callPrice;
      } else if (phoneActivity == 'sms') {
        total += smsPrice
      }
    }
    return "R" + total.toFixed(2);
}