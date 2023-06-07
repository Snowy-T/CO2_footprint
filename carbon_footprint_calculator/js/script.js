function calculateCarbonFootprint() {
  var electricityUsage = parseFloat(document.getElementById("electricity-usage").value);
  var electricityCarbonIntensity = parseFloat(document.getElementById("electricity-carbon-intensity").value);
  var carMileage = parseFloat(document.getElementById("car-mileage").value);
  var carEfficiency = parseFloat(document.getElementById("car-efficiency").value);
  var carFuelEmissions = parseFloat(document.getElementById("car-fuel-emissions").value);
  var meatEmissions = parseFloat(document.getElementById("meat-emissions").value);
  var dairyEmissions = parseFloat(document.getElementById("dairy-emissions").value);
  var meatConsumption = parseFloat(document.getElementById("meat-consumption").value);
  var dairyConsumption = parseFloat(document.getElementById("dairy-consumption").value);
  var wasteEmissions = parseFloat(document.getElementById("waste-emissions").value);

  // Perform the carbon footprint calculation
  var electricityCarbonFootprint = electricityUsage * electricityCarbonIntensity;
  var carCarbonFootprint = (carMileage / carEfficiency) * carFuelEmissions;
  var meatCarbonFootprint = meatEmissions * meatConsumption;
  var dairyCarbonFootprint = dairyEmissions * dairyConsumption;
  var totalCarbonFootprint = electricityCarbonFootprint + carCarbonFootprint + meatCarbonFootprint + dairyCarbonFootprint + wasteEmissions;

  // Display the result on the result.html page
  localStorage.setItem("carbonFootprint", totalCarbonFootprint);
  window.location.href = "result.html";
}

function displayResult() {
  var carbonFootprint = localStorage.getItem("carbonFootprint");
  var carbonFootprintElement = document.getElementById("carbon-footprint");
  carbonFootprintElement.textContent = carbonFootprint + " kg CO2";

  var suggestionsList = document.getElementById("suggestions-list");
  var suggestions = [
    "Reduce energy consumption by turning off lights and electronics when not in use.",
    "Use public transportation, carpool, or choose fuel-efficient vehicles.",
    "Opt for plant-based meals or reduce meat and dairy consumption.",
    "Recycle and properly dispose of waste to minimize landfill emissions.",
    "Plant trees or support reforestation initiatives to offset carbon emissions."
  ];

  // Generate three random suggestions from the array
  var randomSuggestions = getRandomElements(suggestions, 3);

  // Display the random suggestions on the page
  randomSuggestions.forEach(function (suggestion) {
    var li = document.createElement("li");
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });
}

function getRandomElements(array, count) {
  var shuffled = array.slice(0);
  var i = array.length;
  var min = i - count;
  var temp;
  var index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
}

document.addEventListener("DOMContentLoaded", function () {
  displayResult();
});
