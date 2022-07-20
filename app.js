//Nivell 1 Exercici 1
const sumNums = (num1,num2) => num1 + num2;
console.log(sumNums(1,2));

//Nivell 2 Exercici 1
let insertParam = (param) => {
    const message = {
        param : param
    }; 
    return message
}
console.log(insertParam(true))

//Nivell 2 Exercici 2
class Persona {
    constructor(nom) {
        this.nom = nom;
    }
    dirNom(){
        return this.nom;
    }
}
let persona = new Persona('Ramon');
console.log(persona.dirNom());

//Nivell 3 Exercici 1
class ObjectCreator {
    constructor (){
        if(this.constructor == ObjectCreator){
            throw new Error ('Instance of Abstract class cannot be instantiated');
        }
    }
}

function createObject(param) {
    const object = Object.create(ObjectCreator.prototype);
    object.param = param;
    return object;
}

const pepito1 = createObject('Pepito1')
const pepito2 = createObject('Pepito')

console.log(pepito1);
console.log(pepito2);

//test throw
//const pepito0 = new ObjectCreator(); 