//-----Assignment 1 Part 1-------

//step 1
//var name = window.prompt("What is your name?");
//window.alert(name.length);

//step 2
//var name = window.prompt("What is your name?");
//var num = window.prompt("Please input a number.");
//window.alert(name.charAt(num));

//step 3
//var firstName = window.prompt("Whats your first name?");
//var lastName = window.prompt("Whats your last name?");
//window.alert("Your name is: " + firstName + " " + lastName);

//step 4
//var alotWords = "The quick brown fox jumps over the lazy dog";
//window.alert(alotWords.indexOf("fox"));

//step 5
//var alotWords = "The quick brown fox jumps over the lazy dog";
//window.alert(alotWords.lastIndexOf("fox"));

//step 6
//var alotWords = "The quick brown fox jumps over the lazy dog";
//var name = window.prompt("What is your name?");
//window.alert(alotWords.replace("the lazy dog", name));

//step 7
//var alotWords = "The quick brown fox jumps over the lazy dog";
//var word = window.prompt("Enter a word");
//window.alert(alotWords.search(word));

//step 8
//var old_string = "the quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(0, 30);
//window.alert(new_string.toUpperCase());

//step 9
//var alotWords =  "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert(alotWords.trim().toLowerCase());

//step 10
//var alotWords = "the quick brown fox jumps over the lazy dog";
//var alotWords = alotWords.slice(0,1).toUpperCase() + alotWords.slice(1, alotWords.length);
//window.alert(alotWords);






//----------Assignment 2 Part 2 -------








//----Part 1 - Math and Math Functions-----

//step 1
//var num = window.prompt("enter a number.");
//window.alert(Math.abs(num));

//step 2
//var num = window.prompt("Please enter a decimal.");
//console.log(Math.ceil(num));

//step 3
//var num = window.prompt("Please enter a decimal.");
//console.log(Math.floor(num));

//step 4
//var num1 = window.prompt("Please enter five numbers.");
//var num2 = window.prompt("Please enter four more numbers.");
//var num3 = window.prompt("Please enter three more numbers.");
//var num4 = window.prompt("Please enter two more numbers.");
//var num5 = window.prompt("Last time!");
//window.console.log(Math.min(num1, num2, num3, num4, num5), Math.max(num1, num2, num3, num4, num5));

//step 5
//var num = window.prompt("Please enter a number.");
//window.console.log(Math.sqrt(num));








//------Part 2 - Date and Date Functions-----

//step 6
//var d = new Date();
//window.console.log(d.getDate());

//step 7

//var month = window.prompt("Enter a month to find out how many days it contains.");
//switch (month.toLowerCase()) {
//    case "january":
//		window.console.log(month + " contains 30 days.");
//		break;
//	case "february":
//		window.console.log(month + " contains 28 days");
//		break;
//	case "march":
//		window.console.log(month + " contains 31 days");
//		break;
//    case "apirl":
//		window.console.log(month + " contains 30 days.");
//		break;
//    case "may":
//		window.console.log(month + " contains 31 days.");
//		break;
//    case "june":
//		window.console.log(month + " contains 30 days.");
//		break;
//    case "july":
//		window.console.log(month + " contains 31 days.");
//		break;
//    case "august":
//		window.console.log(month + " contains 30 days.");
//		break;
//    case "september":
//		window.console.log(month + " contains 31 days.");
//		break;
//    case "october":
//		window.console.log(month + " contains 30 days.");
//		break;
//    case "november":
//		window.console.log(month + " contains 31 days.");
//		break;
//    case "december":
//		window.console.log(month + " contains 30 days.");
//		break;
//    default: 
//		window.console.log("you did not enter a month");
//}

//step 8

//var d = new Date;
//window.console.log(d.toDateString().slice(4,8));

//step 9
//var d = new Date();
//var day = (d.toDateString().slice(0, 3));

//if (day === "Sat") {
//    window.console.log("Yes today is a weekend!");
//}
//else if (day === "Sun") {
//    window.console.log("Yes today is a weekend!");
//}

//else {
//    window.console.log("Today is not a weekend.");
//}

//step 10

