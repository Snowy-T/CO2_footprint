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

  // PBerrechnung des CO2-Fußabdrucks
  var electricityCarbonFootprint = electricityUsage * electricityCarbonIntensity;
  var carCarbonFootprint = (carMileage / carEfficiency) * carFuelEmissions;
  var meatCarbonFootprint = meatEmissions * meatConsumption;
  var dairyCarbonFootprint = dairyEmissions * dairyConsumption;
  var totalCarbonFootprint = electricityCarbonFootprint + carCarbonFootprint + meatCarbonFootprint + dairyCarbonFootprint + wasteEmissions;

  // Speichern des CO2-Fußabdrucks in localStorage
  localStorage.setItem("carbonFootprint", totalCarbonFootprint);
  window.location.href = "result.html";
}

function displayResult() {
  var carbonFootprint = localStorage.getItem("carbonFootprint");
  var carbonFootprintElement = document.getElementById("carbon-footprint");
  carbonFootprintElement.textContent = carbonFootprint + " kg CO2";

  var suggestionsList = document.getElementById("suggestions-list");
  var suggestions = [
    "Reduziere den Energieverbrauch, indem du Lichter und Elektronik ausschaltest, wenn sie nicht verwendet werden.",
    "Benutze öffentliche Verkehrsmittel, Fahrgemeinschaften oder wähle energieeffiziente Fahrzeuge.",
    "Wähle pflanzliche Mahlzeiten oder reduziere den Verzehr von Fleisch und Milchprodukten.",
    "Recycle und entsorge Abfälle ordnungsgemäß, um Deponieemissionen zu minimieren.",
    "Pflanze Bäume oder unterstütze Aufforstungsprojekte, um Kohlenstoffemissionen auszugleichen.",
    "Vermeide den übermäßigen Gebrauch von Einwegplastik und verwende stattdessen wiederverwendbare Alternativen.",
    "Reduziere den Wasserverbrauch, indem du Wasserhähne abdrehst und Wasserressourcen schützt.",
    "Fördere erneuerbare Energien, indem du auf Solar- oder Windenergie umsteigst.",
    "Unterstütze lokale Landwirtschaft und kaufe saisonale Produkte, um Transportemissionen zu reduzieren.",
    "Beteilige dich an Umweltschutzinitiativen und teile dein Wissen über nachhaltiges Handeln mit anderen."
  ];

  // NImm 3 zufällige Vorschläge aus der Liste
  var randomSuggestions = getRandomElements(suggestions, 3);

  // Füge die Vorschläge der Liste hinzu
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
