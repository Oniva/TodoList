import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';




let tasksList = []

localStorage.setItem('tasks', JSON.stringify(tasksList));


let colors = ['#4DD0E1', '#9C27B0', '#2196F3', '#FF5722', '#00838F', '#FF80AB'];

let i = -1

class Inputs extends Component {
    constructor(props){
        super(props);
        this.state = ({
            editValueState: false,
            editText: "Edit",
        });
        this.editValue = this.editValue.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    componentWillMount(){
        for(let item in JSON.parse(localStorage.getItem('tasks'))){
            this.submitButton(item);
        }
        
    }

    editValue(){
    
        if(this.state.editValueState === false)
        {
            this.setState({ editValueState: true, editText: "Stop Editing" });
        }
        else
        {
            this.setState({ editValueState: false, editText: "Edit" });
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

    submitButton(passedText=""){
        let para = document.createElement("p");
        
        if(passedText){
            let text = document.createTextNode(document.getElementById("inputbox").value);
            para.appendChild(text);
            tasksList.push(document.getElementById("inputbox").value);
            localStorage.setItem('items', JSON.stringify(tasksList));
        }
        else
        {
            let text = document.createTextNode(passedText);
            para.appendChild(text);
            tasksList.push(passedText);
            localStorage.setItem('items', JSON.stringify(tasksList));
        }
        
    
      
    
        
        para.style.color = this.getColor();
        
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
            <Button className="edit" id="editbtn" onClick={this.editValue}>{this.state.editText}</Button>
            <input id="inputbox" type="text" placeholder="New Task"></input>
            <Button id="submit" onClick={this.submitButton}>Submit</Button>
        </div>
        )
    }
}

export default Inputs;