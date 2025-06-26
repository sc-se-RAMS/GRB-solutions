/* Write a program for NPC that calculates the cost of parking based on the time of day. It takes in hour as a parameter and returns cost of parking:
  Hour 0 is deemed as midnight​

  Hour 1 is 1am​

  Hour 13 is 1pm​

  - Hours between midnight to 5am costs 300​ (/)

  - Hours between 5am to 10am costs 350​ (/)

  - Hours between 10am to 3pm costs 500​ (/)

  - Hours between 3pm to 8pm costs 700​ (/)

  - Hours between 8pm to midnight costs 400​ */


function calculateParkingCharge(timeIn, timeOut){

    // const timeIn = new Date().getHours();
    // const timeOut = new Date().getHours();

    //for any other circumstance:
    if (timeIn <0 || timeIn >= 24 || timeOut <0 || timeOut >= 24){
        console.log("Please check your entry and exit time")
    }

    let totalTimeStayed = timeOut - timeIn;

    //for incorrect inputs
    if (totalTimeStayed < 0){
        console.log("Exit time cannot be earlier than entry time")
    }
    
    // console.log(`you stayed for ${totalTimeStayed} hours`);
    let parkingCharge;
    if (timeIn >= 0 && timeOut <= 5) {
        parkingCharge = 300;
        // console.log("Your total charge is 300");

    } else if (timeIn >5 && timeOut <= 10) {
        parkingCharge = 350;
        // console.log("Your total charge is 350");

    } else if (timeIn >10 && timeOut <= 15) {
        parkingCharge = 500;
        // console.log("Your total charge is 500");

    } else if (timeIn >15 && timeOut <= 20) {
        parkingCharge = 700;
        // console.log("Your total charge is 700");

    } else if (timeIn >20 && timeOut <= 24) {
        parkingCharge = 400;
        // console.log("Your total charge is 400")
    } 
    console.log(`Your total car parking charge is ${parkingCharge}`);
    
}


// calculateParkingCharge(9,14); //undefined as hours go beyond range
// calculateParkingCharge(1, 4);
// calculateParkingCharge(-1, 4);//where parking cannot be less than 0




//function to calculate parkingcharges
//define time entered parking
//define time exited parking
//define totaltimestayed parking = time exited - time entered
//e.g. totalhrs= 6 - 3pm will be 3 hrs stayed

//set a 24 hr clock variable
//series of if statements to work out costs

//calculation


// arrange
let timeIn = 9;
let timeOut = 14;
let expectedCharge = undefined;
//act
let result = calculateParkingCharge(timeIn, timeOut);
//assert
if (result === expectedCharge) {
    console.log('Test passed:' + result);
} else {
    console.log(`Test failed. Expected ${expectedCharge}, but got ${result}.`);

}