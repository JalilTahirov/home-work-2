//*******************  Условные операторы

//// 1 Если а – четное посчитать а*б, иначе а+б

let a = 8,b=4;
console.log( a%2 ? a+b : a*b );


//// 2 Определить какой четверти принадлежит точка с координатами (х, у)
/*  4 | 1
    --|--
    3 | 2   */
let x = -4, y = -5;
if(x>0&&y>0) console.log("1-ya chetvert");
if(x>0&&y<0) console.log("2-ya chetvert");
if(x<0&&y<0) console.log("3-ya chetvert");
if(x<0&&y>0) console.log("4-ya chetvert");

//// 3 Найти сумму только положительных из трех чисел
let a = -3, b = -5, c = -7;
console.log((a<0?0:a) + (b<0?0:b) + (c<0?0:c));

//// 4 Посчитать выражение макс(а * б * с, а + б + с) + 3
let a = 3, b = 1, c = 7;
let result = (a*b*c)>(a+b+c)?(a*b*c)+3:(a+b+c)+ 3
console.log(result);


// 5 Написать программу определения оценки студента по его рейтингу,на основе следующих правил
let c = 99;
    if(c<=19) console.log("F");
else if(c<=39)console.log("E");
else if(c<=59)console.log("D");
else if(c<=74)console.log("C");
else if(c<=89)console.log("B");
else if(c<=100)console.log("A");







