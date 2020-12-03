var rect = require('./rectangle');

function solveRect(l,w) {
    console.log("Solving Rectangle with l = "+l+ " , w = "+w);

    rect(l, w, (err, result) => {
        if(err){
            console.log("Error: "+ err.message);
        } else {
            console.log("Result: The Area of the rectangle with dimensions l: "+ l + ", w: "+ w +" = " + result.area());
            console.log("Result: The Perimeter of the rectangle with dimensions l: "+ l + ", w: "+ w +" = " + result.perimeter());
        }
    })
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);