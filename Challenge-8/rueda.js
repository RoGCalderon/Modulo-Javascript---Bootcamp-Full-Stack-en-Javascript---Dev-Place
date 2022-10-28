class Rueda{
    
    constructor(estado){
        this.estado = estado;
    }

    inflarRueda(){
        if(this.estado === desinflada){
            return 'Se infló la rueda';
        }

    }

    desinflarRueda(){
        if(this.estado === inflada){
            return 'Se desinfló la rueda';
        }
    }
}

let ruedita = new Rueda ('inflada');