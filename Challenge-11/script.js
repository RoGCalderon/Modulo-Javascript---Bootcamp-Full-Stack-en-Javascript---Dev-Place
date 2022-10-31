//botones
let agregar = document.getElementById('btn-agregar');
let eliminar = document.getElementById('btn-eliminar');

//función del botón para agregar
agregar.addEventListener('click',function(){
    
    let nuevoLi = document.getElementById("new-li").value;
    if(nuevoLi.length>0){
        if(encontrar_li(nuevoLi))
        {
            let li=document.createElement('li');
            li.id=nuevoLi;
            li.innerHTML=nuevoLi;
            document.getElementById("list").appendChild(li);
        }
    }
    return false;
});
    
function encontrar_li(contenido)
{
    var element = document.getElementById("list").getElementsByTagName("li");
    for (var i=0; i<element.length; i++)
    {
        if(element[i].innerHTML==contenido){
            console.log("Elemento repetido. No puede agregarse")
        }
            return false;
    }
    return true;
}




//li.setAttribute('id',input.value);
//li.appendChild(document.createTextNode(input.value));
//lista.appendChild(li);