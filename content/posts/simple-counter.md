---
title: "Simple Counter"
date: 2018-12-14T00:10:58+02:00
draft: false
---

I've created a simple counter just like the one you usually see in examples when reading about webframeworks like React, Reagent, Elm or whatever framework.

I decided to do this by using pure HTML and JavaScript.
The reasoning being not more then experimentation and maybe answer to myself on why these frameworks are needed.

Below is the counter app.

{{< simple-counter >}}

## The Events

A natural theme in many frameworks is to connect elements in the UI to be reactive on state changes.
A common pattern to achieve this is to subscribe to state change events.
For this we need a publish subscribe kind of functionality.

Below you can see one pure JavaScript impementation of publish subscribe.

{{< gist ksnabb 271f4a7367b4f5571571c9a7a7ea6ecf >}}

## The State

The state will use the above pubSub to dispatch events on state changes.

{{< gist ksnabb 271f4a7367b4f5571571c9a7a7ea6ecf >}}

## The View

The view can then be setup using the pubSub and the state.
For connecting event listeners we can use standard DOM functions and manipulation.

{{< gist ksnabb 271f4a7367b4f5571571c9a7a7ea6ecf >}}

By just modifying the content of the paragraph in the click event listener we could have done this using only 3 lines of JavaScript code.
The pubsub and the state handling does give the application some more structure and a promise to handle larger more complex frontends.
