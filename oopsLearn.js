// 4 pillars of OOPs  --
//  encapsulation    Abstraction   Inheritance   polymorphism

// object has property and methods


// making class using a class literal
// const circle = {
//     radius: 1,
//     location:{
//         x: 1,
//         y:1
//     },
//     draw:()=>{
//         console.log("draw");
//     }
// };

// circle.draw();


// using factory function to make a class
function makeCircle(radius){
    return{
        radius,   // if key and value both are literally same(radius : radius) then just write it ones (in ES6)
        draw : ()=>{
            console.log("just draw for now");
        }
    };
}

//now make a object using factory function 
const firstCircle = makeCircle(5);

// Consructor function
function Square(side){
    console.log('this',this)
    this.side=side,
    this.area=()=>{
        console.log(side*side);
    }
}

const newSquare = new Square(4);
newSquare.area();

