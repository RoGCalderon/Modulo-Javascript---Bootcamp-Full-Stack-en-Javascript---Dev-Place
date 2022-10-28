class Coche{
    constructor(nombre,motor, rueda, puerta,velocidad,combustible){
        this.nombre = nombre;
        this.motor = motor;
        this.rueda = rueda;
        this.puerta = puerta;
        this.velocidad = velocidad;
        this.combustible = combustible;
    }

    cargarCombustible(){
        this.combustible +=10
    }

    acelerar(){
        this.velocidad+= 10;
        return this;
    }
    frenar(){
        this.velocidad-=10;
        return this;
    }

}

let auto = new Coche('renault', 'nuevo','4 ruedas', '4 puertas', 100,100 );
console.log(auto)
auto.acelerar()
console.log(auto);
