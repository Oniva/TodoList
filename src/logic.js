
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

export function submitButton(){
    let para = document.createElement("p");
    let text = document.createTextNode(document.getElementById("inputbox").value);
    para.appendChild(text);    
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