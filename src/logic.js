
let editValueState = false;
export function editValue(){
    
    if(editValueState === false)
    {
        editValueState = true;
        document.getElementById("editbtn").innerHTML = "Stop Editing";
    }
    else
    {
        editValueState = false;
        document.getElementById("editbtn").innerHTML = "Edit";
    }
};

let colors = ['#4DD0E1', '#9C27B0', '#E91E63', '#2196F3', '#FF5722', '#00838F', '#FF80AB'];


let i = -1
function getColor() {
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
export function submitButton(){
    let para = document.createElement("p");
    let text = document.createTextNode(document.getElementById("inputbox").value);
    para.appendChild(text);

  

    
    para.style.color = getColor();
    
    para.style.textAlign = "center";
    document.body.appendChild(para);
    para.onclick = () => {
        if(editValueState === false)
        {
            para.parentNode.removeChild(para)
        }
        else
        {
            para.innerHTML = prompt("Please enter the edited task.", para.innerHTML);;
        }
    };
};


