
// we can make an obj in js using Function and using backtick
// we dont have concept of classes in js

const Circle = new Function('radius',`
this.side=radius,
this.area=()=>{
    console.log(radius*radius);
}`);

const circle = new Circle(4);
//circle.area();

// we can add keys and methods globally in object ie circle
circle.location = {x:1,y:2};
circle['perimeter'] = {z:20};

delete circle.location;
// let print all avilable keys in obj
for (let key in circle){
    // printing those key values who are not function
    if (typeof circle[key] !=='function')
        console.log(key,circle[key]);
}

const keys=Object.keys(circle);
console.log(keys); 