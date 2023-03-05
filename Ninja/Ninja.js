class Ninja {
constructor(nombre, salud, velocidad, fuerza) {
    console.log('constructor');
this.nombre = nombre;
this.salud = salud;
this.velocidad = velocidad;
this.fuerza = fuerza; 
}

sayName () {
    console.log('Nombre:' + this.nombre);

}

showStats () {
    console.log("Stats del Ninja");
    console.log("Salud: " + this.salud )
    console.log("Velocidad: " + this.velocidad )
    console.log("Fuerza: " + this.fuerza )
}

drinkSake(){
    console.log("drinkSake");
    this.salud = this.salud +10
    console.log('Nueva salud: ' + this.salud);
}

}   
const ninja1 = new Ninja("Hyabusa",10, 3 ,3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(); 

 
console.log('parte 2');

class Sensei extends Ninja{
constructor (name, salud, velocidad, fuerza) {
    super(name, salud, velocidad, fuerza);
    this.sabiduria = 10;
}  

speakWisdom() { 

console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
}

}

const superSensei = new Sensei("Master Splinter",200,10,10);
superSensei.drinkSake();
superSensei.speakWisdom();
superSensei.sayName();
superSensei.showStats();
