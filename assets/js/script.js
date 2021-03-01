/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $("#botao-enviar").click(function(){
        let nome_valido = validaNomeFunction()
        let sexo_valido = validaSexoFuntion()
        let passeio_valido = validaPasseioFuntion()
        let excursoes_validas = validaExcursoesFunction()
        
        if(nome_valido && sexo_valido && passeio_valido && excursoes_validas){
            alert("Tudo ok!")
        }
        else{
            alert("Deu erro!")
        }
    })
})

function validaNomeFunction(){
    let nome = $("#nome")

    if(nome.val() == ''){
        nome.addClass("is-invalid")
        nome.removeClass("is-valid")
        return false
    }
    else{
        nome.removeClass("is-invalid")
        nome.addClass("is-valid")
        return true
    }
}

function validaSexoFuntion(){
    let sexo_masc = $("#sexo-masc")
    let sexo_fem = $("#sexo-fem")

    let botoes = $("input[name='sexo']:checked")
    if(botoes.length === 0){
        sexo_masc.addClass("is-invalid")
        sexo_masc.removeClass("is-valid")
        sexo_fem.addClass("is-invalid")
        sexo_fem.removeClass("is-valid")
        $("#sexo-feedback").addClass("d-block")
        return false
    }
    else{
        sexo_masc.addClass("is-valid")
        sexo_masc.removeClass("is-invalid")
        sexo_fem.addClass("is-valid")
        sexo_fem.removeClass("is-invalid")
        $("#sexo-feedback").removeClass("d-block")
        return true
    }
}

function validaPasseioFuntion(){
    let passeio = $("#passeio")

    if(passeio.val() == ''){
        passeio.addClass("is-invalid")
        passeio.removeClass("is-valid")
        return false
    }
    else{
        passeio.removeClass("is-invalid")
        passeio.addClass("is-valid")
        return true
    }
}

function validaExcursoesFunction(){
    let ilha = $("#ilha")
    let paraty = $("#paraty")
    let buzios = $("#buzios")

    let botoes = $("input.excursao:checked")
    if(botoes.length === 0){
        ilha.addClass("is-invalid")
        ilha.removeClass("is-valid")
        paraty.addClass("is-invalid")
        paraty.removeClass("is-valid")
        buzios.addClass("is-invalid")
        buzios.removeClass("is-valid")
        $("#excursoes-feedback").addClass("d-block")
        return false
    }
    else{
        ilha.removeClass("is-invalid")
        ilha.addClass("is-valid")
        paraty.removeClass("is-invalid")
        paraty.addClass("is-valid")
        buzios.removeClass("is-invalid")
        buzios.addClass("is-valid")
        $("#excursoes-feedback").removeClass("d-block")
        return true
    }
}