var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,w) {
    console.log("Solving Rectangle with l = "+l+ " , w = "+w);

    if(l <= 0 || w <= 0 ){
        console.log("Rectangle dimensions must be greater than Zero");
    } else {
        console.log("The area of the rectangle = "+ rect.area(l,w));
        console.log("The perimeter of the rectangle =" + rect.perimeter(l,w));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);