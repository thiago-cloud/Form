const form = document.getElementById('form')
const nomeCompleto = document.getElementById('nomeCompleto')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmar-senha')
const telefone = document.getElementById('telefone')
const dataNascimento = document.getElementById('dataNascimento')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();//Chamando a funcao check inputs
})

function checkInputs(){
    const nomeCompletoValue = nomeCompleto.value
    const emailValue = email.value
    const senhaValue = senha.value
    const confirmarSenhaValue = confirmarSenha.value
    const telefoneValue = telefone.value
    const dataNascimentoValue = dataNascimento.value
    
    if(nomeCompletoValue === ""){
        setErrorFor(nomeCompleto, "O nome de usuário é obrigatório.")
    }else if(!validarNome(nomeCompletoValue)){
        setErrorFor(nomeCompleto,"Nome inválido, contém números ou caracteres especiais.")
    }else{
        setSuccessFor(nomeCompleto)
    }

    if(emailValue === ""){
        setErrorFor(email, "O campo email é obrigatório.")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor insira um email válido.")
    }else{
        setSuccessFor(email)
    }

    if(dataNascimentoValue === ""){
        setErrorFor(dataNascimento, "A data de nascimento é obrigatória!")
    }else if(!validarDataNascimento(dataNascimentoValue)) {
        setErrorFor(dataNascimento, "Data de nascimento inválida")
        // Aqui você pode adicionar a lógica para utilizar a data de nascimento
    } else {
        setSuccessFor(dataNascimento)
    }
    

    if(telefoneValue === ""){
        setErrorFor(telefone, "O campo telefone é obrigatório.")
    }else if (!validarTelefone(telefoneValue)){
        setErrorFor(telefone, "O número de telefone é inválido")
    } else {
        setSuccessFor(telefone)
    }

    if(senhaValue === ""){
        setErrorFor(senha, "A senha é obrigatória.")
    }else if(senhaValue.length < 7){
        setErrorFor(senha, "A senha deve conter no minímo 7 caracteres. ")
    }else{
        setSuccessFor(senha)
    }

    if(confirmarSenhaValue === ""){
        setErrorFor(confirmarSenha, "A senha de confirmação é obrigatória.")
    }else if(confirmarSenhaValue.length < 7){
        setErrorFor(confirmarSenha, "A senha de confirmação deve conter no minímo 7 caracteres. ")
    }else if(senhaValue != confirmarSenhaValue){
        setErrorFor(confirmarSenha, "As senhas não confere. ")
    }else{
        setSuccessFor(confirmarSenha)
    }

    if (!checkbox.checked) {
        setErrorFor(checkbox, "Você deve aceitar os termos e condições.")
    } else {
        setSuccessFor(checkbox)
    }

   const inputSingle = form.querySelectorAll('#item')
  
    formIsValid = [...inputSingle].every((formSingle) =>{
        return (formSingle.className === 'input-single success');
    })//Estamos verificando se todas as classes do form tem a classe 'input-single success'*/

    if(formIsValid){
        alert("Formulario enviado com sucesso!")
    }//Se todas as classes forem validas e o botão for clicado mostre o alert
}

function setErrorFor(input,message){
    const formSingle = input.parentElement; //O parent Element pega o elemento pai do input
    const small = formSingle.querySelector('small')

    //Adiciona a messagem de erro
    small.innerText = message;

    //Adiciona a classe de erro na tag input
    formSingle.className = "input-single error";
}

function setSuccessFor(input){
    const formSingle = input.parentElement;

    //Adiciona a classe de sucesso na tag input
    formSingle.className = "input-single success";
}


//Checar se o email e valido Regex
function checkEmail(email){
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    return emailRegex.test(email)
}

//Checar telefone se o válido
function validarTelefone(telefone) {
    // Expressão regular para validar números de telefone no formato brasileiro
    const regexTelefone =  /^\(?\d{2}\)?[-\s]?\d{4,5}-?\d{4}$/;
    return regexTelefone.test(telefone);
}

function validarNome(nome) {
    // Expressão regular que permite apenas letras e espaços
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
    return regex.test(nome);
}

//Checar data de nascimento
function validarDataNascimento(data) {
    // Expressão regular para verificar o formato dd/mm/aaaa
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(data);
}

