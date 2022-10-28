class Ventana{
    estaAbierta;
    
    constructor(){
        this.estaAbierta = true;
    
    }

    abrirVentana(){
        this.estaAbierta = true;
    }

    cerrarVentana(){
        this.estaAbierta = false;
    }
}