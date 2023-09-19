//Average MPG per Federal Highway Administration
const carGasMPG = 22.2;
const vanGasMPG = 15.5;
const gallonPrice = 3.88;

const milesPerChargeCar = 405;
const milesPerChargeVan = 348;
const chargePrice = 18;

//Average CO2 emissions in kg per mile according to 8billiontrees.com
const carEmissionsPerMile = .404;
const vanEmissionsPerMile = .485;

//Average CO2 upstream emissions (from electricity production) according to 8billiontrees.com
const evCarEmissions = .085;
const evVanEmissions = .102;

function calculateRouteCosts(evType, gasType, distance) {
    if (evType == "Car") {
        var evCost = (distance / milesPerChargeCar) * chargePrice;
    } else {
        var evCost = (distance / milesPerChargeVan) * chargePrice;
    }

    if (gasType == "Car") {
        var gasCost = (distance / carGasMPG) * gallonPrice;
    } else {
        var gasCost = (distance / vanGasMPG) * gallonPrice;
    }

    return [evCost, gasCost];
};

function calculateEmissions(evType, gasType, distance) {
    if (evType == "Car") {
        var evEmissions = distance * evCarEmissions;
    } else {
        var evEmissions = distance * evVanEmissions;
    }

    if (gasType == "Car") {
        var gasEmissions = distance * carEmissionsPerMile;
    } else {
        var gasEmissions = distance * vanEmissionsPerMile;
    }

    return [evEmissions, gasEmissions];
}