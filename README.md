# Calculating Total Price of Basket Items

# Problem Statement
Write a program that calculates the price of a basket of shopping.

The solution should be accomplished in roughly two hours.

Items are presented one at a time, in a list, identified by name - for example "Apple" or "Banana".

Multiple items are present multiple times in the list, so for example ["Apple", "Apple", "Banana"] is a basket with two apples and one banana.
 
Items are priced as follows:

 - Apples are 35p each
 - Bananas are 20p each
 - Melons are 50p each, but are available as ‘buy one get one free’
 - Limes are 15p each, but are available in a ‘three for the price of two’ offer

Given a list of shopping, calculate the total cost of those items.


# Steps to compile and run the program

## Prequisites
1. Node must be installed in the system. Any version should be fine.
2. Install typescript globally for ease of using following command: `npm install -g typescript`

## Compiling the program
Execute the following command to compile the `solution.ts`.
```sh
tsc solution.ts
```
## Executing the compiled program
```sh
node solution.js
```


# Logic

1. First we are counting the frequencies of all the given items in the basket.
2. Then we are iterating over each group and checking if any discount is available.
    
    2.1 If discount is available, apply the discount. For melon, reduce the quantity by half and calculate the price. If there was a remainder, add that as well in the total price.

    2.2 If discount is not available, then calculate total price using `quantity * cost (per item)`.

3. At the end, we are returning the total price and it gets printed in the console.

# Running it online
1. Visit Official Typescript Playground: https://www.typescriptlang.org/play/?#code/MYewdgzgLgBACgJQJIGECiBlGBeGBvAKBhgEEAHMgGwFMAuGAZgFYAaImAIQEMwev6ATAAY2xALLVK4ekxHsAMgEsAtnRgBGVgQC+AbgIEoATzLUYAEUURQAVzBQIOGAmqgATgBMAPNDeKwAOYsMAAUtvb0YDbKAEbUbsFkfsBqUbHxAJQ4AHwwaXFu2foEoJCw5kgYKADyAKoAcgAqGPSW1iB2Dk6ExAD0vTASUmAwALScNkYw4GYB1LAzMABmbtRmIEtL8exD0qHhUInJ1FnYuWJcUAAWAHQpipRhHfYwAwJZAFQwSYopoq8DJSqMaMZYgNzfY7TJYwATQrZuBQqNRPTpHX4nHKDS63JZScEhVEvAYMT6wsk-FIwADU+2esAApIwKcc2HoDEs7MAoIpwDBgFxKMAbJRLtRGiAoIKUCBoCFFFBqMoIPRfP4AgBtAC6GUi0QK+HYpWgMAVSplnRVzlc4O8asCwXy8VyuDw7PYS3BdLKpsVymhvqVECyPWIgeUFvsEA1ZuUWqc8r9kYcMb98YAPumYEIsrT1PpiNoDMQaLAoJLpbLYLghMU+gMUILhaLFY5y1LKPyqzAuEtFRCuB4AFY2aDqmDXMweKwHD1ep4+2Omkax5PBw1hrs+g5OVf06OxrV1sOKGEhaoxIeuKA3ADW1CMEBCiFQmAyN38HmoAA9qktE0qpzYLgozqCG7CbsaIA0DcUgBCEAAGcBQp6EIACR4LG2imo4YCSj2ABuXAPFwMQwQhGQFpuMCrFANhuCMoFUYWxZhv0MAAAIOKMigBHhqwQVuJqUmYuAvugGCpkqGZZrWrHEO2lYmtSuAVFUdRNJJh4wAA-BYlQ1A0zRSXGRKHJCGJZPQO5fCJVFFuwtH0SMimUDK0D6A57HcBA96wEgfoQCU4AmjEXC+fMTgagAROQVDUNFwSxRQNCJTA0XcLwvBpdFuxgDleU5UCCVJcVRXIuVqjRUeBjGmWFZud2uACkKIpihKHbuVAIRhRFUCUQQp6hK5XU4CBYEbkJ0HULBIDwdFcA0OFZiDh4E5XGYIkBpOMDKFYEDjrGjhxKhZjABtwC3rxIwdDeMCNFcPC3jARgdNFA3YZIEBmKGUEwXBiEdYKXbQPQGEjVW2hkBRVHsdUNhQGQCP0EDnagKDGgAJxMGQOgGAQQA

2. Click on run button at the top to check the logs on the right side.