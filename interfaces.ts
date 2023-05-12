interface Reportable {
    summary():string
}


const oldCivic = {
    name: "civic", 
    year:new Date(),
    broken:true,
    summary():string {
        return `Name: ${this.name}`
    }
}

const drinks ={
    color:"brown",
    sugar:40,
    summary():string{
    return `My drink has ${this.sugar} grams of sugar`
}
}

const printSummary =(vehicle:Reportable):void =>{
    console.log(vehicle.summary())
}

printSummary(oldCivic)
printSummary(drinks)