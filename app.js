let datosAlumno = []

const Alumno = {
    nombre: "Ismael",
    apellido: "chavez",
    edad: 19,
    estado_civil: "soltero",
    sexo: "masculino",
    vivo: true,
    legajo: 58865,
    altura: 1.70,
}

document.getElementById("alumno").innerHTML = `

<ul>
<li>nombre: ${Alumno.nombre}</li>
<li>apellido: ${Alumno.apellido}</li>
<li>edad: ${Alumno.edad}</li>
<li>estado civil: ${Alumno.estado_civil}</li>
<li>sexo: ${Alumno.sexo}</li>
<li>vivo: ${Alumno.vivo === true ? "Amigo vivo" : "Amigo no vivo"}</li>
<li>legajo: ${Alumno.legajo}</li>
<li>altura: ${Alumno.altura}</li>
</ul>

`

const handleSubmit = () => {
    let nombre = document.getElementById("nombre").value
    let FechaNac = document.getElementById("edad").value
    let estado = document.getElementById("civil").value
    let sexo;
    if(document.getElementById("masculino").checked === true) {

        let sexo = "Masculino"
    } else if(document.getElementById("femenino").checked === true) {

        let sexo = "Femenino"
    } else {
        alert("Selecciona tu sexo!")
    }

    let legajo = document.getElementById("legajo").value

let persona = {
    Nombre: "",
    Edad: 0,
    estadoCivil: "",
    Sexo: "",  
    legajo: 0,
}

}

persona.Nombre = nombre
persona.Edad = FechaNac
persona.estadoCivil = estado
persona.Sexo = sexo
persona.legajo = legajo

datosAlumno.push(persona)

console.log(datosAlumno)

limpiar()

document.getElementById("datos").innerHTML += ""

for (let i = 0; i < datosAlumno.length; i++) {
    document.getElementById("datos").innerHTML += `
<ul>
<li>nombre: ${datosAlumno[i].Nombre}</li>
<li>edad: ${datosAlumno[i].Edad}</li>
<li>estado civil: ${datosAlumno[i].estadoCivil}</li>
<li>sexo: ${datosAlumno[i].Sexo}</li>
<li>vivo: ${datosAlumno[i].legajo}</li>
</ul>
`;
};

const limpiar = () => {
document.getElementById("nombre").value = ""
document.getElementById("edad").value = 0
document.getElementById("civil").value = ""
document.getElementById("masculino").value = ""
document.getElementById("femenino").value = ""
document.getElementById("legajo").value = ""

}