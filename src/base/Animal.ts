/**
 * Created by lion on 31/10/2016.
 */


import {AnimalTypes} from './AnimalTypes'

class Animal {
    private _type: AnimalTypes;
    private _name: string;


    constructor(type: AnimalTypes, name: string) {
        this._type = type;
        this._name = name;
    }

    move(value: number = 10): void {
        console.log()
    }

    get type(): AnimalTypes {
        return this._type;
    }
    //
    get name(): string {
        return this._name;
    }


}

export default Animal