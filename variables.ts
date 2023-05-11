let apples:number = 5
let speed: string = "fast"
let hasName:boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built object
let now: Date = new Date()


// Array
let colors: Array<string> = ["red", "green", "blue"]
let color: string[]= ["red", "green", "black"]
let myNumbers: number[]= [1, 2]
let truths: boolean[]= [false, true]

// classes
class Car {}
let car: Car = new Car()

// object litral
let point: {x:number; y:number} = {
    x:10,
    y: 20
}

// function
const logNumber: (i: number) => void =(i: number)=>{
    console.log(i)
}

// when to use annontations
// 1) Functions that returns the any type
const json = "{'x':20 , 'y': 30}"
const jsonObject:{x:number; y:number} = JSON.parse(json)
console.log(jsonObject)

// 2) when we declare a variable on one line 
// and initialise it later

let words =["red", "green", "blue"]
let foundWord: boolean; 

for (let i=0; i < words.length; i++){
    if (words[i] === "red"){
        foundWord=true
    }
}

//3) Variable which type cannot be infered correctly
let numbers = [-19, -2, 12]
let minNumber: number;

for (let i=0; i< numbers.length; i++){
    if(numbers[i] < 0){
        minNumber = numbers[i]
    }
}