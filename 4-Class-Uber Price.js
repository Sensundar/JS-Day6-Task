class UberPrice {
    constructor(baseFare, costPerKilometer, costPerminute){
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerminute = costPerminute;
    }
    calculatePrice(distanceInKm, timeInMinutes){
        let distanceCost = distanceInKm*this.costPerKilometer;
        let timeCost = timeInMinutes*this.costPerminute;
        let totalCost = this.baseFare+distanceCost+timeCost;
        return totalCost;
    }
}
//create an instances of uberPrice class
let calculator = new UberPrice(200, 15, 3);
//calculate price for 15km ride and 20mins
let fare = calculator.calculatePrice(15, 30)
console.log(`Uber Ride Price : Rs.${fare}`)