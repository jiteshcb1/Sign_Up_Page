const btn = document.querySelector('button');
const error = document.createElement('p');
const input = document.querySelector('#con_password');
btn.addEventListener('click',() => {
    if(document.querySelector('#input3').value != document.querySelector('#input4').value){
        wpass()
}
    else{
        rpass()
    }
})

function rpass() {
    document.querySelector('#input4').style = ('box-shadow: 0px 5px 15px 10px rgba(180, 181, 229, 10%;)');
    error.innerHTML = '<span style="color : #02023b"><b>Password Match</b></span>';
    input.appendChild(error);
}

function wpass() {
    document.querySelector('#input4').style = ('box-shadow: 0px 5px 15px 10px rgba(255, 00, 0, 25%)')
    error.innerHTML = '<span style="color : red"> <b>Password Does Not Match</b> </span>'
    input.appendChild(error);
}


