produtos = [
    {
        id: 1,
        nome: "Placa de Vídeo",
        preco: "R$120,00",
        imagem: "img/produto1.jpg"
    },
    {
        id: 2,
        nome: "Memória",
        preco: "R$180,00",
        imagem: "img/produto2.jpg"
    },
    {
        id: 3,
        nome: "Placa de Vídeo",
        preco: "R$1350,00",
        imagem: "img/produto3.jpg"
    },
    {
        id: 4,
        nome: "Processador",
        preco: "R$570,00",
        imagem: "img/produto4.jpg"
    },
    {
        id: 5,
        nome: "Placa de Vídeo",
        preco: "R$1020,00",
        imagem: "img/produto5.jpg"
    },
    {
        id: 6,
        nome: "Desktop",
        preco: "R$2250,00",
        imagem: "img/produto6.jpg"
    },
]


for(var i = 0; i < produtos.length; i++){

var ctn = document.getElementById("ctn");

    //var row = document.createElement("div");  //Foi criado um único <div clas="row"> no html, ao invés de
    //row.setAttribute("class","row");			//um <div clas="row"> para cada card. Isto estava errado!!!!
	//ctn.appendChild(row);
	
        var coluna = document.createElement("div");
        coluna.setAttribute("class","col-sm-4");
		ctn.appendChild(coluna);
		
            var card = document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("style","width:18rem");
			coluna.appendChild(card);
			
                var imagem = document.createElement("img");
                imagem.setAttribute("class","card-img-top");
                imagem.setAttribute("src",produtos[i].imagem);
                imagem.setAttribute("alt","Card image");
				card.appendChild(imagem);
				
                var card_body = document.createElement("div");
                card_body.setAttribute("class","card-body text-center");
				card.appendChild(card_body);
				
                    var h4 = document.createElement("h4");
                    h4.setAttribute("class","card-title");
					card_body.appendChild(h4);
 
                        var texto1 = document.createTextNode(produtos[i].nome);
                        h4.appendChild(texto1);
						
                    var p = document.createElement("p");
                    p.setAttribute("class","card-text");
                    card_body.appendChild(p);
					
                        var texto2 = document.createTextNode(produtos[i].preco);
						p.appendChild(texto2);
						
                    var a = document.createElement("a");
                    a.setAttribute("href","#");
                    a.setAttribute("class","btn btn-primary");
                    card_body.appendChild(a);
						
                        var btn = document.createTextNode("Detalhe");
						a.appendChild(btn);
	
	
	if(i%2 != 0){
		a.setAttribute("class","btn btn-warning");
	}
						
}   
    
    
    
    
    
    
    
    
    
    


    
    
   

console.log(document.body.innerHTML);	
	
	
	
	
	
	
	
	
	
	