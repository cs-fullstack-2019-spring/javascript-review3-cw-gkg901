//Problem 1:
//Put the start of your program in a main function. Create a loop that takes user input and put it in an array. Once the user quits, print all items in the array. DO NOT print the array, print the items/elements in the array.



problem1();

function problem1(){
    array = [];
    do {
        userInput = prompt("enter whatever. press 'q' to quit.");
        array.push(userInput);
    } while (userInput !== "q");
for (i=0; i<array.length; i++){console.log(array[i])}
}


// PROBLEM2
//Put the start of your program in a main function. Create a function that can translate five English words into Spanish words. You should be able to call your function from your main function.


problem2();

function problem2(){

    var input = prompt("enter a number 1 - 5 in english");

    switch (input) {

        case "one":
        case "One":
            console.log("Uno");
            break;
        case "two":
        case "Two":
            console.log("Dos");
            break;
        case "three":
        case "Three":
            console.log("Tres");
            break;
        case "four":
        case "Four":
            console.log("Quatro");
        case "five":
        case "Five":
            console.log("Cinco");
            break;
        default: alert("English mf! Do you speak it?!");

    }
}


//PROBLEM 3
//Put the start of your program in a main function. Create a program that takes number inputs into an array until a quit word. Afterwards, display all numbers (not the array) and the sum.


problem3();

function problem3() {

    arrayNums = [];
    do {
        userInput2 = parseInt(prompt("enter a number. press 0 to quit"));
        arrayNums.push(userInput2);
    } while (userInput2 !== 0);
    for (i = 0; i < arrayNums.length; i++) {
        console.log(arrayNums[i])
    }

 function getSum(total,num){
        return total + num
    }

   function answer(){arrayNums.reduce(getSum,0)}

    console.log(answer());
}





//Problem4
//Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create a class method that will function that will change the rating of the book. Create three objects of the class Book and put them in an array. Lastly, use the array to display only the names of the books.


problem4();

function problem4(){

    class Books {
        constructor(name,rating,genre,author)
        {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;
        }

        changeRating(newrating){
            this.rating = newrating
        }
    }


bookArray = [new Books("Blah","A","Horror","Kenn"),
new Books("Duh","B","Crime","Kenn"),
new Books("Whatever","C","Adventure","Kenn"),];


    console.log(bookArray);


function callback(bookName){
    return (name);
}

console.log(bookArray.filter(callback));






























}




