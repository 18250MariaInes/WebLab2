//ES6
import isEqual from 'lodash/isEqual'
/*const sumar=function(a,b){
	return a+b;
  
};*/

//alert(sumar(4,5));
//const x=5;
/*const elementos =[1,2,3];
elementos.push(4);
//funciones arrow
const sumar = (a,b) =>a+b;
//alert(sumar(8,9));



const enteros=[1,2,3,4,5];
//const cuadrados=[];
//console.log(enteros.map(i =>i*i));

console.log(enteros.reduce(sumar, 0));



/* COMO LO HARIA
for (let i=0; i<= enteros.lenght; i++){
	c
}*/

/*const miObjeto={
	x:0,
	y:100,
	w:{
		b='nene',
	},
};
const miOtroObjeto={
	...miObjeto,
	z:-2,
};

//miObjeto.w.push(4);
//console.log(miObjeto['algo bien loco']);
console.log(miOtroObjeto);

const {x,y, w:{b}}=miObjeto;
console.log(b);*/
/*const x={a:1, b:2};
const y={a:1, b:2};*/

/*const root=document.getElementById('root');
console.log(root, typeof(root));*/

/*root.style.height='100px';
root.style.backgroundColor='red';

root.onClick = () =>{
	alert('Si')
};*/


const renderLuz = ({
    color,
    size = 200,
    isTurnedOn = false,
}) => {
    const luz = document.createElement('div');
    luz.style.width = `${size}px`;
    luz.style.height = `${size}px`;
    luz.style.borderRadius = `${size / 2}px`;
    luz.style.backgroundColor = color;
    luz.style.opacity = isTurnedOn ? 1.0 : 0.25;
    return luz;
}


const render = (mount, state) => {
    const { turnedOnIndex } = state;

    const semaforo = document.createElement('div');
    semaforo.style.backgroundColor = 'black';
    /*semaforo.style.width = '200px';*/
    semaforo.style.padding = '25px';
    [
        'red',
        'yellow',
        'green'
    ].map(
        (color, index) => renderLuz({
            color,
            isTurnedOn: index === turnedOnIndex,
        }),
    ).forEach(
        luz => semaforo.appendChild(luz),
    );

    const boton = document.createElement('button');
    boton.style.width = '250px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Siguiente';

    boton.onclick = () => {
        state.turnedOnIndex = (state.turnedOnIndex + 1) % 3;
        root.innerHTML = '';
        render(root, state);
    };

    mount.appendChild(semaforo);
    mount.appendChild(boton);
};


const APP_STATE = {
    turnedOnIndex: 1,
};

const root = document.getElementById('root');

render(root, APP_STATE);


