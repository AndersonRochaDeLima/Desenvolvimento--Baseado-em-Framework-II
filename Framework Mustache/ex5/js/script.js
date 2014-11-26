

//Utilizando Função
$(document).ready(function() {
    
    var produto = {
        nome: "Detergente",
        preco: 1.50,
        quantidade: 5.00,
        
        valorTotal: function() {
            return this.preco * this.quantidade;
        }
    };
    var template = "<p><b>Nome produto: </b>{{nome}}</p> "+ 
                   "<p><b>Quant.: </b>{{quantidade}}</p> "+
                   "<p><b>Preco: </b>{{preco}}</p> " +
                   "<p><b>Total: </b>{{valorTotal}}";
                   
    var html = Mustache.to_html(template, produto);
    $('#myDiv').html(html);
});
