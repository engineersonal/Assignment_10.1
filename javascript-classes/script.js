
//Rectangle class acting as a template to create object
class Rectangle{
    //Constructor to instantiate the rectangle with length and breadth
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    //Calculate the area of the rectangle by multiplying length and breadth
    calculateArea(){
        return this.length * this.breadth;
    }
}

//Instantiate the object for class Rectangle using Constructor
var objRectangle = new Rectangle(10,20);
//Calculate the area of the rectangle
document.write(`Area of the rectangle with length ${objRectangle.length} and breadth ${objRectangle.breadth}: ${objRectangle.calculateArea()}`);


