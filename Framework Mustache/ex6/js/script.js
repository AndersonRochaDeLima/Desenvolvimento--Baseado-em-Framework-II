
//Os modelos podem incluir seções condicionais. Seções condicionais só tornar se a condição for 
//avaliada como true. A seção condicional começa com {{#condição}} e termina com {{/ condição}}. 
//"Condição" pode ser um valor booleano ou uma função retornando um boolean.

$(document).ready(function() {
    
    var data = {
        funcionario: [
        {   nome: "Ana",
            sobrenome: "Paula",
            tempoLivre: true,
            fone: "617-123-4567"
        },
        {   nome: "Marcia",
            sobrenome: "Silva",
            tempoLivre: true,
            fone: "617-987-6543"
        },
        {   nome: "Maria",
            sobrenome: "Aparecida",
            tempoLivre: false,
            fone: "617-111-2323"
        },
    ]};
    var template = "<b>Funcionario:</b><ul>{{#funcionario}}<li>{{nome}} {{sobrenome}}" +
              "{{#tempoLivre}} {{fone}} {{/tempoLivre}}</li>{{/funcionario}}</ul>";

    var html = Mustache.to_html(template, data);
    $('#myDiv').html(html);
});
