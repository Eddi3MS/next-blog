---
title: "Expressões Regulares?"
date: "2022-02-21"
image: regular-expressions.jpg
excerpt: "Expressões Regulares são padrões de caracteres que associam sequências de caracteres no texto."
isFeatured: false
---

# Expressões Regulares

São usadas para encontrar, filtrar ou validar um determinado trecho de texto.

## Operador // com método test()

O método test, aplica um teste no string de acordo com o parâmetro passado e retorna booleano (true/false)

```js
let myString = "Hello, World!";

//expressão regular == case sensitive => hello, com h, retornaria false
let myRegex = /Hello/;

//testa se myString contém o valor da expressão = retorna true ou false
let result = myRegex.test(myString);
```

## Oparator |

```js
let petString = "James has a pet cat.";

// operator OR  | , se encontrar uma das opções, retorna true
let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petString);
```

## Operator i

```js
let myString = "TesTanDO";

// operator i => torna a busca case insensitive.(maiúsculas e minúsculas)
let fccRegex = /testando/i;

let result = fccRegex.test(myString);
```

## Método match()

```js
let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/;

// metodo match encontra e extrai o valor de condingRegex
let result = extractStr.match(codingRegex);

// result =
// [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.', groups: undefined]
// result[0] é a regex buscada
```

## operador g

```js
let twinkleStar = "Twinkle, twinkle, little star";

// operator g - procura por toda a string, os anteriores só retornariam o primeiro match
// i - para pegar tanto Twinkle, quanto twinkle -- case insensitive

let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

// result = ["Twinkle","twinkle"] -- sem os parametros aleatorios de antes
```

## Operador .

```js
let exampleStr = "Let's have fun with regular expressions!";

// operator . => o dot aceita qualquer caracter no seu lugar
// então, /.un/ vai retornar run,sun,fun,pun, etc..
let unRegex = /.un/;

let result = unRegex.test(exampleStr);
```

## Operador []

```js
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// operador [] - busca pelos caracteres inseridos dentro dele, neste caso vogais.
// recordando: g busca por todas as repetições e i por case insensitive
let vowelRegex = /[aeiou]/gi;

let result = quoteSample.match(vowelRegex);

/*
/ result retorna um array com todas as vogais
result =
[
  'e', 'a', 'e', 'o', 'u', 'i',
  'e', 'a', 'o', 'e', 'o', 'e',
  'I', 'a', 'e', 'o', 'o', 'e',
  'i', 'o', 'e', 'o', 'i', 'e',
  'i'
]
*/
```

## Operador -

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";

// operator - >> it will check for all letters, a to z.
// g will make it run the entire string
//i will make it case insensitive
let alphabetRegex = /[a-z]/gi;

let result = quoteSample.match(alphabetRegex);

/*
result =
[
  'T', 'h', 'e', 'q', 'u', 'i', 'c',
  'k', 'b', 'r', 'o', 'w', 'n', 'f',
  'o', 'x', 'j', 'u', 'm', 'p', 's',
  'o', 'v', 'e', 'r', 't', 'h', 'e',
  'l', 'a', 'z', 'y', 'd', 'o', 'g'
]
*/
```

## Incluindo números

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";

// usando operador [] combinado com o - para o range,
// podemos usar além de letras, números.
// no exemplo abaixo buscaremos pelas letras de h até s e os números de 2 a 6.
let myRegex = /[h-s2-6]/gi;

let result = quoteSample.match(myRegex);

/*
result =
[
  'l', 'r', 'r', '3', '4',
  '5', '2', '6', '5', '3',
  's', 'r', 'l', 'i', 'i',
  'o', 's'
]
*/
```

## Operador ^ dentro de []

Dentro de [], ^ faz uma busca por todos os caracteres que não estejam especificados após o ^

```js
let quoteSample = "edsonmarc2014@gmail.com";

// nesse caso, irá retornar todos os caracteres que NÃO sejam vogais ou números
// incluindo espaços, e símbolos.
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

/*
result =
[
  'd', 's', 'n', 'm',
  'r', 'c', '@', 'g',
  'm', 'l', '.', 'c',
  'm'
]
*/
```

## Operador +

Faz uma busca por um ou mais caracteres na string.

```js
let difficultSpelling = "Mississippi";

// busca por um ou mais s's. Retorna os s's juntos caso estejam em sequencia
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

/*
result = [ 'ss', 'ss' ];
*/
```

## Operador \*

Busca caracteres que se repetem 0 ou mais vezes em sequência, juntos.

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgha!";

let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);

/*
result =
[
  'Aaaaaaaaaaaaaaaa',
  index: 0,
  input: 'Aaaaaaaaaaaaaaaarrrgh!',
  groups: undefined
]
*/
```

## Operador ?

Regex são por padrão 'greedy', isto é, elas retornam a maior sub-string possivel.
Ao adicionar o ? isso muda, e ela retorna o menor match possível

```js
let text = "titanic";

// retorna titani - a maior sub-string contendo de T a I
// lembrando que o * pega todas as repetições
// e o padrão passado é a-z, qualquer repetição de letras.
let myRegex = /t[a-z]*i/;

// retorna ti // a menor sub-string possivel entre T e I, é ti
let myRegex2 = /t[a-z]*?i/;

let result = text.match(myRegex);
let result2 = text.match(myRegex2);

