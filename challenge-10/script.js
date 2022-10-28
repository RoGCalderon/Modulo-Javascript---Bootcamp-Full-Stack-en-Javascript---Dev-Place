//Jerarquía de clases : La clase persona es una clase de orden superior

class Persona{
    
    constructor(nombre, apellido, documento,estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.estadoCivil = estadoCivil;
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

}

let estudiante1 = new Estudiante( "Rocio","Calderón",37586965,"soltera","JavaScript")
console.log(estudiante1)

//---------------------------------------

class Profesor extends Persona{
    constructor(nombre, apellido, documento,estadoCivil,departamento){
        super(nombre, apellido, documento,estadoCivil);
        this.departamento = departamento;
    }
    
}

let profesor1 = new Profesor("Pedro","Alonso",35425965,"casado","Ciencias");
console.log(profesor1);

//----------------------------------------

class Servicio extends Persona{
    constructor(nombre, apellido, documento,estadoCivil,seccion){
        super(nombre, apellido, documento,estadoCivil)
        this.seccion = seccion;
    }

}

let servicio1 = new Servicio("Patricia","Lopez",40256325,"casada", "Biblioteca");
console.log(servicio1);