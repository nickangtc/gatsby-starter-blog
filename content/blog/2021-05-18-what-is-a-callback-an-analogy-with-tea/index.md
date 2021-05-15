---
title: "What is a callback? An analogy with tea"
date: "2021-05-18"
excerpt: "A callback is programming concept that you are already using in your daily life."
tags: ["Tutorial", "Software"]
---

![Me pulling out an overly steeped teabag with a phone timer showing 7 minutes and 17 seconds](/images/teabag-infusing-stopwatch.jpg)

Imagine you’re trying to make tea. It’s your favourite green tea, which needs three minutes of infusion. You put the teabag into 95 degrees water and the steeping begins.

Now you have 2 options:
1. Start a stopwatch, stand around and wait for the stopwatch to show 3 minutes have passed;
2. or, start a timer, do something else while the 3 minutes pass and wait for the timer to tell you it’s done

And you pull out the tea bag and enjoy your tea.

Those are the two ways a disciplined tea drinker could get the perfect brew, but one of them — using a timer — also perfectly illustrates the *point* of a callback in programming. 

In JavaScript code, using a timer to steep tea would look something like this:

```javascript
const steep = 1000 * 60 * 3
let teabagInCup = false

function addTeabag() {
	teabagInCup = true
}

function removeTeabag() {
	teabagInCup = false	
}

addTeabag()
setTimeout(removeTeabag, steep)
```

The callback function is `removeTeabag`, which will be called once 3 minutes (defined as `steep` in milliseconds) is up.

To complete this analogy, let’s see how we can do something else while the tea is steeping:

```javascript
addTeabag()
setTimeout(removeTeabag, steep)

// the timer is running, so we're free to do other things
textMum()
toggleTv('on')
relax()
```

This is the beauty of asynchronous programming. You get to tell the program to do X, and **when X is done, do Y**; meanwhile, after setting the timer, go right ahead to do A, B, and C while X is being done.

A callback is a programming concept for achieving the “when X is done, do Y” part and the callback function is the “Y.”

Could you steep tea without a timer? Of course. But you’d be using a stopwatch and all you could do is look up and back at the stopwatch counting 2:30… 2:35… 2:45… that’s time you’ll never get back, wasted staring at a stopwatch. 

And if you somehow get distracted and forget that it’s still steeping, like I did in just yesterday (seen in picture)… well, you get astringent tea that will make you wish you used a timer that would have *called you back*.