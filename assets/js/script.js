<reference path="../../typings/globals/jquery/index.d.ts" />
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $("#btn1").click(function(){
        alert("O botão de ciclovias da cidade foi clicado")
        console.log("O botão foi clicado")
    })
})