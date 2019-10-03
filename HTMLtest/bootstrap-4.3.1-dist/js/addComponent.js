"use strict"
let newId = 1;
function addElement(id) {
    console.log("call from: " +id);
    id = id.replace(/\D/g,'');
    
    let parentDiv = document.getElementById('myDiv');
    let node = document.getElementById("div"+id);

    let clone = node.cloneNode(true);
    clone.setAttribute("id","div"+newId);

    let newDiv = document.createElement("div");
    newDiv.setAttribute('id','addDiv');
    let newBtn = document.createElement("button");
    newBtn.setAttribute("type","submit");
    newBtn.setAttribute("id","addBtn"+newId);
    newBtn.setAttribute('onclick','addElement(this.id)');
    newBtn.className = " btn btn-lg btn-outline-primary float-left";
    newBtn.innerText = "+";
    newDiv.appendChild(newBtn);

    let dltBtn = newBtn.cloneNode(true);
    let dltDiv = document.createElement("div");
    dltDiv.setAttribute('id','dltDiv');
    dltBtn.setAttribute("id","dltBtn"+newId);
    dltBtn.innerText = '-'
    dltBtn.setAttribute('onclick','dltElement(this.id)');
    dltDiv.appendChild(dltBtn);

    let tableBodyNode = document.getElementById('tableBody');
    let newRow = document.getElementById('row'+id).cloneNode(true);
    newRow.setAttribute('id','row'+newId);
    
    for(let a=0; a<newRow.childNodes.length; a++){
        let tableNode = newRow.childNodes[a];
        let tag = tableNode.tagName;
        switch(tag){
            case 'TH':
                tableNode.innerHTML = newId;
                break;
            case 'TD':
                tableNode.setAttribute('id','td'+newId);
                tableNode.innerText = 'This will reflect in table above';
        }

    }
    tableBodyNode.appendChild(newRow);

    for(let a=0; a<clone.childNodes.length; a++){
        let childNode = clone.childNodes[a];
        let nodeId = childNode.id;
        switch(nodeId){
            case 'addDiv':
                clone.replaceChild(newDiv, clone.childNodes[a]);
                break;
            case 'dltDiv':
                clone.replaceChild(dltDiv, clone.childNodes[a]);
                break;
            case 'textDiv':
                let newTextbox = clone.childNodes[a];
                for(let a=0; a<newTextbox.childNodes.length; a++){
                    if(newTextbox.childNodes[a].tagName === 'INPUT'){
                        newTextbox.childNodes[a].setAttribute('id', 'textBox'+newId);
                        newTextbox.childNodes[a].value = '';
                    } else if(newTextbox.childNodes[a].tagName === 'P'){
                        newTextbox.childNodes[a].setAttribute('id', 'input'+newId);
                    }
                }
                clone.replaceChild(newTextbox, clone.childNodes[a]);
                // newAlert.innerHTML = 'yay! I am number ' + newId;
                // clone.replaceChild(newAlert,clone.childNodes[a]);
        }
    }

    insertNode(document.getElementById('row'+id),newRow, tableBodyNode);
    insertNode(node, clone, parentDiv);
    // if(node.nextSibling != 'undefined' && node.nextSibling != null){
    //     parentDiv.insertBefore(clone,node.nextSibling);
    // } else {
    //     parentDiv.appendChild(clone);
    // }


    newId++;
};

function insertNode(node, newNode, parentNode){
    if(node.nextSibling != 'undefined' && node.nextSibling != null){
        parentNode.insertBefore(newNode,node.nextSibling);
    } else {
        parentNode.appendChild(newNode);
    }
}

function dltElement(id){
    id = id.replace(/\D/g,'');
    let element = document.getElementById('div'+id);
    element.parentNode.removeChild(element);

    let tableElement = document.getElementById('row'+id);
    tableElement.parentNode.removeChild(tableElement);
};

function inputText(id){
    id = id.replace(/\D/g,'');
    let ip = document.getElementById('textBox'+id).value;
    //document.getElementById('input'+id).innerHTML = "You wrote: " + ip;
    document.getElementById('td'+id).innerHTML = ip;
    return ip;
}

let date_diff = (d1, d2) => {
    
    let diff = Math.abs(d2-d1);
    let days = diff / (1000*60*60*24);
    let years = Math.floor(days / 365, 10);
    let months = Math.floor((days % 365) / 30 ,10);
    let leap_days = 0;
    if(years / 4  > 0){
        leap_days = Math.floor(years/4);
    }
    let rem_days = days - years * 365 + months * 30 - leap_days; 
    alert(`Yuki was born on ${d1} and today is ${d2}. \n \n it's been ${years} years, ${months} months and ${rem_days} days. \n \n Happy Birthday!!`);
    return `It's been ${years} years, ${months} months and ${rem_days} days`;
}
