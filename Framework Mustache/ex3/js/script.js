
 
$(document).ready(function() {

	var data = {
        funcionario: [
        {   
            nome: "Ana",
            sobrenome: "Paula"
        },
        {   nome: "Joao",
            sobrenome: "Silva"
        },
        {
           nome: "Mario",
           sobrenome: "Ferreira"}
    ]};
	var template = "<b>Funcionario:</b><ul>{{#funcionario}}" +
    	                        "<li>{{nome}} {{sobrenome}}</li>" +
        	                    "{{/funcionario}}</ul>";
	var html = Mustache.to_html(template, data);
	$('#myDiv').html(html);
});
