This project was done by [John Fleurimond](./readabletime.png).

##Coding War:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

##ALGORITHMS DATES/TIME  MATHEMATICS  NUMBERS


With this Coding war, I was stuck for a good hour on how I would approach this because its been a while since I did one and what they were asking. I did alot of testing first and I knew had to do some type of javascript arithimetic operater like Modulus and division to go about it. So I declared a variable first for each increment of time `let sec = 0, min = 0, hour = 0;` 

and made a helper function to check if its a double digit number in:
 `let padNum = (num) => {
  if (num < 10) {
    return '0' + num;
  }
  return String(num);
};`

Next after that it was time to figure out the variables I declared for `sec` I did `sec = seconds % 60;` playing around in the console with the operators and I thought % 60 would be the easy way to get seconds you want no remainer of seconds and 60 % 60 = 0. So as far I thought I had it but when I went to the division and got long digit numbers so I `Math.floor` and then `min = Math.floor(seconds / 60) % 60;` which was probably the toughest part of this whole challenge because I thought `min = Math.floor(seconds / 60)` would work and be good enough but no go. Had to go look for some help on that one and found out that you had to ` % 60;` after to `min = Math.floor(seconds / 60)` and then you're good!
