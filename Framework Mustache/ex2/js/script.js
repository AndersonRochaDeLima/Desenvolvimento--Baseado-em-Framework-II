
//Acessando lista atraves do ponto
$(document).ready(function() {

	var pessoa = {
		nome: "Joao",
		linguagem: ['Javascript', 'PHP', 'Ruby', 'Python']
	};
																	
	var template = "<b>Nome:</b> {{nome}} <br> <b>Linguagem:</b> <ul>{{#linguagem}} <li> {{.}} </li> {{/linguagem}}</ul>";
	var html = Mustache.to_html(template, pessoa);
	$('#myDiv').html(html);

});
