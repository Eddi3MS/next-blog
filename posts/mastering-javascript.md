---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js-thumb.png
isFeatured: false
date: "2021-08-06"
---

# Array

```js

const array = ["um", "dois"];


.push(item) // adiciona o item no final do array

array.push("três");

// array = ["um", "dois", "três"];

.pop() // remove o ultimo item do array

const removerUltimo = array.pop();

// itemRemovido = ["três"]; array = ["um","dois"]

.unshift(item) // adiciona o item no inicio do array

array.unshift("zero");

// array = ["zero", "um", "dois"];

.shift() // remove o primeiro item do Array

const removerPrimeiro = array.shift();

// itemRemovido = ["zero"]   array = ["um", "dois"]


```

# For Loop

```js
function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
```

# While Loop

```js
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

# ParseInt

```js
// parseInt() converte uma string para número

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

# Object.freeze

```js
// Object.freeze(obj) vai "travar" o objeto
// e impedir que mudem ou incluam valores nele.

const MATH_CONSTANTS = {
  PI: 3.14,
};

Object.freeze(MATH_CONSTANTS); // lock no objeto

MATH_CONSTANTS.PI = 99; // não vai funcionar.
```
