"use strict"

//Task #1
const arr1 = ['a', 'b', 'c', 'd']
console.log(`${arr1[0]} + ${arr1[1]}, ${arr1[2]} + ${arr1[3]}`)

//Task #2
const arr2 = [2,5,3,9]
let result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3]
console.log(result2)

//Task #3
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
console.log(arr3[1][0])

//Task #4
const obj4 = {
    js:["jQuery", "Angular"],
    php: "hello",
    css: "world"
}
console.log(obj4.js[0])

//Task #5
let result5 = []
function pushXFunc (arg, amount) {
    for (let i = 0; i < 5; i++){
        result5[i] = arg.repeat(i+1)
    }
    return result5
}
console.log(pushXFunc("x", 5))

//Task #6

let result6 = []
for (let i = 1; i <= 5; i++){
    result6[i-1] = i.toString().repeat(i)
}
console.log(result6)

//Task #7
const arr7 = []

function arrayFill (value, quant) {
    for (let i = 0; i < quant; i++) {
        arr7.push(value)
    }
    return arr7
}

console.log(arrayFill("x", 5))

//Task #8
const arr8 = [1,2,3,4,5,6,7,8,9]
let result8 = null
let i8 = 0
for (i8; i8 < arr8.length; i8++) {
    if (result8 <= 10) {
        result8 += arr8[i8]
    }   else {
        break
    }
}

console.log(`Для превышения числа 10, необходимо ${i8} элементов`)

//Task #9
const arr9 = [1,2,3,4,5]
const arr9Res = []
for (let i = arr9.length-1; i >= 0; i--) {
    arr9Res.push(arr9[i])
}
console.log(arr9Res)

//Task #10
const arr10 = [[1,2,3],[4,5],[6]]
let result10 = null

for (let i = 0; i < arr10.length; i++) {
    for (let c = 0; c < arr10[i].length; c++) {
        if (Array.isArray(arr10[i])) {
            result10 += arr10[i][c]
        }
    }
}

console.log(result10)

//Task #11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let result11 = null

for (let i = 0; i < arr11.length; i++) {
    for (let c = 0; c < arr11[i].length; c++) {
        for (let a = 0; a < arr11[i].length; a++) {
                if (Array.isArray(arr11[i][c])) {
                    result11 += arr11[i][c][a]
            }
        }
    }
}

console.log(result11)