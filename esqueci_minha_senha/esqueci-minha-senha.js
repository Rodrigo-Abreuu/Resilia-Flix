const btn = document.querySelector("#send");

btn.addEventListener("click", function(event){

    event.preventDefault();

    const selecionaEmail = document.querySelector("#email")

    const email = selecionaEmail.value;

    validaEmail(email);

})


function validaEmail(email){

    
    if ((email.indexOf("@") == -1)||
        (email.indexOf(".") == -1) ||
        (email.indexOf(" ") != -1)) {
        return emailInvalido();
    } else {
        return emailEnviado(email);
    }
};

function emailInvalido(){
    var selecionaMensagem = document.querySelector('#emailEnviado');
    selecionaMensagem.innerText = ("");
    var selcionaErro = document.querySelector('#mensagemErro');
    selcionaErro.innerText = ("E-mail inválido!");
}


function emailEnviado(email){
    var selcionaErro = document.querySelector('#mensagemErro');
    selcionaErro.innerText = ("");
    var selecionaMensagem = document.querySelector('#emailEnviado');
    selecionaMensagem.innerText = ("E-mail de recuperação enviado para " + email);
}
