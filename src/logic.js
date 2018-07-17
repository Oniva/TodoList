
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

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export function submitButton(){
    let para = document.createElement("p");
    let text = document.createTextNode(document.getElementById("inputbox").value);
    para.appendChild(text);



//    let previousColor
//    let pickedColor = randomChoice(colors);

//    while(previousColor === pickedColor) {
//       pickedColor = randomChoice(colors);  
//    }
    para.style.color = randomChoice(colors);
//    previousColor = pickedColor;
    
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