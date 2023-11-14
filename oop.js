class Rectangle{
    constructor (_width, _height, _color) {
        console.log("The Rectangle is being created")
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea () {
        return this.width * this.height
    }

    printDescription () {
        console.log(`I am a Rectangle with a width of ${this.width} and a height of ${this.height} and I am ${this.color}`)
    }
}


class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    get area() {
        return this.width * this.height;
    }

    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width
    } 
}

let myRectangle1 = new Rectangle(5, 4, "Blue");
console.log(myRectangle1.getArea())
myRectangle1.printDescription()
let square = new Square(4);
square.area = 25
console.log(square.width)
