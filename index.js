let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let heightStatus = false,
    weightStatus = false;

  if (height === "" || isNaN(height) || height <= 0 || height > 200) {
    document.getElementById("heightError").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("heightError").innerHTML = "";
    heightStatus = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0 || weight > 400) {
    document.getElementById("weightError").innerHTML =
      "Please provide a valid weight";
  } else {
    document.getElementById("weightError").innerHTML = "";
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    if (bmi < 18.6) {
      result.innerHTML = `${bmi} → Under weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `${bmi} → Normal`;
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML = `${bmi} → Over weight`;
    } else if (bmi >= 30) {
      result.innerHTML = `${bmi} → Obese`;
    }
  } else {
    alert("Provide a valide value");
    result.innerHTML = "";
  }
});
