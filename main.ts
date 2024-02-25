// Q1
let userName:string = "kinza";
console.log("hello "+ userName + " would you like to learn python today?");

// Q2
let stdName:string = "ali Khan";
let lowerCaseName:string = stdName.toLowerCase();
let upperCaseName:string = stdName.toUpperCase();
let titleCaseName:string = stdName.split(" ").map((chaar :string) => chaar[0].toUpperCase() + (chaar.length>1 ? chaar.slice(1).toLowerCase() : " ")).join(" ");
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);

// Q3

let quote:string = '"Always remeber your focus determines your reality"';
let myData:string =  + 'George Lucas said ' +  quote;
console.log(myData);

// Q4
let famousPerson:string = "Geroge Lucas";
let myQuote:string = '"Always remeber your focus your reality"';
let myFinalData:string = famousPerson + ' said ' +  quote;
console.log(myFinalData);   

// Q6
let wName: string = "\t \n John Doe \t \n";
console.log(wName);
let strippedName:string = wName.trim();
console.log(strippedName);

// Q7
console.log(5 + 3);  
console.log(10 - 2);  // Subtraction: 10 - 2 = 8
console.log(4 * 2);  
console.log(16 / 2); 

// Q9
let myFavouriteNumber: number = 4;
console.log("my favourite number is " + myFavouriteNumber);

// Q10
// my favourite number is  4 
// author name is George Lucas


// Q11
let myFriends: string[] = ["fariha","sana","aqsa"];
for(let i = 0 ; i<myFriends.length ; i++){
        console.log(myFriends[i]);
}

// Q12
let myFriendsGreetings: string[] = ["fariha","sana","aqsa"];
for(let i = 0 ; i<myFriendsGreetings.length ; i++){
        console.log("hello "+myFriendsGreetings[i]);
}
// Q13

let allVehcicles: String[] = ['mercedes', 'toyota carolla'];
for(let i = 0 ; i<allVehcicles.length ; i++){
    console.log("I would like to own a " + allVehcicles[i]);
}

// Q14
let myGuests: string[] = ["Fariha", "Sana", "Aqsa"];
myGuests.forEach(singleGuest => {
    console.log(' Dear '+ singleGuest + 'I would like to invite you to dinner');
});

// Q15 
let addGuest:string = "Laraib";
myGuests.push(addGuest);
console.log(myGuests);
// or
myGuests.forEach(singleGuest=>{
    console.log("Dear " + singleGuest + " I would like to invite you to dinner ");
})

// Q16
let myOldGuests: string[] = ["Fariha", "Sana", "Aqsa"];

// Add three new guests
let myNewGuests: string[] = ["Laraib", "Beenish", "Kinza"];
myOldGuests = myOldGuests.concat(myNewGuests);

// Print updated invitation messages
myOldGuests.forEach(guest => {
    console.log('Dear ' + guest + ' I would like to invite you to dinner.');
}); 

// add new guest at the begining of list
 myOldGuests.unshift('Yasir');
 console.log(myOldGuests);

//  i am going to add item in the middle of the array

let findIndex: number = Math.floor(myOldGuests.length/2);
console.log(findIndex);
myOldGuests.splice(findIndex, 0, 'Miss Nazia');
console.log(myOldGuests);

myOldGuests.forEach(guest => {
    console.log('Dear ' + guest + ' I would like to invite you to dinner.');
});

// Q17
// i am using my previous variable my myOldGuests
console.log(myOldGuests) ;
for(let i = 0 ; i<myOldGuests.length ; i++){
    if(myOldGuests.length>2){
    let removeGuest = myOldGuests.pop();
    console.log('sorry ' + removeGuest + ' I can not invite you to dinner');
}
}

// message for remainig 2 items
myOldGuests.forEach(guest => {
    console.log('Dear ' + guest + ' I invite you to dinner');
});


// remove last 2 
myOldGuests.splice(0, myOldGuests.length);
console.log("Remaining guests ", myOldGuests);


// Q18
let myPlaces:string[] = ["murree", "sawat" , "mansehra" ,"gilgit" , "chitral", "hunza"];
console.log(myPlaces);
// sorting 
console.log([...myPlaces].sort());
// orignal array
console.log(myPlaces);
// reverse array
console.log([...myPlaces].sort().reverse());

// orignal array
console.log(myPlaces);

// reverse array
console.log(myPlaces.reverse());

// Q19
console.log("total numbers of guestes " + myOldGuests.length);

// Q20 
let listOfThings:string[] = ["rivers","mountains", "country","city"];
console.log(listOfThings);

// Q21
let listOfAllThings: { river: string, mountains: string, country: string } = {
    river: "Indus",
    mountains: "K2",
    country: "Pakistan"
};

// Q28
let userAge: number = 25;

if (userAge < 2) {
    console.log("The person is a baby.");
} else if (userAge >= 2 && userAge < 4) {
    console.log("The person is a toddler.");
} else if (userAge >= 4 && userAge < 13) {
    console.log("The person is a kid.");
} else if (userAge >= 13 && userAge < 20) {
    console.log("The person is a teen.");
} else if (userAge >= 20 && userAge < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Q29
let myFavouriteFruits : string[] = ["grapes","stawberry","peach","apricot"];
console.log(myFavouriteFruits);
if(myFavouriteFruits.includes("oranges")){
    console.log("not really like oranges");
}
if(myFavouriteFruits.includes("grapes")){
    console.log("i realy like grapes");
}
if(myFavouriteFruits.includes("peach")){
    console.log("i realy like peach");
}
if(myFavouriteFruits.includes("apricot")){
    console.log("i realy like apricot");
}

// Q30
let userNames: string[] = ["admin", "kinza", "fariha", "sana", "aqsa"];

for (let user of userNames) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log('Hello' + user + 'thank you for logging in again.');
    }
}

