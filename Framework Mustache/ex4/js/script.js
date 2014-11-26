
//Utilizando a notação de ponto para acessar as propriedades do objeto.
$(document).ready(function() {
    
    var pessoa = {
        nome: "Marcos",
        sobrenome: "Santos",
        blog: "http://marcos.santos.org",
        
        gerente : {
            nome: "Joao",
            sobrenome: "Silva"
        }
    };
    var template = "<h1>{{nome}} {{sobrenome}}</h1><p>{{blog}}</p>" +
                   "Gerente: {{gerente.nome}} {{gerente.sobrenome}}";
    var html = Mustache.to_html(template, pessoa);
    $('#myDiv').html(html);
});
