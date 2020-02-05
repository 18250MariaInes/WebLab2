//ES6
import flattenDeep from 'lodash/flattenDeep'
import includes from 'lodash/includes'
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

const renderCelda=({
	row, 
	col,
	value,
	state,
})=>{
	//dupc
	const celda = document.createElement('div');
    celda.style.width = '40px';
    celda.style.height = '40px';
    celda.style.padding='2px';
    celda.style.margin='2px';
    celda.style.float='left';
    celda.col=col;
    celda.row=row;
    celda.value=value;
    celda.state=state;
    celda.style.borderRadius = '25px';
    if (value==0){
    	celda.style.backgroundColor = 'grey';
    }else if (value==1){
    	celda.style.backgroundColor = 'black';
    }else{celda.style.backgroundColor = 'white';}
    
    celda.onclick=()=>{
		if (value===0){
			state.board[row][col]=state.player1Turn?1:-1;
			root.innerHTML="";
			render(root, state);
		}else if (value===-1 && state.player1Turn){
			state.board[row][col]=1;
			root.innerHTML="";
			render(root, state);
		}else if (value===1 && !state.player1Turn){
			state.board[row][col]=-1;
			root.innerHTML="";
			render(root, state);
		}
	}
    return celda;
	
}
const sumar = (a = 0, b) => a + b;

const verificarGanador=(state)=>{
	if(!includes(flattenDeep(state.board),0)){
		if (flattenDeep(state.board).reduce(sumar)>0){
			alert('Ganó Jugador1 (Negro)');
		}
		else if(flattenDeep(state.board).reduce(sumar)<0){
			alert('Ganó Jugador2 (Blanco)');
		}else{
			alert('Empate');
		}
	}
	console.log(flattenDeep(state.board).reduce(sumar));

}

const render = (mount, state) => {
	const {player1Turn}=state;
	let colCounter=0;
	const gboard = document.createElement('div');
	gboard.style.backgroundColor = 'green';
    gboard.style.width = '400px';
    gboard.style.height='400px';
    gboard.style.padding = '25px';
    let rowCounter=0;
    state.board.map((x)=>{
    	x.map(
    		(element, index)=> renderCelda({
    			
    			row:rowCounter,
    			col:colCounter, 
    			value:x[colCounter++],
    			state:state,
    			
    		})
    	).forEach(
    		celda=> gboard.appendChild(celda),
    	);
    	rowCounter++
    	colCounter=0;
    	

	});
	const boton = document.createElement('button');
    boton.style.width = '450px';
    boton.style.height = '40px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Ceder turno';
    boton.onclick=()=>{
    	state.player1Turn=!state.player1Turn;
    	root.innerHTML = '';
    	render (root, state);
    	if (state.player1Turn){
    		alert('Turno de Jugador1 (Negro)');
    	}else{
    		alert('Turno de Jugador2 (Blanco)');
    	}
    	
    }
    verificarGanador(state);
    mount.appendChild(gboard);
    mount.appendChild(boton);	
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



