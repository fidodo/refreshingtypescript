const carMakers = ["ford", "toyota", "chevy"]
const dates = [new Date(), new Date()]

const carsByMake = [
    ["f150"],
    ["corolla" ],
    ["camara"]
]
// when the array is empty
const carsByMakes: string[][]=[]

// help with inference when extracting values
const cars= carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
carMakers.push(true)

// helps with using array methods
carMakers.map((car:string): string =>{
    return car.toUpperCase()
})

// flexible types
const importantDates:(Date | string)[]= [new Date()]