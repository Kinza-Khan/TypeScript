var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q1
var userName = "kinza";
console.log("hello " + userName + " would you like to learn python today?");
// Q2
var stdName = "ali Khan";
var lowerCaseName = stdName.toLowerCase();
var upperCaseName = stdName.toUpperCase();
var titleCaseName = stdName.split(" ").map(function (chaar) { return chaar[0].toUpperCase() + (chaar.length > 1 ? chaar.slice(1).toLowerCase() : " "); }).join("");
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);
// Q3
var quote = '"Always remeber your focus determines your reality"';
var myData = +'George Lucas said ' + quote;
console.log(myData);
// Q4
var famousPerson = "Geroge Lucas";
var myQuote = '"Always remeber your focus your reality"';
var myFinalData = famousPerson + ' said ' + quote;
console.log(myFinalData);
// Q6
var wName = "\t \n John Doe \t \n";
console.log(wName);
var strippedName = wName.trim();
console.log(strippedName);
// Q7
console.log(5 + 3);
console.log(10 - 2); // Subtraction: 10 - 2 = 8
console.log(4 * 2);
console.log(16 / 2);
// Q9
var myFavouriteNumber = 4;
console.log("my favourite number is " + myFavouriteNumber);
// Q10
// my favourite number is  4 
// author name is George Lucas
// Q11
var myFriends = ["fariha", "sana", "aqsa"];
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
// Q12
var myFriendsGreetings = ["fariha", "sana", "aqsa"];
for (var i = 0; i < myFriendsGreetings.length; i++) {
    console.log("hello " + myFriendsGreetings[i]);
}
// Q13
var allVehcicles = ['mercedes', 'toyota carolla'];
for (var i = 0; i < allVehcicles.length; i++) {
    console.log("I would like to own a " + allVehcicles[i]);
}
// Q14
var myGuests = ["Fariha", "Sana", "Aqsa"];
myGuests.forEach(function (singleGuest) {
    console.log(' Dear ' + singleGuest + 'I would like to invite you to dinner');
});
// Q15 
var addGuest = "Laraib";
myGuests.push(addGuest);
console.log(myGuests);
// or
myGuests.forEach(function (singleGuest) {
    console.log("Dear " + singleGuest + " I would like to invite you to dinner ");
});
// Q16
var myOldGuests = ["Fariha", "Sana", "Aqsa"];
// Add three new guests
var myNewGuests = ["Laraib", "Beenish", "Kinza"];
myOldGuests = myOldGuests.concat(myNewGuests);
// Print updated invitation messages
myOldGuests.forEach(function (guest) {
    console.log('Dear ' + guest + ' I would like to invite you to dinner.');
});
// add new guest at the begining of list
myOldGuests.unshift('Yasir');
console.log(myOldGuests);
//  i am going to add item in the middle of the array
var findIndex = Math.floor(myOldGuests.length / 2);
console.log(findIndex);
myOldGuests.splice(findIndex, 0, 'Miss Nazia');
console.log(myOldGuests);
myOldGuests.forEach(function (guest) {
    console.log('Dear ' + guest + ' I would like to invite you to dinner.');
});
// Q17
// i am using my previous variable my myOldGuests
console.log(myOldGuests);
for (var i = 0; i < myOldGuests.length; i++) {
    if (myOldGuests.length > 2) {
        var removeGuest = myOldGuests.pop();
        console.log('sorry ' + removeGuest + ' I can not invite you to dinner');
    }
}
// message for remainig 2 items
myOldGuests.forEach(function (guest) {
    console.log('Dear ' + guest + ' I invite you to dinner');
});
// remove last 2 
myOldGuests.splice(0, myOldGuests.length);
console.log("Remaining guests ", myOldGuests);
// Q18
var myPlaces = ["murree", "sawat", "mansehra", "gilgit", "chitral", "hunza"];
console.log(myPlaces);
// sorting 
console.log(__spreadArray([], myPlaces, true).sort());
// orignal array
console.log(myPlaces);
// reverse array
console.log(__spreadArray([], myPlaces, true).sort().reverse());
// orignal array
console.log(myPlaces);
// reverse array
console.log(myPlaces.reverse());
// Q19
console.log("total numbers of guestes " + myOldGuests.length);
// Q20 
var listOfThings = ["rivers", "mountains", "country", "city"];
console.log(listOfThings);
// Q21
var listOfAllThings = {
    river: "Indus",
    mountains: "K2",
    country: "Pakistan"
};
// Q28
var userAge = 25;
if (userAge < 2) {
    console.log("The person is a baby.");
}
else if (userAge >= 2 && userAge < 4) {
    console.log("The person is a toddler.");
}
else if (userAge >= 4 && userAge < 13) {
    console.log("The person is a kid.");
}
else if (userAge >= 13 && userAge < 20) {
    console.log("The person is a teen.");
}
else if (userAge >= 20 && userAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Q29
var myFavouriteFruits = ["grapes", "stawberry", "peach", "apricot"];
console.log(myFavouriteFruits);
if (myFavouriteFruits.includes("oranges")) {
    console.log("not really like oranges");
}
if (myFavouriteFruits.includes("grapes")) {
    console.log("i realy like grapes");
}
if (myFavouriteFruits.includes("peach")) {
    console.log("i realy like peach");
}
if (myFavouriteFruits.includes("apricot")) {
    console.log("i realy like apricot");
}
// Q30
var userNames = ["admin", "kinza", "fariha", "sana", "aqsa"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var user = userNames_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log('Hello' + user + 'thank you for logging in again.');
    }
}
