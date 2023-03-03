---
title: "Currying with JavaScript"
date: 2021-04-30T00:10:58+02:00
draft: false
---

Currying with JavaScript

There are a few ways to implement currying. I'm not exactly sure if they all fit exactly into
the definition of currying. Nevertheless I will collect different curry methods in this page.

# Variadic Arity Currying

This version of the curry function works with any function arity. The returned curried function will take as many parameters as is passed into it at a time.

{{< gist ksnabb f33097771bd371397e21f86b3cdac599 >}}

One of the bad sides of this curry method is that it will not give any warning if it's called with too many arguments.
Another is that the returned function will have a set arity of 0 which is incorrect.
The set arity of 0 might make some composition or functional combination of functions impossible or difficult with the returned function.

The good side being the implementation is simple and flexible.

{{< script "/js/posts/curry-with-javascript.js" >}}