let buttons = document.querySelectorAll('.rates button');
let thanks = document.querySelector('.thanks');
let rate = 0;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        cleanButtons();//remove dos de mais botoes a calss active mas manten no que foi clicado 
        buttons[i].classList.add('active');//adiciona a class active ao botão clicado 
        rate = i + 1;//ira receber a posição selecionada
    });
}
//vai receber informações quando o btn for clicado para aparecer o resultado 
btn.onclick = function(){
    if(rate == 0){
        alert('Select a rate');
    }else{
        thanks.classList.add('active');//adiciona ao span a opção que foi clicada na primeira parte 
        rated.innerText = rate;
    }
}

//remove dos de mais botoes a calss active mas manten no que foi clicado 
function cleanButtons(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
    }
}