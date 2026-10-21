/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(input) {
  //variable declaration
  let output = "";
  let change = 0;

  //input cleaning
  let cleanInput = Number(
    input.toString().replace("$", "").replaceAll(",", ""),
  );

  //input validation
  if (!Number.isFinite(cleanInput)) {
    return "Error: input was not a number";
  }
  const regex = /^\d+(\.\d{1,2})?$/;
  if (!regex.test(cleanInput.toString())) {
    return "Error: input had more than 2 decimal points";
  }
  if (cleanInput > 100.0) {
    return "Error: input too large";
  }

  //compute number of dollars
  const dollars = Math.trunc(cleanInput);
  cleanInput = cleanInput - dollars;
  //console.log(dollars + " dollars");

  //inflate input to make division less problematic
  cleanInput = cleanInput * 100;
  //compute number of quarters
  const quarters = (cleanInput / 25) | 0; // bitwise OR forces integer math and removes odd division behavior
  cleanInput = cleanInput - quarters * 25;
  //console.log(quarters + " quarters");
  //compute number of dimes
  const dimes = (cleanInput / 10) | 0; // bitwise OR forces integer math and removes odd division behavior
  cleanInput = cleanInput - dimes * 10;
  //console.log(dimes + " dimes");
  //compute number of nickels
  const nickels = (cleanInput / 5) | 0; // bitwise OR forces integer math and removes odd division behavior
  cleanInput = cleanInput - nickels * 5;
  //console.log(nickels + " nickels");
  //console.log(cleanInput + " remaining");
  //assign pennies
  const pennies = (cleanInput / 1) | 0;
  //console.log(pennies + " pennies");

  //construct output string
  if (dollars > 1) {
    output = output + dollars.toString() + " dollars";
  } else if (dollars === 1) {
    output = output + "1 dollar";
  }
  if (quarters > 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + quarters.toString() + " quarters";
  } else if (quarters === 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + "1 quarter";
  }
  if (dimes > 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + dimes.toString() + " dimes";
  } else if (dimes === 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + "1 dime";
  }
  if (nickels > 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + nickels.toString() + " nickels";
  } else if (nickels === 1) {
    if (output !== "") {
      output = output + ", ";
    }
    output = output + "1 nickel";
  }
  if (pennies > 1) {
    if (output !== "") {
      output = output + ", and ";
    }
    output = output + pennies.toString() + " pennies";
  } else if (pennies === 1) {
    if (output !== "") {
      output = output + ", and ";
    }
    output = output + "1 penny";
  }

  return output;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(0.25));
console.log(calculateChange(0.1));
console.log(calculateChange(0.05));
console.log(calculateChange(0.01));
console.log(calculateChange("steve"));
console.log(calculateChange("$100"));
console.log(calculateChange(100));
console.log(calculateChange("100.000"));
console.log(calculateChange(100.1));
console.log(calculateChange(100.12));
console.log(calculateChange(100.123));
console.log(calculateChange("1,000"));
