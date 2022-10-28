//Jerarquía de clases : La clase persona es una clase de orden superior

class Persona{
    
    constructor(nombre, apellido, documento,estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.estadoCivil = estadoCivil;
    }

    cambioEstado(value){
        this.estadoCivil = value;
    }

}

//--------------------------------

//Polimorfismo
class Empleado extends Persona{

    constructor(nombre, apellido, documento,estadoCivil,incorporacion,despacho){
        super(nombre, apellido, documento,estadoCivil)
        this.incorporacion = incorporacion;
        this.despacho = despacho;
    }
    reasignarDespacho(value){
        this.despacho = value;
    }
    
}

let empleado1 = new Empleado ("Angela","Pereira",35203965,'casada', 2010, 4);
console.log(empleado1);
console.log(empleado1.despacho);

//-------------------------------------

class Estudiante extends Persona{
    constructor(nombre, apellido, documento,estadoCivil,curso){
        super(nombre, apellido, documento,estadoCivil);
        this.curso = curso;
    }
    nuevoCurso(value){
        this.curso = value;
    }
}

let estudiante1 = new Estudiante( "Rocio","Calderón",37586965,"soltera","JavaScript")
console.log(estudiante1)

//---------------------------------------

class Profesor extends Empleado{
    constructor(nombre, apellido, documento,estadoCivil,incorporacion,despacho,departamento){
        super(nombre, apellido, documento,estadoCivil,incorporacion,despacho);
        this.departamento = departamento;
    }
    cambioDepartamento(value){
        this.departamento = value;
    }
    
}

let profesor1 = new Profesor("Pedro","Alonso",35425965,"casado","Ciencias");
console.log(profesor1);

//----------------------------------------

class Servicio extends Empleado{
    constructor(nombre, apellido, documento,estadoCivil,incorporacion,despacho,seccion){
        super(nombre, apellido, documento,estadoCivil,incorporacion,despacho)
        this.seccion = seccion;
    }

}

let servicio1 = new Servicio("Patricia","Lopez",40256325,"casada", "Biblioteca");
console.log(servicio1);
