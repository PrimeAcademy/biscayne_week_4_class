


// INPUTS: 
  // Two Play-Doh colors:
  //   colorOne string -- Example: 'blue'
  //   colorTwo string -- Example: 'green'
  // Desired shape.
  //   shape string -- Example: 'star'
// SIDE-EFFECTS:
  // It console.logs a message to inform that Play-Doh Machine is
  // in-progress.
// OUTPUTS: A string of Play-Doh in a given shape
//          where the colors have been combined.
  //   'We made a blue and green star thing.'
function thePlayDohMachine(colorOne, colorTwo, shape) {
  // This will print some text in the browser console
  // *when the function runs*. (SIDE-EFFECT!)
  console.log('Play-Doh Machine is in-progress! Stay tuned!');

  // Create a new string value, using whatever values were provided as
  // arguments:
  let transformedDoh = `We made a ${colorOne} and ${colorTwo} ${shape} thing.`;

  // Return the value of transformedDoh. (OUTPUT!)
  return transformedDoh;
}

// This calls the thePlayDohMachine function with three arguments
// (INPUTS!), then assigns the function's return value (OUTPUT!)
// in a new variable called playDohOutputOne.
let playDohOutputOne = thePlayDohMachine('blue', 'green', 'star');
console.log('playDohOutputOne is:', playDohOutputOne);

let playDohOutputTwo = thePlayDohMachine('red', 'yellow', 'triangle');
console.log('playDohOutputTwo is:', playDohOutputTwo);
