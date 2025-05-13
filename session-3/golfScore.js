//Return the correct phrase based on strokes and par.
/*
When strokes​: Expected phrase​

1​ :Hole in one​

<= par - 2 ​:Eagle ​

par - 1 ​:Birdie​

par​ :Par​

par  + 1​ :Bogey​

par + 2​ :Double Bogey​

>= par + 3 :Quit​ */

const shotNames = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];

const par = 4;

const strokes = 19;

if (strokes == 1){
    console.log(shotNames[0]);
} 
else if (strokes <= par - 2){
    console.log(shotNames[1]);
} 
else if (strokes == par - 1){
    console.log(shotNames[2])
} 
else if (strokes == par){
    console.log(shotNames[3]);
} 
else if (strokes == par  + 1){
    console.log(shotNames[4]);
} 
else if (strokes == par + 2){
    console.log(shotNames[5]);
} 
else{
    console.log(shotNames[6]);
}
