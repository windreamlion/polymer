/**
 * Created by lion on 31/10/2016.
 */


import Animal from '../base/Animal'
import {AnimalTypes} from '../base/AnimalTypes'
// import Animal = zoo.Animal;

class Dog extends Animal {


    constructor(name: string) {
        super(AnimalTypes.dog, name);
    }


    move(value: number = 40): void {
        super.move(value);
        console.log(`${this.name}:move-${value}:${AnimalTypes[this.type]}`)
    }

// constructor(name:string){
    //     super.constructor('dog',name);
    // }
}

export default Dog;