/*var d = new Date();
var day = d.getDay();
if (day === 1) {
    window.console.log("Yesterday was Sunday.");
} else if (day === 2) {
    window.console.log("Yesterday was Monday.");
} else if (day === 3) {
    window.console.log("Yesterday was Tuesday.");
} else if (day === 4) {
    window.console.log("Yesterday was Wensday.");
} else if (day === 5) {
    window.console.log("Yesterday was Thursday.");
} else if (day === 6) {
    window.console.log("Yesterday was Friday.");
} else if (day === 7) {
    window.console.log("Yesterday was Saterday.");
}*/

//step 11
/*var d = new Date();
var day = d.toDateString();
window.console.log(day.slice(0, 1));*/









//Part 3 - Conditional Logic and Looping Operations

//step 12
//var x = window.prompt("Enter a whole number.");
//var y = window.prompt("Please enter a different whole number.");
//if (x > y) {
//    window.console.log(x + " is the largest number you submitted.");
//}

//    else if (y > x) {
//    window.console.log(y + " is the largest number you submitted.");
//}

//step 13

//step 14
/*var i;
for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        window.console.log(i + " is even");
    } else if (i % 2 !== 0) {
        window.console.log(i + " is odd");
    }
}*/
//step 15
/*var i;
for (i = 1; i <= 100; i++) {
    
    if (i % 5 === 0 && i % 3 === 0) {
        window.console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        window.console.log("Fizz");
    } else if (i % 5 === 0) {
        window.console.log("Buzz");
    } else if (i % 5 !== 0 && i % 3 !== 0) {
        window.console.log(i);
    }
}*/

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game 

//step 1
/*var a = window.confirm("Are you ready to play?");
if (a == true) {
    window.alert("Awesome, our hero is waiting!");
}

else if (a == false) {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}*/


//step 2
/*window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");*/

//step 3
/*var q = window.prompt("Which direction would you like to head (please enter forward, left, or right).");*/

//step 4
/*switch (q) {
    case "forward":
        window.alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
     case "left":
        window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;  
    case "right":
        window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}*/
//step 5
/*var rate = window.prompt("Did you enjoy your adventure? Then help us make our game better by rating us on a scale of 1 to 10.");

if (rate >= 6) {
    window.alert("Thank you, we will continue to make improvements to the game!");
}
else if (rate <= 5) {
    window.alert("Whatever, you weren’t very good at this game anyway");
}*/

//step 6
/*if (rate !== NaN && 1 >= rate <= 10) {
    window.alert("Thank you, we will continue to make improvements to the game!")
}*/









//Part 5 - The “Coin Flip” Game

//step 1
//var coinFlip = Math.random();

//step 2
//var choice = window.prompt("Heads or Tails?").toLowerCase();
//step 3
/*var heads = choice < 0.5;
var tails = choice > 0.5;*/
//step 4
/*if(choice < 0.5 && choice == heads) {
    window.alert("The flip was heads and you chose heads...you win!");
}*/

//step 5
/*else if(choice < 0.5 && choice == tails)
    window.alert("The flip was heads but you chose tails...you lose!");*/

//step 6
/*else if(choice > 0.5 && == heads) {
    window.alert("The flip was tails but you chose heads...you lose!");
}
//step 7
else if(choice > 0.5 && == tails) {
    window.alert("The flip was tails and you chose tails...you win!");
}*/
//step 8




//Part 6 - The “Coin Flip” Game Redux

//step 1
/*var coinFlip;
var i;*/
//step 2 //step 3 //step 4
/*for  (i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("Tails")
    }
}*/






//Part 7 - The “Coin Flip Streak” Game

//step 1
//var coinFlip;
//step 2 //step 3 //step 4 //step 5
/*do {
	coinFlip = Math.round(Math.random());
    
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else if (coinFlip === 1) {
        window.console.log("Tails");
    break; }
} while (coinFlip === 0);*/





//Part 8 – Looping a Triangle 

/*var x = " ";
var i;
for (i = 0; i < 7; i++) {
    window.console.log(x += "#");
}*/



//Part 9 – Odd or Even?
/*var i;
for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        window.console.log(i + " is even");
    } else if (i % 2 !== 0) {
        window.console.log(i + " is odd");
    } else if (i === 0) {
        window.console.log(i + " is even");
    }
}*/
