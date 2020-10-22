let sportsOne: string[] = ["Golf", "Cricet", "Tennis", "Swimming"];

// for (let i = 0; i < sportsOne.length ; i++) {
//     console.log(sportsOne[i]);
// }

// Let's use the simplied for loop

for (let tempSport of sportsOne) {
    if (tempSport == "Swimming") {
        console.log(`${tempSport} << my favorite sport!`)
    } else {
        console.log(tempSport);
    }

}

