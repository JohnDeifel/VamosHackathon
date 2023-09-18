
class Route {
    /**
     * Route class to keep track of important information regarding routes.
     * @param {*} source geo-coordinates of source
     * @param {*} dest geo-coordinates of dest
     * @param {*} routeLine map objects representing route
     * @param {*} dist distance of route in mi
     */
    constructor(source, dest, routeLine, dist, evCost, gasCost, evEmissions, gasEmissions) {
        this.source = source;
        this.dest = dest;
        this.routeLine = routeLine;
        this.dist = dist;
        this.evCost = evCost;
        this.gasCost = gasCost;
        this.evEmissions = evEmissions;
        this.gasEmissions = gasEmissions;
    }
}