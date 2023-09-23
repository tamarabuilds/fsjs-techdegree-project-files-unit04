class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    get area() {
        return this.width * this.length;
    }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);


console.log(rect1.area);
const areas = [rect1.area, rect2.area, rect3.area]

console.log(areas)