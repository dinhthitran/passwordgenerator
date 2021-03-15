# Password-Generator
```
Homework Assignment #3 Monash Bootcamp 2021 - JavaScript

This week's project was designed as a homework assignment for Monash Coding Bootcamp 2021.

The application is focused on JavaScript to enable users to generate random passwords based on criteria that they've selected. It runs in the browser and features dynamicaly updated HTML and CSS powered by JavaScript.

It includes a responsive user interface that adapts to multiple screen sizes.

```

## Getting Started

This project has been deployed. Please follow the links below to get to the deployed application and repository.

* [GitHub Repository](https://github.com/dinhthitran)
* [Deployed Application](https://dinhthitran.github.io/passwordgenerator/)


## Functionality

> Random Password Generator; please follow the method below:

1. Open URL in a web browser.

2. Click the RED Generate Password button (After a user clicks the button a series of prompts will be presented in the window for selection to include in the password.)

3. Answer the Ordered Prompts

    * How many characters would you like your password? Choose between 8 and 128
        - If a valid value is not placed you will be alerted.
    In the following prompts one of the criterias must be selected.
    * Will this contain numbers?
    * Will this contain special characters?
    * Will this contain Uppercase letters?
    * Will this contain Lowercase letters?

4. When all prompts are answered the input will be validated and the password generated will match the users selected criteria.

5. The password will be displayed written in a text box on the page.



## Mock-Up

The following image shows the web application's appearance and functionality:
![image](https://user-images.githubusercontent.com/78635889/111157305-d8bc6980-85ea-11eb-9af2-002ba81e7615.png)


### File Execution:
> Open in browser

### Features:
* HTML Page
    * Provided by bootcamp
    - contains bassic user input and buttons with divs and ids
    - comments added to show document breakdown
    - footer added
* CSS Page
    * Provided by bootcamp (inclusive of media queries for responsiveness max-width: 690px & 500px
    - added extra hover function with styles for accessibility

* Javascript Page

    * Variable declaration area
    * Uppercase conversion added for cleaner code
    * event listener on click called generate password
    - Prompts user for input between 8-128 characters
    - variable changed to integer using parseInt
    - Will then validate that the input is a number within range, or is a number
    - The input is then used to determine the types (or choices) or letters of characters using an if statement
    * Another variable is created to join (concatenate) the above variables
    * A for loop will loop through the prompt until it reaches the entered by the user.
    * A password variable  takes that value from the loop and converts it to a string.
    * The string values then populate into the text area for the user using a function write password


### Notes

* The array of variables and possible combinations can be cleaner by using charcodes with a for loop. (Just no more time to research)




---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
