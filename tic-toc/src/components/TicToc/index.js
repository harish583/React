import React, { Component } from 'react'
import TicTocRow from './TicTocRow'
import {TrueCase} from '../../constants';
import './index.css';
class TicToc extends Component {
    constructor(){
        super();
        this.state={
            isGreen:true,
            isGameCompleted:false,
            isGreenwin:false
        }
    }
    setColor=()=>{
        debugger;
        if(!this.state.isGameCompleted){
        //this.checkCompleted();
        if(this.state.isGreen){
            this.setState({isGreen:false});
            return true;
        }else{
            this.setState({isGreen:true});
            return false;
        }
    }
        
    };
    checkCompleted=()=>{
        var green=[],red=[];
        var y = document.getElementsByClassName("TicTocElement symbol");
        for(let s =0 ;s<y.length;s++){
            debugger;
            if(y[s].classList.contains("green")){
                green.push(s);
            }
            if(y[s].classList.contains("red")){
                red.push(s);
            }
        }
        var trues = [];
        for(let yy =0 ;yy<TrueCase.length;yy++){
            if(TrueCase[yy].length === red.length && TrueCase[yy].every((value, index) => value === red[index])){
                this.setState({isGameCompleted:true,isGreenwin:false});
                console.log("red win");
            }else if(TrueCase[yy].length === green.length && TrueCase[yy].every((value, index) => value === green[index])){
                console.log("Green win");
                this.setState({isGameCompleted:true,isGreenwin:true});
            }
            console.log("checking ... "+y);
        }
    };
    render() {
        return (
            <>
                <TicTocRow row={1} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                <TicTocRow row={2} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                <TicTocRow row={3} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                {this.state.isGameCompleted && this.state.isGreenwin ? <div class='green win'>Green Win</div> : this.state.isGameCompleted && !this.state.isGreenwin ? <div calss='red win'>Red Win</div> : ""}
            </>
        )
    }
}
export default  TicToc;
