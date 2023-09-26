// Chapter 21 (Changing Case)

// Q no: 1
// var allLower = userInput.toLowerCase;
// var allLower = userInput.toLowerCase();

// Q no: 2
// x = x.toLowerCase();

// Q no: 3
// y = y.toUpperCase();

// Q no: 4
// var originalString = "Karachi! The City of Lights";
// var lowerCaseString = originalString.toLowerCase();


// Q no: 5
// var arr = ["Karachi","Lahore","Islamabad"]
// var lowerCaseString = arr[0].toLowerCase();

// Q no: 6
// var userInput = prompt("Enter What you want");
// var render = userInput.toUpperCase();
// alert(render);

// Q no: 7
// var cityName = "kaRacHi";
// var firstChar = cityName.slice(0,1).toUpperCase();
// var remainChars = cityName.slice(1).toLowerCase();
// var completeChar = firstChar + remainChars;
// alert(completeChar)


// Chapter 22 - 25 (Strings)

// Q no: 1
// var sameWords = "captain";
// var copyChars = sameWords.slice(1,3);
// console.log(copyChars);

// Q no: 2
// var userInput = prompt("Enter what you want!");
// var inputLength = userInput.length;
// console.log(inputLength);

// Q no: 3
// var str = "elephant"
// var seg = str.slice(2,6);
// console.log(seg);

// Q no: 4
// var usrString = "Welcome to Karachi..!";
// var strLength = usrString.length;

// Q no: 5
// var usrString = "Welcome to Karachi..!";
// var strLength = usrString.length;
// var strSlice = usrString.slice(0,1) + usrString.slice(18);
// alert(strSlice);

// Q no: 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// index = 3
// console.log(indx);

// Q no: 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// index = 16
// console.log(indx);

// Q no: 8
// var text = "Now we have to go";
// var indx = text.lastIndexOf("go");

// Q no: 9
// if (indexNum >= 0 && indexNum < str.length) {

// }

// Q no: 10
// var string = "abcde";
// var indexCheck = string.charAt(2);
// console.log(indexCheck);

// Q no: 11
// var text = "Web and Mobile app Development";
// var cha = text[9];
// console.log(cha);

// Q no: 12
// var str = "Web and Mobile app Development";
// var x = str.charAt(str.length - 1);
// console.log(x);

// Q no: 13
// var string = "Web and Mobile app Development";
// var cha = string.charAt(4);
// console.log(cha);

// Q no: 14
// if (str.charAt(2) === 'i') {
    
// }

// Q no: 15
// var str = "i'mgraphidesigner";
// var charArr = [];
// for (var i = 0; i < str.length; i++) {
//   charArr.push(str.charAt(i));
// }

// Q no: 16
// var str = "Replace the first 1 with one, but not the others 1.";
// var newStr = str.replace("1", "one");

// Q no: 17
// var y = x.replace(/a/g, "z");


// Chapter 26 (Rounding Numbers)

// Q no: 1
// var roundNum = Math.round(3.7);

// Q no: 2
// var origNum = 12.6;
// var roundNum = Math.ceil(origNum);

// Q no: 3
// var origNum = 12.6;
// var roundNum = Math.floor(origNum);

// Q no: 4
// var origNum = 12.6;
// var roundNum = Math.round(origNum);

// Q no: 5
// var num = .5;
// var roundNum = Math.floor(num);


// Chapter 27 (Random Numbers)

// Q no: 1
// var generatedNum = Math.random() * 50;
// console.log(generatedNum);

// Q no: 2
// var num = Math.random();

// Q no: 3
// var rollDice = Math.floor(Math.random() * 6) + 1;
// var result = rollDice;
// console.log("You rolled a " + result);

// Q no: 4
// var coinToss = Math.random();
// var result = "";
// if(coinToss < 0.5){
//     result = "Heads"
// }
// else{
//     result = "Tails"
// }
// console.log(result);


// Chapter 28, 29 (Converting Strings)

// Q no: 1
// var str = "42";
// var integer = Number(str);
// console.log(integer);

// Q no: 2
// var str = "123";
// var integer = Number(str);
// console.log(integer);

// Q no: 3
// var str = "34.54";
// var floatNumber = +str;
// console.log(floatNumber);

// Q no: 5
// var number = 234;
// var str = number.toString();
// console.log(str);

// Q no: 6
// var number = 42;
// var str = number.toString();
// console.log(str);


// Chapter 30 (Controlling the length of decimals)

// Q no: 1
// var num = Math.random();
// var newNum = num.toFixed(4);

// Q no: 2
// var num = Math.random();
// num = parseFloat(num.toFixed(2));

// Q no: 3
// if (num.toFixed(2).toString().length > 4) {
    
//   }

// Q no: 4
// var num = Math.random();
// var newNum = num.toFixed(4);
// alert(newNum)
