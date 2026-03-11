let openbtn = document.getElementById('openbtn');
let closebtn = document.getElementById('closebtn');
let popup = document.getElementById('popup');

openbtn.onclick = ()=>{
        popup.classList.add('active-popup')
    }
closebtn.onclick = ()=>{
        popup.classList.remove('active-popup')
    }

