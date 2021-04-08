function findItemsOver20(itemList) {
    var items = [];
    for (var i = 0; i < itemList.length; i++) {
      var fruits = itemList[i].qty
     // console.log(fruits)
      if (fruits > 20) {
        items.push(itemList[i])
      }
    }
    console.log(items)
    return items
}
  