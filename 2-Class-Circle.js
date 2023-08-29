class Circle{
    constructor(radius=1.0, color='red'){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(){
        this.radius = radius;
    }
    getColor(){
        return this.getColorl
    }
    setColor(){
        this.color=color;
    }
    toString(){
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }

}
//Create an instances of circle class
let circle1 = new Circle();
console.log(circle1.toString());

//Area and Circumference of the circle
console.log(`Area : `,circle1.getArea());
console.log('Circumference : ', circle1.getCircumference());