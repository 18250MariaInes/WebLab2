//ES6
//Lab 2 de Web juego Othello
//Maria Ines Vasquez 18250
import flattenDeep from 'lodash/flattenDeep'
import includes from 'lodash/includes'
//funcion que renderiza las celdas y brinda todas sus propiedades y análisis sobre si se puede colocar la ficha al hacer click
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
    //analiza si es valido donde quiere colocar la ficha dado que siempre tiene que tener en anexo a otra ficha
    celda.onclick=()=>{
    	const cambioState=()=>{
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
    	if((row-1)<0 && (col-1)<0){
    		if(state.board[row+1][col+1]===0 && state.board[row+1][col]===0 && state.board[row][col+1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if((col-1)<0 && (row+1)>7){
    		if(state.board[row-1][col]===0 && state.board[row-1][col+1]===0 && state.board[row][col+1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if((row+1)>7 && (col+1)>7){
    		if(state.board[row-1][col]===0 && state.board[row][col-1]===0 && state.board[row-1][col-1]===0 ){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if((row-1)<0 && (col+1)>7){
    		if(state.board[row][col-1]===0 && state.board[row+1][col]===0 && state.board[row+1][col-1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if ((row-1)<0){
    		if(state.board[row][col-1]===0 &&  state.board[row+1][col+1]===0 && state.board[row+1][col]===0 && state.board[row][col+1]===0 && state.board[row+1][col-1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if((row+1)>7){
    		if(state.board[row-1][col]===0 && state.board[row][col-1]===0 && state.board[row-1][col-1]===0 && state.board[row-1][col+1]===0 && state.board[row][col+1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else if ((col-1)<0){
    		if(state.board[row-1][col]===0 && state.board[row-1][col+1]===0 && state.board[row+1][col+1]===0 && state.board[row+1][col]===0 && state.board[row][col+1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}


    	}else if ((col+1)>7){
    		if(state.board[row-1][col]===0 && state.board[row][col-1]===0 && state.board[row-1][col-1]===0  && state.board[row+1][col]===0 && state.board[row+1][col-1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}else{
    		if(state.board[row-1][col]===0 && state.board[row][col-1]===0 && state.board[row-1][col-1]===0 && state.board[row-1][col+1]===0 && state.board[row+1][col+1]===0 && state.board[row+1][col]===0 && state.board[row][col+1]===0 && state.board[row+1][col-1]===0){
    		alert("Ese movimiento no se puede hacer")

	    	}
	    	else{
				cambioState();
			}

    	}
	}
    return celda;
	
}
const sumar = (a = 0, b) => a + b;
//verifica ganador al sumar todos los valores de la matriz cuando ya esta lleno el tablero, si la suma es negativo, ganó jugador blanco, de lo contrario ganó el negro
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

//renderizador del juego
const render = (mount, state) => {
	const {player1Turn}=state;
	let colCounter=0;
	const gboard = document.createElement('div');
	gboard.style.backgroundColor = 'green';
    gboard.style.width = '400px';
    gboard.style.height='400px';
    gboard.style.padding = '25px';
    let rowCounter=0;
    //por cada casilla de la matriz del estado, se inserta una celda al board
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
	//boton para ceder turno, dado que el jugador es el encargado de darle vuelta a las fichas
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
    		alert('Turno de Jugador1 (Negro) Punteo: '+flattenDeep(state.board).reduce(sumar));
    	}else{
    		alert('Turno de Jugador2 (Blanco) Punteo: '+flattenDeep(state.board).reduce(sumar));
    	}
    	
    }
    verificarGanador(state);
    mount.appendChild(gboard);
    mount.appendChild(boton);	
}
//estado del juego que defina quien esta jugando y la matriz del board
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



