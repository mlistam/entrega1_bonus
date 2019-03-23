const {cursos} = require ('./mostrar');
const express = require('express')
const app = express()
 
const datos = {
	id_curso: {
		demand: true,
		nombre: 'Id del curso'
	},
	nombre: {
		demand: true,
		nombre: 'Nombre'
	},
	cedula: {
		demand: true,
		nombre: 'Cedula'
	},
	inscripcion: {
		default: 'No'
	}
	
}

const argv = require('yargs')
			.command('seleccionar', 'Ingrese los datos requeridos del curso a seleccionar', datos)
			.argv;

let texto1='';
let texto2='';

let mostrar = () => {
	texto1='Cursos:</br>';
	for (var i in cursos) {
			texto1 = texto1 +
			'ID: '+cursos[i].id+'</br>'+
			'Nombre Curso: '+cursos[i].nombre+'</br>'+
			'Duracion: '+cursos[i].duracion+'</br>'+
			'Valor: '+cursos[i].valor+'</br></br>';   
	}
}

if (argv.id_curso==undefined) {
	mostrar(cursos);
}

let curso = cursos.find( cursoSel => cursoSel.id == argv.id_curso);

if (curso) {
	texto1 = 'El curso seleccionado es: '+ curso.nombre + '</br>';
	texto2 = texto2 +
		'ID: '+curso.id+'</br>'+
		'Nombre Curso: '+curso.nombre+'</br>'+
		'Duracion: '+curso.duracion+'</br>'+
		'Valor: '+curso.valor+'</br>'+
		'Nombre Estudiante: '+argv.nombre+'</br>'+
		'Cedula:'+argv.cedula;
	if (argv.inscripcion == 'Si') {
	    console.log ('La inscripción al curso ' + curso.nombre + ' ha sido exitosa');	
	}	
}
else if (argv.id_curso != undefined) {
	console.log ('No se encontro el ID del curso:', argv.id_curso);	
	mostrar(cursos);
}
app.get('/', function (req, res) {
	res.send('<b>'+texto1+'</b><br><p>'+texto2+'</p>')
})
 
app.listen(3000);	



