
//Exemplo básico
$(document).ready(function() {

	var pessoa = {
		nome: "Joao",
		sobrenome: "da Silva",
		blog: "http://joao.org"
	};

	var template = "<h1>{{nome}} {{sobrenome}}</h1>Blog: {{blog}}";
	var html = Mustache.to_html(template, pessoa);
	$('#myDiv').html(html);

});
