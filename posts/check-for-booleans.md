---
title: "Always check for booleans in JSX!"
date: "2022-04-14"
image: booleans.jpg
excerpt: "Always pay careful attention to what you are checking on the left side of a logical statement - everywhere - but especially in JSX.."
isFeatured: false
---

# React - Clean Code

Always pay careful attention to what you are checking on the left side of a logical statement - everywhere - but especially in JSX.

Is it a string or a number and you are sure can't be anything else than a string or a number?

Check them with the double bang always!

```js

!!someString && ...

// Or:
!!undefined && ...
!!null && ...

// Don't do only
undefined && ...
null && ...

```

Do you need to check if it is 0 ?
Don't put the double bangs then! Better check explicitly for 0:

```js

num === 0 && ...

```

Is it an array and you need to check if it exists?

```js

Array.isArray(myArray) && ...

// Or is it an array and you need to check if it is not empty?

myArray.length > 0 && ...

```

Is it an object?

Don't check if it exists! There is a default empty object somewhere for sure!
It is useless and dangerous to check if an object exists in JSX especially!

Check for some propriety on it or just check if it has any propriety!
And put the double bangs on the propriety if you know that is a string, number or undefined!

```js

!!obj.name && ...


Object.entries(obj).length > 0 && ...

```

It never happened to me to check if a function exists in JSX but, you never know!
However avoid this thing if you encounter it!

```js

typeof aFunction === 'function' && ...


```

## NEVER check arrays, objects, functions with the double bang!

Written by [Adrian Bogdan](https://www.linkedin.com/in/adrian-%F0%9F%94%B5-b-b52348181/);

[source](https://www.linkedin.com/feed/update/urn:li:activity:6920051502694727680/)
