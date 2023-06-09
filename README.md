### exercises_7_kyu

## Consecutive items - exercise_1

You are given a list of unique integers arr, and two integers a and b.
Your task is to find out whether or not a and b appear consecutively in arr,
and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr

## Separate basic types - exercise_2

Given: a sequence of different type of values (number, string, boolean).
You should return an object with a separate properties for each of types presented in input.

Each property should contain an array of corresponding values.
1.keep order of values like in input array
2.if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']

expected output is:
{
number: [1, 2],
string: ['a', 'b'],
boolean: [false]
}

## last digits of a number - exercise_3

Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

## Fix string case - exercise_4

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters
and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowe

## How many arguments - exercise_5

## Who is the killer? - exercise_6

Some people have been killed!
You have managed to narrow the suspects down to just a few.
Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen
on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
'Johnny': ['David', 'Kyle', 'Lucas'],
'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person
that saw both 'Lucas' and 'Bill'

## I'm everywhere! - exercise_7

Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word.
Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word.
For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace.
("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".

## Closure Counter - exercise_8

1.Define the function counter that returns a function that returns an increasing value.
2.The first value should be 1. 3. You're going to have to use closures.

## Valid Parentheses - exercise_9

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()" => true
")(()))" => false
"(" => false
"(())((()())())" => true

## Find the index of the second occurrence of a letter in a string - exercise_10

In this kata, you need to write a function that takes a string and a letter
as input and then returns the index of the second occurrence of that letter in the string.
If there is no such letter in the string, then the function should return -1.
If the letter occurs only once in the string, then -1 should also be returned.

Examples:
secondSymbol('Hello world!!!','l') --> 3
secondSymbol('Hello world!!!', 'A') --> -1
