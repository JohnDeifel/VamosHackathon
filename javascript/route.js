
class Route {
    /**
     * Route class to keep track of important information regarding routes.
     * @param {*} source geo-coordinates of source
     * @param {*} dest geo-coordinates of dest
     * @param {*} routeLine map objects representing route
     * @param {*} dist distance of route in mi
     */
    constructor(source, dest, routeLine, dist, evCost, gasCost) {
        self.source = source;
        self.dest = dest;
        self.routeLine = routeLine;
        self.dist = dist;
        self.evCost = evCost;
        self.gasCost = gasCost;
    }
}