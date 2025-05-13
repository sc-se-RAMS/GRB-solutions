/*A bus containing the following children has set off on a zoo trip.  
Ryan, Brandon, Rebecca, Richard, Jessica, Brian, Antoinne, Grace, Zee, Ibrahim 
The order of where the children have been asked to initially sit in the bus is represented by an Array structure with the back of the bus being the first element (i.e. the left most). 


Set up a ‘bus’ array then carry out the tasks below.  

Ibrahim feels unwell and asks if he can sit at the back of the bus. Move Ibrahim to the back. 

Rebecca is singing and upsetting the rest. To resolve this, move Rebecca to the front of the bus. 

Richard and Antoinne are best friends and are talking loudly across the bus. The teacher has decided it's best to separate them. Move Richard to sit behind Antoinne. 

Ryan wants to sit at the front where he can enjoy the trip more. However, Rebecca must remain right at the front. Rearrange the array to move Ryan directly behind Rebecca. */

//Set up a ‘bus’ array then carry out the tasks below.

const bus = [
  "Ryan",
  "Brandon",
  "Rebecca",
  "Richard",
  "Jessica",
  "Brian",
  "Antoinne",
  "Grace",
  "Zee",
  "Ibrahim",
];

console.log(bus);

//Ibrahim feels unwell and asks if he can sit at the back of the bus. Move Ibrahim to the back.

console.log(bus.reverse());

//Rebecca is singing and upsetting the rest. To resolve this, move Rebecca to the front of the bus. 

bus.splice(bus.indexOf("Rebecca"), 1);
bus.push("Rebecca");
console.log(bus);

//Richard and Antoinne are best friends and are talking loudly across the bus. The teacher has decided it's best to separate them. Move Richard to sit behind Antoinne. 
bus.splice(bus.indexOf("Richard"), 1);
bus.splice(3, 0, "Richard");
console.log(bus);

//Ryan wants to sit at the front where he can enjoy the trip more. However, Rebecca must remain right at the front. Rearrange the array to move Ryan directly behind Rebecca. 

