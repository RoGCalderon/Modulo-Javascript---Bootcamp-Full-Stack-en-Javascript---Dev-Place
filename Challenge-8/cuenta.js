class Cuenta{
    titular;
    cantidad;

    constructor(titular,cantidad){
        this.titular = titular;
        this.cantidad = cantidad;

    }

    mostrar(){
        return ('El titular:'+this.titular+' tiene '+this.cantidad);
    }

    ingresar(cantidad){
        if(cantidad>0){
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad){
        if(this.cantidad - cantidad <0){
            this.cantidad = 0;
        }else{
            this.cantidad -= cantidad; 
        }
    }

    get titular(){
        return this.titular;
    }

    set titular(titular){
        this.titular = this.titular;
    }
    
    get cantidad(){
        return this.cantidad;
    }

    set cantidad(cantidad){
        this.cantidad = this.cantidad;
    }

}