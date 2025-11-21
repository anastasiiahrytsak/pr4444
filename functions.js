console.log("Lesson about functions")

function simpleSquare(x) {
    return x * x
}

function mathSquare(x) {
    return Math.pow (x, 2)
}

function simpleCub(x) { 
    return x * x * x
}

function mathCub(x) {
    return Math.pow (x, 3)
}

function doMath(functionToExecute, param) { 
    return functionToExecute(param)
}

console.log("Number in simple square:", simpleSquare(6)) 
console.log("Number in math square:", mathSquare(5)) 
console.log("Number in simple cub:", simpleCub(3))
console.log("Number in math cub:", mathCub(10))
console.log("Number in second simple cub:",doMath(simpleCub, 8))

        //const a = simpleSquare(2)
        //const b = mathSquare(5)
        //const c = simpleCub(2)
        //const d = mathCub(4)
        //const e = doMath (simpleCub, 8)
        
        //console.log("Number in simple square:",a) 
        //console.log("Number in math square:", b) 
        //console.log("Number in simple cub:", c)
        //console.log("Number in math cub:", d)
        //console.log("Number in second simple cub:",e)