
exports.min = function min (array) {
    if(Array.isArray(array)&&array.length>0){
    return array.reduce((minItem, current)=>Math.min(minItem,current));
  }else return 0
}

exports.max = function max (array) {
  if (Array.isArray(array)&&array.length>0){
    return array.reduce((maxItem, current)=>Math.max(maxItem,current));
  }else{
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array)&&array.length>0){
    return array.reduce((sum, current)=>sum+current)/array.length;
  }else{
    return 0;
  }
}
