/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ that​ ​ creates​ ​ a ​ ​ table,​ ​ accept​ ​ row,​ ​ column​ ​ numbers​ ​ from​ ​ the
user,​ ​ and​ ​ input​ ​ row-column​ ​ number​ ​ as​ ​ content​ ​ (e.g.​ ​ Row-0​ ​ Column-0)​ ​ of​ ​ a ​ ​ cell. */
"use strict";

let createTable = () => {
    let tbl = document.createElement('table');
    tbl.setAttribute('class','table');
    tbl.setAttribute('id','table');
    let tblHd = document.createElement('thead');
    let tblRw = document.createElement('tr');
    let tblHdr = document.createElement('th');
    tblHdr.setAttribute('scope','row');
    tblHdr.innerText = '#';
    tblRw.appendChild(tblHdr);
    let tblHdr2 = tblHdr.cloneNode(true);
    tblHdr2.innerText = 'Name';
    tblRw.appendChild(tblHdr2);
    tblHd.appendChild(tblRw);
    tbl.appendChild(tblHd);

    let tblBdy = document.createElement('tbody');
    tblBdy.setAttribute('id','tableBody');
    tbl.appendChild(tblBdy);
    document.getElementById("tblParent").appendChild(tbl);
}

let takeInput = () => {
    let inputArr = [];
    let prmp = prompt('Enter rowId and ColumnId seperated with spaces.');
    let innerArr = prmp.split(' ');
    let tblHdr01 = document.createElement('th');
    tblHdr01.setAttribute('scope','row');
    tblHdr01.innerText = innerArr[0];
    let tblHdr02 = tblHdr01.cloneNode(true);
    tblHdr02.innerText = `Row-${innerArr[0]} Column-${innerArr[1]}`;
    let tblRw01 = document.createElement('tr');
    tblRw01.appendChild(tblHdr01);
    tblRw01.appendChild(tblHdr02);
    document.getElementById('tableBody').appendChild(tblRw01);
}
