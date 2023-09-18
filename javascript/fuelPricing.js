//Average MPG per Federal Highway Administration
const carGasMPG = 24.2;
const vanGasMPG = 17.5;
const gallonPrice = 3.58;

const milesPerChargeCar = 405;
const milesPerChargeVan = 348;
const chargePrice = 14;

function calculateRouteCosts(evType, gasType, distance) {
    if (evType == "Car") {
        evCost = (distance / milesPerChargeCar) * chargePrice;
    } else {
        evCost = (distance / milesPerChargeVan) * chargePrice;
    }

    if (gasType == "Car") {
        gasCost = (distance / carGasMPG) * gallonPrice;
    } else {
        gasCost = (distance / vanGasMPG) * gallonPrice;
    }

    return [evCost, gasCost];
}
