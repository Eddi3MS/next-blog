---
title: Mastering JavaScript
excerpt: Alguns metodos e funções em javascript!
image: mastering-js-thumb.png
isFeatured: false
date: "2022-02-19"
---

# Métodos usados em Arrays

## push(item) : Adiciona o item entre () ao final do array

```js
// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

myArray.push(["dog", 3]);

// array = [["John", 23], ["cat", 2], ["dog", 3]]
```

## pop() : Remove o último item do Array

```js
// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

const removedFromMyArray = myArray.pop();

// removedFromMyArray = ["cat", 2];
// myArray =  [["John", 23]];
```

## unshift(item) : Adiciona o item entre () no inicio do array

```js
// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];

myArray.unshift(["Paul", 35]);

// array = [["Paul", 35],["John", 23], ["dog", 3]];
```

## shift() : Remove o primeiro item do array

```js
// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];

const removedFromMyArray = myArray.shift();

// removedFromMyArray = ["John", 23];
// myArray = [["dog", 3]];
```

# Switch

Recebe um parametro e percorre uma lista de possibilidades pré definidas (cases),
break é usado para parar a função caso o parametro seja atingido e caso
nenhum case corresponda ao parametro recebido, retornará o valor de default ao final.

```js
const switchOfStuff = (val) => {
  let answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
};

switchOfStuff(1); // ativando a função com 1, retornaria stuff

const sequentialSizes = (val) => {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    //como o retorno é o mesmo para diferentes cases, é só omitir o break.
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
};

sequentialSizes(1); // retornará "Low"
```

## Poker - contando cartas e apostando

No poker, muitos jogadores experiêntes, mantem uma contagem do baralho na cabeça, para saber quando devem apostar e quando devem esperar.

Abaixo um algoritmo que calcula e retorna ao usuário se ele deve esperar ou apostar.

```js
let count = 0;

const countingCards = (card) => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Apostar";
  } else {
    return count + " Segurar";
  }
};

countingCards(2);
countingCards(3);
countingCards(7);
countingCards("K");
countingCards("A");
```

# For Loop

```js
const multiplyAll = (arr) => {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
};

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
```

# While Loop

```js
const myArray = [];

let i = 5;

while (i > -1) {
  myArray.push(i);
  i--;
}

// myArray = [5,4,3,2,1,0]

const ourArray = [];

let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

// array termina vazio, o while já começa false, não entra no loop
```

# DO While Loop

```js
const ourArray = [];

let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

// array = [ 5 ], o while já começa false, mas a ação do DO acontece antes do check
```

# parseInt(string) : converte uma string para número

```js
parseInt("11"); // retornará 11

// parseInt() também pode receber um segundo parametro (radix)
// para dizer que a string é um número binario

parseInt("111001", 2); // retornará 57
```

# Ternario aninhado

```js
// a mesma coisa que um if/else if/else
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);
```

# Recursion

```js
// num çei só çei ki foi assim
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
```

# Object.freeze(objeto) : impede que o objeto seja atualizado / modificado.

```js
const MATH_CONSTANTS = {
  PI: 3.14,
};

Object.freeze(MATH_CONSTANTS); // lock no objeto

MATH_CONSTANTS.PI = 99; // não vai funcionar.
```
