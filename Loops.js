// 1 Найти сумму четных чисел и диапазоне от 1 до 99
let result = 0;
for(let i = 1; i<100; i++){  result += i%2 ? 0 : i; }
console.log(result);

// 2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let number = 13;
let isPrime = true;
for(let i = 2; i<number; i++){
  if(number%i===0){
    isPrime = !isPrime;
    break;
  }
}
console.log(isPrime);


/* 3 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного 
    подбора и метод бинарного поиска) */
let number = 37;
let result = 0;
for(let i=1;i*i<=number;i++) result = i;
console.log(result);

/* 4 Вычислить факториал числа n. n! = 1*2*…*n-1*n;! */
let number = 5;
let result = 1;
for(let i = 1;i<=number;i++) result = i*result;
console.log(result);


/* 5.	Посчитать сумму цифр заданного числа */
let input  = 14;
let result = 0;
input = '' + input;
for(let i=0;i<input.length;i++){
  result += Number(input.charAt(i));  
}
console.log(result);

/* 6.	Вывести число, которое является зеркальным отображением 
последовательности цифр заданного числа, например, задано число 123, вывести 321. */
let input  = 145;
let result = '';

input = '' + input;
for(let i=input.length;i>=0;i--){
  result += input.charAt(i);  
}
console.log(result);







