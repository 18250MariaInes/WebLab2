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

const renderCelda=({
	row, 
	col,
	value,
	state,/*
	root,*/
})=>{
	//dupc
	//console.log(row);
	const celda = document.createElement('div');
    celda.style.width = '30px';
    celda.style.height = '30px';
    celda.style.padding='2px';
    celda.style.margin='2px';
    celda.style.float='left';
    celda.col=col;
    celda.row=row;
    celda.value=value;
    celda.state=state;
    celda.style.borderRadius = '18px';
    if (value==0){
    	celda.style.backgroundColor = 'grey';
    }else if (value==1){
    	celda.style.backgroundColor = 'white';
    }else{celda.style.backgroundColor = 'black';}
    
    celda.onclick=()=>{
    	/*celda.style.backgroundColor='red';
		console.log(celda.value, celda.row, celda.col);*/
		if (value===0){
			state.board[row][col]=state.player1Turn?1:-1;
			//state.player1Turn=!state.player1Turn;
			root.innerHTML="";
			//console.log("hola de celda");
			render(root, state);
		}
		//console.log(state.board);
	}
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

const verificarGanador=(state)=>{
	

}

const render = (mount, state) => {
	const {player1Turn}=state;

	//const {board}=state;
	
	let colCounter=0;
	const gboard = document.createElement('div');
	gboard.style.backgroundColor = 'green';
    gboard.style.width = '315px';
    gboard.style.height='315px';
    gboard.style.padding = '25px';
    let rowCounter=0;
    state.board.map((x)=>{
    	//console.log(x);
    	x.map(
    		(element, index)=> renderCelda({
    			
    			row:rowCounter,
    			col:colCounter, 
    			value:x[colCounter++],
    			state:state,
    			
    		})
    		//console.log(state.board[row][col]),
    		//console.log("contador de filas 2: "+rowCounter),
    		
    	

    	).forEach(
    		celda=> gboard.appendChild(celda),
    	);
    	rowCounter++
    	colCounter=0;
    	

	});
	const boton = document.createElement('button');
    boton.style.width = '365px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Siguiente turno';
    boton.onclick=()=>{
    	//console.log("hola");
    	state.player1Turn=!state.player1Turn;
    	root.innerHTML = '';
    	render (root, state);
    }
	
    
    

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
//console.log(OTHELLO_STATE.board);



