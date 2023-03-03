---
title: "Composition With Javascript"
date: 2018-12-09T20:12:34+02:00
draft: false
---

A composition in functional programming is a function that has been
'composed' from two functions.

More formally a composition is when we have a function <em>f</em> that
takes an argument of type ```A``` and returns ```B```
```(A``` &rarr; ```B)``` and another function ```g``` that takes an
argument of type ```B``` and returns ```C``` ```(B``` &rarr; ```C)```.
Then we can create a function out of ```f``` and ```g``` that takes
an argument of type ```A``` and returns ```C```
```(A``` &rarr; ```C)```.

This type of function composition can be denoted as ```f``` &compfn; ```g```.

Below is an implementation of a compose function in JavaScript (note! the functions are applied in a left to right order).

{{< gist ksnabb a023f3643c50cfdc6d272a0e738d1106 composition-with-javascript.js >}}

# Composing multiple functions

In practice a more useful compose function would allow you to compose a
variadic amount of functions at the same time.

When composing multiple functions it's good to realise that function
composition is always associative. Which means that
```f``` &compfn; ```(g``` &compfn; ```h)``` gives the same result as
```(f``` &compfn; ```g)``` &compfn; ```h```.

Below is an implementation in JavaScript that composes together a variadic amount of functions.

{{< gist ksnabb a023f3643c50cfdc6d272a0e738d1106 variadic-compose.js >}}

{{< script "/js/posts/composition-with-javascript.js" >}}