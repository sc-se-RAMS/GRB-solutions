/* Write a program to satisfy the scenario below.​

Experiment with asynchronous mechanisms callbacks, promises, and async/await to write efficient commented code.​

Scenario: You are preparing lunch for your friend who is coming to your house. You have started making sandwiches and your friend is going to the shop to pick up some crisps.​

Start Preparing: Begin making the sandwiches.​

Asynchronous Handling: Your friend will text you to let you know the outcome of their shopping:​

If the Crisps are Available: Plate up the sandwiches.​

If the Crisps are Not Available: Prepare a salad instead.

Output: 

Either:  

Preparing sandwiches… 

Crisps received  

Plating up the sandwiches… 

Or:  

Preparing sandwiches… 

No crisps available  

Preparing salad… */

//TASK

//logic: using async func as we are waiting to plate up sandwiches dependent on friends actions

/*func for buyingCrips
func buyCrisps =>(){
    if crisps available{
    then return("Crisps received")}
    else {
    return("no crisps available")
}
    }

    async func prepFood() {
    console.log("Preparing sandwiches...")

    use func buyCrisps to decide if we have crisps or not
    if "crisps received"{
    console.log("crisps received")
    console.log("plating up the sandwiches...")
    }
    else {
    console.log("no crisps available")
console.log("preparing salad...");
    }
    }

use await for final steps when calling async func
async func prepFood(){
try{
await buyCrisps()
await prepFood()
} catch(error){
 console.error("Caught error:", error)}
}
*/
function getCrisps(crisps) {
    return new Promise((resolve, reject) => {
      const time = 2000;
      setTimeout(() => {
        if (crisps === "Crisps not available") {
          return reject("No crisps available");
        }
        resolve("crisps received");
      }, time);
    });
  }

  async function prepareFood() {
    console.log("Preparing sandwiches...");

    // use func buyCrisps to decide if we have crisps or not
    try{
      await getCrisps("Crisps not available"); //manually enter your choice whether we have crisps or not
      console.log("crisps received");
      console.log("plating up the sandwiches...");
      // await getCrisps("Crisps not available"); //cannot call both
    } catch(error){
      console.error("Caught error:", error);

      console.log("preparing salad...");
    }
    }

  prepareFood();


  //defining func prepFood twice so the first one gets overwritten
  // async function prepareFood(){
  //   try{
  //   await buyCrisps()
  //   await prepareFood()
  //   } catch(error){
  //    console.error("Caught error:", error)}
  //   }