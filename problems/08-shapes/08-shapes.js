/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/ 
function printShape(shape, height, character) {
    
    // Variable that will be used to "make" the shapes
    let placeHolder = '';

    // Checking to make sure each parameter is the correct type
    if (typeof(shape) !== "string") {
      throw new Error("Shape is not of type String");
    } else if (typeof(height) !== "number") {
      throw new Error("Height is not of type Number");
    } else if (typeof(character) !== "string") {
      throw new Error("Character is not of type String");
    }

    // Switch-case used to choose between the three options, and each case uses two for loops
    // to "make" each shape with the given height and character.
    switch (shape) {
      case "Square":
        for (let i = 0; i < height; i++) {
          placeHolder = '';
          for (let j = 0; j < height; j++) {
            placeHolder += character;
          }
          console.log(placeHolder);
        }
        break;
      case "Triangle":
        for (let i = 1; i <= height; i++) {
          for (let j = 1; j <= i; j++) {
            placeHolder += character;
          }
          console.log(placeHolder);
          placeHolder = '';
        }
        break;
      case "Diamond":
        for (let i = 1; i <= height; i++) {
          for (let j = 1; j <= height; j++) {
            if (j == Math.ceil(height / 2)) {
              placeHolder += character;
            } else if (i == Math.ceil(height / 2)) {
              placeHolder += character;
            } else if (i % 2 == 0 && (j == (Math.ceil(height / 2) + 1) || j == (Math.ceil(height / 2) - 1)) ) {
              placeHolder += character;
            } else if (i % 2 == 1 && (j == (Math.ceil(height / 2) + 1) || j == (Math.ceil(height / 2) - 1)) && i != 1 && i != height) {
              placeHolder += character;
            } else if (i % 2 == 1 && (j == (Math.ceil(height / 2) + 2) || j == (Math.ceil(height / 2) - 2)) && i != 1 && i != height) {
              placeHolder += character;
            } else if (i % 2 == 0 && (i == (Math.ceil(height / 2) + 1) || i == (Math.ceil(height / 2) - 1)) && j != 1 && j != height) {
              placeHolder += character;
            } else {
              placeHolder += ' ';
            }
          }
          console.log(placeHolder);
          placeHolder = '';
        }
      break;
  }
}

try {
  printShape("Square", 3, "%");
  printShape("Triangle", 5, "$");
  printShape("Diamond", 9, "*");
  printShape("Diamond", "Yeehaw", 3);
} catch (error) {
  console.log(error);
}