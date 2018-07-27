import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


let colors = ['#4DD0E1', '#9C27B0', '#E91E63', '#2196F3', '#FF5722', '#00838F', '#FF80AB'];

let i = -1

class Inputs extends Component {
    constructor(props){
        super(props);
        this.state = ({
            editValueState: false,
            editText: "Edit",
        });
    }

    editValue(){
    
        if(this.state.editValueState === false)
        {
            this.state.editValueState = true;
            this.setState({ editText: "Stopped Edit"});
        }
        else
        {
            this.editValueState = false;
            this.setState({ editText: "Edit"});
        }
    };

    getColor() {
        i++
        if(i > colors.length){
            i = 0
            return colors[i]
            
        }
        else
        {
            return colors[i]
        }
        
    }

    submitButton(){
        let para = document.createElement("p");
        let text = document.createTextNode(document.getElementById("inputbox").value);
        para.appendChild(text);
    
      
    
        
        // para.style.color = this.getColor();
        
        para.style.textAlign = "center";
        document.body.appendChild(para);
        para.onclick = () => {
            if(this.state.editValueState === false)
            {
                para.parentNode.removeChild(para)
            }
            else
            {
                para.innerHTML = prompt("Please enter the edited task.", para.innerHTML);;
            }
        };
    };    

    render(){
        return(
        <div>
            <Button className="edit" id="editbtn" onClick={this.editValue}>{this.editText}</Button>
            <input id="inputbox" type="text" placeholder="New Task"></input>
            <Button id="submit" onClick={this.submitButton}>Submit</Button>
        </div>
        )
    }
}

export default Inputs;