function decimalToBinary(num) {
  //Write you code here
  let str = "";
  while(num){
    let remainder = num%2;
    str = remainder + str;
    num = Math.floor(num/2);    
  }
  return str;
}

window.decimalToBinary = decimalToBinary;
