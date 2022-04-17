function valida(input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores(tipoDeInput)(input)
    }
}



const validadores = {
    dataNascimento:input => validarDataNascimento(input),
    cpf:input => validarCPF(input)
}



const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validarDataNascimento(evento.target)
})


function validarDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior de 18 anos.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, 
    data.getUTCMoth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}

function validarCPF(input){
    const cpfFormatado = input.value.replace(/\D/g,'')
    let mensagem = ''
    if(!checaCPFRepetido(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido!'
    }
    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf){
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) {
            cpfValido = false
        }
    })

    return cpfValido
}
