import React from 'react';
import './style.css';


let gridArray = [[11,12,13],[21,22,23],[31,32,33]];

class TicTacTo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 1,
            win: 2,
        }
    }

    refreshPage = () => window.location.reload(false);

    onChange = (e) => {
        if(this.state.win==2) {
            e.target.classList.add('selection-glow');
            e.target.innerHTML= this.getXorO();
            e.target.disabled = true;
            this.changeGrid(e.target.id, this.state.turn);
            this.gameResult();
        }
        
    }

    getXorO() {
        
        let mark="";
            if(this.state.turn === 1){
                mark="X";
                this.setState({turn:0});
            }
            else {
                mark="O";
                this.setState({turn:1});
            }
        return mark; 
    }


    changeGrid = (id, turn) => {
        
        let arr = id.split(" ");
        if(turn===0)
            gridArray[parseInt(arr[0])][parseInt(arr[1])]= 0;
        else
            gridArray[parseInt(arr[0])][parseInt(arr[1])] = 1;

        console.log("Grid Array is " + gridArray);
    }

    gameResult = () => {   
        let result = this.didAnyoneWin();
        if(result===1) {
            
            this.setState({win: 1});
        }
        else if (result===0){
            
            this.setState({win: 0});
            
        }


    }

    didAnyoneWin = () => {
        //Row match
        if(gridArray[0][0] == gridArray[0][1] && gridArray[0][0] == gridArray[0][2])
        {    console.log("WIN-Row1"); 
            return gridArray[0][0]; }
        else if (gridArray[1][0] == gridArray[1][1] && gridArray[1][0] == gridArray[1][2])
        {    console.log("WIN-Row2"); 
            return gridArray[1][0]; }
        else if (gridArray[2][0] == gridArray[2][1] && gridArray[2][0] == gridArray[2][2])
        {    console.log("WIN-Row3");
            return gridArray[2][0]; } 
        

        //Column Match
        else if(gridArray[0][0] == gridArray[1][0] && gridArray[0][0] == gridArray[2][0])
        {    console.log("WIN-Column1");
            return gridArray[0][0]; }
        else if (gridArray[0][1] == gridArray[1][1] && gridArray[0][1] == gridArray[2][1])
        {    console.log("WIN-Column2");
            return gridArray[0][1]; }
        else if (gridArray[0][2] == gridArray[1][2] && gridArray[0][2] == gridArray[2][2])
        {    console.log("WIN-Column3");
            return gridArray[0][2]; }


        //Diagonal Match
        else if(gridArray[0][0]==gridArray[1][1] && gridArray[0][0]==gridArray[2][2])
        {    console.log("Win-DiagonalRight");
            return gridArray[0][0]; }
        else if(gridArray[0][2]==gridArray[1][1] && gridArray[0][2]==gridArray[2][0])
        {    console.log("Win-DiagonalLeft");
            return gridArray[0][2]; }
        
        return -1;
    }


    render() {
        return (
            <div className="main-body">
                <div className="header-container">
                    <p className="header-text">{ this.state.win == 2 ? 'TIC TAC TO' : this.state.win == 1 ? 'FIRST PLAYER WINS' : 'SECOND PLAYER WINS'}</p>
                </div>
                <div className="tictacto-body">
                    <div className="grid">
                        <div className="first-row">
                            <div><button className="cell" id="0 0" onClick={this.onChange}>1</button></div>
                            <div><button className="cell" id="0 1" onClick={this.onChange}>2</button></div>
                            <div><button className="cell" id="0 2" onClick={this.onChange}>3</button></div>
                        </div>
                        <div className="second-row">
                            <div><button className="cell" id="1 0" onClick={this.onChange}>4</button></div>
                            <div><button className="cell" id="1 1" onClick={this.onChange}>5</button></div>
                            <div><button className="cell" id="1 2" onClick={this.onChange}>6</button></div>
                        </div>
                        <div className="third-row">
                            <div><button className="cell" id="2 0" onClick={this.onChange}>7</button></div>
                            <div><button className="cell" id="2 1" onClick={this.onChange}>8</button></div>
                            <div><button className="cell" id="2 2" onClick={this.onChange}>9</button></div>
                        </div>
                    </div>
                    <div><button className="refresh-button" onClick={this.refreshPage}>REFRESH</button></div>
                </div>
            </div>
        );
    }


}



export default TicTacTo;