/*
result =
[
  '<h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>',
  groups: undefined
]
*/
```

## Operador ^ dentro de / /

Dentro do //, ^ faz uma busca pelos caracteres no inicio da string. Retorna booleano

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;

let result = calRegex.test(rickyAndCal);

// result = true
```

## Operador $ dentro de //

Faz o oposto do ^, busca pela ocorrencia no final da string e retorna um booleano

```js
let caboose = "The last car on a train is the caboose";

let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// result = true
```

## Operador \w

É o atalho para buscar por todos os caracteres alfanumericos e o _ => [A-Za-z0-9_]

```js
let quoteSample = "The five boxing wizards jump quickly.";

// buscara por todas as letras e numeros na string.
// usando .length, retornará o tamanho do array resultante.
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
```

## Operador \W - maiusculo

É o atalho para buscar por todos os caracteres que não sejam alfanumericos (ou _ ) => [^A-Za-z0-9_], atente-se para o ^ dentro de [] - exceção. É o oposto de \w.

```js
let quoteSample = "The five boxing wizards jump quickly.";

let nonAlphabetRegex = /\W/g;

let result = quoteSample.match(nonAlphabetRegex);
```

## Operador \d

Busca por digitos de 0 a 9 na string, é o atalho para [0-9]

```js
let movieName = "2001: A Space Odyssey";

let numRegex = /\d/g;

let result = movieName.match(numRegex);

// result = ['2','0','0','1']
```

## Operador \D

Semelhante \W, o \D busca por tudo que não sejam dígitos. É o atalho para [^0-9].

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex);

/*
result =
[
  ':', ' ', 'A', ' ', 'S',
  'p', 'a', 'c', 'e', ' ',
  'O', 'd', 'y', 's', 's',
  'e', 'y'
]
*/
```

## Teste Password

Verificando se um password atende as regras:

- Só pode conter caracteres alfanumericos
- Começa com letras
- Só pode conter números no fim da string
- tem de ter pelo menos 2 caracteres
- Se for apenas 2 caracteres, os 2 tem de ser letras

```js
let username = "JackOfAllTrades";

// leitura:
// ^[a-z] Vai começar com letra
// [a-z]+ vai procurar pela repetição de mais uma letra
// (ou seja, minimo de 2 letras, a primera e esta)
// \d*$ [0-9]*$ = vai procurar por números no final da string, * busca por 0 ou mais repetições
// (ou seja, pode não haver números)
// | ou ==> se os parametros anteriores não forem atingidos
// ^[a-z] Vai começar com letra
// \d\d+$ vai terminar com 2 ou mais números
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

let result = userCheck.test(username); // retorna true ou false
```

## Operador \s

O operador \s busca por espaços vazios, além de [ \r\t\f\n\v].

\r return | \t tab | \f ? | \n new line | \v ?

```js
let sample = "Whitespace is important in separating words";

let countWhiteSpace = /\s/g;

let result = sample.match(countWhiteSpace);

//result = [ ' ', ' ', ' ', ' ', ' ' ]
```

## Operador \S

O operador \S , retorna todos os caracteres que não sejam espaços vazios ou
[ \r\t\f\n\v].

```js
let sample = "Whitespace is important in separating words";

let countNonWhiteSpace = /\S/g;

let result = sample.match(countNonWhiteSpace);

/*result =
[
  'W', 'h', 'i', 't', 'e', 's', 'p',
  'a', 'c', 'e', 'i', 's', 'i', 'm',
  'p', 'o', 'r', 't', 'a', 'n', 't',
  'i', 'n', 's', 'e', 'p', 'a', 'r',
  'a', 't', 'i', 'n', 'g', 'w', 'o',
  'r', 'd', 's'
]
*/
```

## Operador {}

Especifica dentro dos {} o range de possibilidades de repetição de um determinado caracter, separado por vírgula.

```js
let ohStr = "Ohhh no";

// checa pela repetição de h's, se houver mais de 3 e menos de 6, retorna true;
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
```

Usando apenas um número dentro do {}, retornará apenas um match exato

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";

let multipleHA = /ha{3}h/; // buscará pela repetição de 3 a's

multipleHA.test(A4); // false, são 4 e não 3.
multipleHA.test(A3); // true
multipleHA.test(A100); // false, são mais de 3.
```

## Operador ?

Especifica que o caracterer anterior pode ou não existir na string.

```js
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/; // dessa forma o u é opcional

rainbowRegex.test(american); // true
rainbowRegex.test(british); // true
```

## Operador ()

Usado para passar variações para a string

```js
let testStr = "Pumpkin";

//dessa forma, retornará true para penguin e punpkin
let testRegex = /P(engu|umpk)in/;

testRegex.test(testStr);
```

## Método .replace

Além de encontrar strings, também podemos muda-las, trocando a ordem ou palavras

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // trocará silver por blue;
```

Também podemos acessar os trechos de texto com o $

```js

// (\w+) vai buscar por um trecho de texto, \s vai contabilizar o espaço
// $2 $1 são as duas palavras, os dois trechos capturados com (\w+)
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

retornará Camp Code.

```

## Remover espaços vazios

Para remover espaços vazios no inicio e fim de uma string, podemos usar a seguinte regex

```js
let hello = "   Hello, World!  ";

// ^ seleciona o inicio da string
// $ seleciona o final da string
let wsRegex = /^\s+|\s+$/g;

let result = hello.replace(wsRegex, "");
```
