
const divCon = document.querySelector('.btngen');

const genBtn = document.querySelector('#startgen').addEventListener("click", generate);
const selectedBtn = document.querySelector('.provideBtn').addEventListener("click", selected);
const cp = document.querySelector('#cp').addEventListener("click", copy);
const resetBtn = document.querySelector('#reset').addEventListener("click", reset);

const nickCard = document.querySelector('.nickCard');
const btnGen = document.querySelector('#startgen')
const genCard = document.querySelector('.card');
const showP = document.querySelector('#msg');
const toShow = document.createElement("p");
const msg = document.querySelector('#nickName');

function generate(){
    nickCard.style.backgroundColor = '#a0c4ff';
    let ran = Math.floor(Math.random()*1000);
    let ranName = Math.floor(Math.random()*lenNames);
    let ranAdj = Math.floor(Math.random()*lenAdj);
    
    
    showP.appendChild(toShow);
    toShow.innerHTML = 'Your nickname is...'
    const resMsg = toShow.innerHTML;
    // const split = input.value.split(" ").join("");
    if (input.value != ''){
        msg.value = `${noSpaces(input.value)}${adjs[ranAdj]}${ran}`;
        event.preventDefault();
        input.remove();
        
    } else{
        input.remove();
        event.preventDefault();
        return msg.value = `${names[ranName]}${adjs[ranAdj]}${ran}`;
    }
    input.remove();
    
    
    
}

function copy(){
    const msg = document.querySelector('#nickName');
     msg.select();
     msg.setSelectionRange(0, 99999);
     document.execCommand("Copy");
    //  alert(`Copied to clipboard: ${text.value}`);
}


const input = document.createElement("input");
input.type = 'text';
input.classList.add('insert');
function noSpaces(text){
    const res = text.split(" ").join("");
    return res;
}

function reset(){
    const msg = document.querySelector('#nickName');
    toShow.remove();
    input.value = '';
    input.remove();
    msg.value = '';
    nickCard.style.marginTop = "30px"
    nickCard.style.width = "15em"
    genCard.style.width = "25em";
    nickCard.style.backgroundColor = 'whitesmoke';
}


function selected(){
    showP.appendChild(input);
    input.style.borderBottom = "2px solid rgb(72, 36, 77)";
    input.setAttribute('placeholder', 'Add something...');
    input.setAttribute('maxlength', 8);

    btnGen.style.marginTop = "20px";
    nickCard.style.marginTop = "40px"
    genCard.style.width = "30em";

    toShow.remove();
    event.preventDefault();    
 }










    




