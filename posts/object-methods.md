---
title: "Object Methods!"
date: "2022-06-11"
image: object-props.png
excerpt: "Some usecases for object manipulation.."
isFeatured: true
---

# Object use cases

## Filter Object and remove empty values

Given an object:

```js
const object = {
  name: "Edson",
  age: "32",
  address: "",
  city: "",
};
```

Modern way to filter all the empty values would be:

```js
let filteredObj = Object.fromEntries(
  Object.entries(object).filter(([_, value]) => value !== "")
);

console.log(filteredObj);
//
// const object = {
//   name: "Edson",
//   age: "32",
// };
```

Object.entries will turn the object into an array of [key,value] pars, it will look like this:

```js
let arrayObject = [
  ["name", "Edson"],
  ["age", "32"],
  ["address", ""],
  ["city", ""],
];
```

Filter method will ignore key and access all the values: ([_,value])

And Object.fromEntries will turn the array back into an object, now without the empty entries.
