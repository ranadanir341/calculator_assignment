const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q) {
  return new Promise(res => rl.question(q, res));
}

async function calculator() {
  const op = await ask(
    "\nChoose operation:\n" +
    "+  Add\n" +
    "-  Subtract\n" +
    "*  Multiply\n" +
    "/  Divide\n" +
    "pow  Power\n" +
    "sqrt  Square Root\n" +
    "sin  Sine\n" +
    "cos  Cosine\n" +
    "tan  Tangent\n" +
    "log  Log10\n" +
    "ln  Natural Log\n\n> "
  );

  const input = await ask("Enter numbers (comma separated): ");
  const nums = input.split(",").map(Number);
  let result;

  switch (op) {
    case "+":
      result = nums.reduce((a, b) => a + b);
      break;
    case "-":
      result = nums.reduce((a, b) => a - b);
      break;
    case "*":
      result = nums.reduce((a, b) => a * b);
      break;
    case "/":
      result = nums.reduce((a, b) => b !== 0 ? a / b : "Error");
      break;
    case "pow":
      result = Math.pow(nums[0], nums[1]);
      break;
    case "sqrt":
      result = Math.sqrt(nums[0]);
      break;
    case "sin":
      result = Math.sin(nums[0]);
      break;
    case "cos":
      result = Math.cos(nums[0]);
      break;
    case "tan":
      result = Math.tan(nums[0]);
      break;
    case "log":
      result = Math.log10(nums[0]);
      break;
    case "ln":
      result = Math.log(nums[0]);
      break;
    default:
      result = "Invalid operation";
  }

  console.log("\nResult:", result);
  rl.close();
}

calculator();
