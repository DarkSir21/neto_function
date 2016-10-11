// Реализация через рекурсию
function sumTo(n) {
	if(n === 1){
  	return n;
  } else {
  	return n + sumTo(n - 1);
  }
}

console.log( sumTo(7) );

// Реализация через цикл
function sumTo2(n) {
	var result = n;
	
  for(var i = 0; i < n; i++){
  	result += i;
  }
  
  return result;
}

console.log( sumTo2(7) );