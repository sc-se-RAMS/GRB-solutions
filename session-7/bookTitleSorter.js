/* 
Activity: Book Titles Sorting by Complexity 
You will need: 
The weighting section in your copy of the session seven slide deck. 
Task:  
You have been asked to help a librarian sort a list of book titles. The library wants to order the books by the "complexity" of their titles.
The complexity is calculated by the sum of the ASCII values of each character in the title. If two titles have the same complexity, they should be sorted alphabetically. 

For example, given the following book titles: 

"The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick" 

"The Catcher in the Rye" has a complexity of 2091 

"To Kill a Mockingbird" has a complexity of 2030 

"1984" has a complexity of 200 

"Moby Dick" has a complexity of 816 

The sorted output should be: 

"1984", "Moby Dick", "To Kill a Mockingbird", "The Catcher in the Rye" 

Write a function that orders book titles based on their complexity. 

Output:The code used to complete the tasks & The printed answers 
​*/

const { title } = require("process");

/* 
PSEUDOCODE

function sortBooks() => {
    const bookTitle = [""];
    const asciiValue = bookTitle => {
        let result = 0;
        logic for adding up letter values
        for loop?
        for(let i=0; i<bookTitle.length; i++){
        let number = bookTitle[i].charCodeat(0);
        result += number;
        }
        return result;
        };
        console.log(asciiValue(bookTitle));

    logic for corresponding ascii value and letters 

    
    which we'll assign to overall complexityScore

    if(2 bookTitle have same complexityScore){
        sort alphabetically;
        } else {
            rank as normaal using just complexityScore;
        }

    console.log(sortBooks(titles));

    }
*/

const sortBooks = () => {
    const bookTitle = ["The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick"];

    const asciiValue = title => {
        let result = 0;
        // logic for adding up letter values
        for(let i=0; i<title.length; i++){
        // let number = title[i].charCodeAt(0);
        result += title.charCodeAt(i);
        }
        return result;
        };
        return outcome = bookTitle.sort((a,b) => asciiValue(a) - asciiValue(b));

    }

    console.log(sortBooks());