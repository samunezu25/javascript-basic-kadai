for(let num = 1; num <= 30; num++) {

  //if文を用いてnumが３の倍数の時にコメントを出力させる
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
  } else if (num % 3 === 0) {
    console.log('3の倍数です');
  } else if (num % 5 === 0) {
    console.log('5の倍数です');
  } else {
    console.log(num);
  }
}