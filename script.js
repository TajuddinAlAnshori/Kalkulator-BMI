const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let gender = document.querySelector("#gender").value;

  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight!");
    return;
  }

  // Convert height from cm to meters
  height = height / 100; 

  // BMI = weight in KG / (height in meters * height in meters)
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2); // Limit BMI result to 2 decimal places

  // Display BMI result
  document.querySelector("#result").innerHTML = BMI;

  // Calculate ideal weight based on gender
  let idealWeight;
  if (gender === "male") {
    idealWeight = 22 * (height * height); // For males
  } else {
    idealWeight = 21 * (height * height); // For females
  }
  idealWeight = idealWeight.toFixed(2); // Limit ideal weight result to 2 decimal places

  // Determine BMI status
  let status = "";
  if (BMI < 18.5) {
    status = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    status = "Normal weight";
  } else if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }

  // Display BMI status and ideal weight
  document.querySelector(
    ".comment"
  ).innerHTML = `Which means you are <span id="comment">${status}</span>. Your ideal weight is around <span id="idealWeight">${idealWeight} kg</span>.`;

  // Make sure the result section is visible
  const resultDiv = document.querySelector(".result");
  resultDiv.classList.add("show");
});
