class Persona {
    
    constructor(nombre,edad,dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;

    }

    mostrar(){
        return ('sus datos son:'+this.nombre+','+this.apellido+','+this.dni)
    }

    esMayorDeEdad(){
        if(this.edad >=18){
            return true;
        }else{
            return false;
        }
    }

    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        this.nombre = nombre;
    }

    get edad(){
        return this.edad;
    }

    set edad(edad){
        this.edad = edad;
    }

    get dni(){
        return this.dni;
    }

    set dni(dni){
        this.dni = dni;
    }
   
}