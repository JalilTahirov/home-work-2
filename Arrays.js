//1.	Найти минимальный элемент массива
let input  = [5,4,20,3,5,8];
let min = +Infinity;

for(let i=input.length;i>=0;i--){
  min = input[i] < min?input[i]:min;  
}
console.log(min);

//2.	Найти максимальный элемент массива


let input  = [5,4,3,5,8];
let max = -Infinity;

for(let i=input.length;i>=0;i--){
  max = input[i]>max?input[i]:max;  
}
console.log(max);

//3.	Найти индекс минимального элемента массива
let input  = [5,4,20,3,1,8];
let min = +Infinity;
let minIndex = 0;

for(let i=input.length;i>=0;i--){
  if(input[i] < min){
    min=input[i]; 
    minIndex = i;
  } 
}
console.log(minIndex);

//4.	Найти индекс максимального элемента массива
let input  = [5,4,18,3,5,8];
let max = -Infinity;
let maxIndex = 0;

for(let i=input.length;i>=0;i--){
  if(input[i] > max){
    max=input[i]; 
    maxIndex = i; 
  }   
}
console.log(maxIndex);

//5.	Посчитать сумму элементов массива с нечетными индексами 

let input  = [5,4,18,3,5,8,2,2];
let sum = 0;

for(let i=1;i<input.length;i+=2){
   sum +=  input[i];
}
console.log(sum);

//6.	Сделать реверс массива (массив в обратном направлении) 
let input = [2,3,4,5,6,7];
let output= [];
for(let i = 0; i<input.length; i++){
	output[input.length - i] = input[i];
}
console.log(output);

//7.	Посчитать количество нечетных элементов массива
let input  = [5,4,18,2,5,8,2,2,3];
let sum = 0;

for(let i=0;i<input.length;i++){
   sum +=  input[i]%2!=0?input[i]:0;
}
console.log(sum);
//8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

let ar = [1,2,3,4,5,6];
  for(let i = 0; i<ar.length/2; i++){
  	let temp = ar[i];
    ar[i] = ar[ar.length/2 + i];
     ar[ar.length/2 + i] = temp;   
  }  
console.log(ar);

// 9.  Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

