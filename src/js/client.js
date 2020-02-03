//ES6
//import isEqual from 'lodash/isEqual'
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

//EJEMPLO DE SAMUEL SEMÁFORO
/*const renderLuz = ({
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
    /*const { turnedOnIndex } = state;

    const semaforo = document.createElement('div');
    semaforo.style.backgroundColor = 'black';
    semaforo.style.width = '200px';
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
    console.log("hola");

};


const APP_STATE = {
    turnedOnIndex: 1,
};

const root = document.getElementById('root');

render(root, APP_STATE);*/

const renderCelda=({
	row, 
	col,
	value,
	/*state,
	root,*/
})=>{
	//dupc
	const celda = document.createElement('div');
    celda.style.width = '25px';
    celda.style.height = '25px';
    celda.style.padding='2px';
    celda.style.margin='2px';
    /*celda.style.borderRadius = `${size / 2}px`;*/
    if (value!=0){
    	celda.style.backgroundColor = 'blue';
    }else{celda.style.backgroundColor = 'red';}
    
    return celda;
	/*celda.onclick=()=>{
		if (value===0){
			state[row][col]=state.player1Turn?1:-1;
			state.player1Turn=!state.player1Turn;
			root.innerHTML="";
			render(root, state);
		}
	}*/
}

const render = (mount, state) => {
	let row=0;
	let col=0;
	const gboard = document.createElement('div');
	gboard.style.backgroundColor = 'black';
    gboard.style.width = '200px';
    gboard.style.padding = '25px';
    state.board.map(function(x){
    	x.map(/*function(y){*/
    		(row, col,y)=> renderCelda({
    			row,
    			col, 
    			value:y,
    		}),
    		
    		col++,
    		//console.log(state[row][col]);
    		

    	/*}*/).forEach(
    		celda=> gboard.appendChild(celda),
    	);
    	row++
    	
	});
    /*celda=>gboard.appendChild(celda);*/
    /*for (var i = 0 ; i >= state.board.length; i++) {
    	for (var j = 0; j >= i.length; j++) {
    		(i,j,value)=>renderCelda({
    			i,
    			j,
    			value,
    		}),
    		celda=>gboard.appendChild(celda);
    	}
    }*/
    

    mount.appendChild(gboard);
    
	
}
const OTHELLO_STATE={
	player1Turn:true,
	board:[
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,1,-1,0,0,0],
		[0,0,0,-1,1,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0]
	],
}


const root = document.getElementById('root');

render(root, OTHELLO_STATE);
//console.log(OTHELLO_STATE.board);



