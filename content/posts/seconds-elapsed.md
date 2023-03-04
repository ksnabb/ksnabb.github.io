---
title: "Seconds elapsed"
date: 2018-12-14T00:10:58+02:00
draft: false
---

In this note I implemented a seconds elapsed example which is rendered below.

{{< seconds-elapsed >}}

Seconds elapsed can be implemented with the same boilerplate functions (pubsub.js and state.js) that was introduced for the Simple Counter implemented
<a href="/notes/simple-counter.html">here</a>.

The implementation of the seconds elapsed component utilizing state.js and pubsub.js can be seen below:

{{< gist ksnabb 8122a3143279dfb10f57069c5ee3c540 >}}