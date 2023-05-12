// super class or parent class
class Vehicle {
    // public drive():void{
    //     console.log('Vehicle drives');
    // }
    constructor(public color: string){}

    //method honk
    public honk():void{
        console.log('Vehicle honk');
    }
}

// instance of a vehicle 
const vehicle = new Vehicle("orange");
console.log(vehicle.color)

class Car extends Vehicle{
    constructor(public wheels: number, color:string){
        super(color);
    }

    private drive(): void {
        console.log('Car drives');
    }
    startDrivingProcess():void{
        this.drive()
    }
}


// vehicle.drive();
vehicle.honk()

const car= new Car(4, "red")
car.startDrivingProcess()
car.honk()