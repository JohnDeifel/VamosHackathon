
function updateUI(route) {
    // Get references to the text boxes and the update button

    var routeInfo = document.getElementById("routeInfo");
    routeInfo.textContent = "Distance (mi): " + route.dist.toFixed(2) + ", EV CO2 Emissions (kg): " + route.evEmissions.toFixed(2)
    + ", Gas CO2 Emmisions (kg): " + route.gasEmissions.toFixed(2) + ", EV Cost ($): " + route.evCost.toFixed(2) + ", Gas Cost ($): " + route.gasCost.toFixed(2);
    
    var evTotalEmissions = document.getElementById("evCO2Total");
    var evEmissions = parseFloat(localStorage.getItem("totalEVEmissions"));
    evEmissions = evEmissions.toFixed(2);  
    evTotalEmissions.textContent = "CO2 Used by EV (kg): " + evEmissions;

    var gasTotalEmissions = document.getElementById("gasCO2Total");
    gasTotalEmissions.textContent = "CO2 Used by GV (kg): " + parseFloat(localStorage.getItem("totalGasEmissions")).toFixed(2);

    var evCostMsg = document.getElementById("evChargeTotal");
    evCostMsg.textContent = "USD Spent on Charging: " + parseFloat(localStorage.getItem("totalEVCost")).toFixed(2);

    var gasCostMsg = document.getElementById("gasTotal");
    gasCostMsg.textContent = "USD Spent on Gas: " + parseFloat(localStorage.getItem("totalGasCost")).toFixed(2);
}

function resetUI() {
    var routeInfo = document.getElementById("routeInfo");
    routeInfo.textContent = "Please select an initial route.";

    var evTotalEmissions = document.getElementById("evCO2Total");
    var evEmissions = parseFloat(localStorage.getItem("totalEVEmissions"));
    evEmissions = evEmissions.toFixed(2);  
    evTotalEmissions.textContent = "CO2 Used by EV (kg): " + evEmissions;

    var gasTotalEmissions = document.getElementById("gasCO2Total");
    gasTotalEmissions.textContent = "CO2 Used by GV (kg): " + parseFloat(localStorage.getItem("totalGasEmissions")).toFixed(2);

    var evCostMsg = document.getElementById("evChargeTotal");
    evCostMsg.textContent = "USD Spent on Charging: " + parseFloat(localStorage.getItem("totalEVCost")).toFixed(2);

    var gasCostMsg = document.getElementById("gasTotal");
    gasCostMsg.textContent = "USD Spent on Gas: " + parseFloat(localStorage.getItem("totalGasCost")).toFixed(2);

}
