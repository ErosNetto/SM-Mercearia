// aleta de envio de SAC
const btn = document.querySelector("#refresh")

btn.addEventListener("click", () => {
	location.reload()
	alert("E-mail enviado com sucesso")
})

//  Java esquema do carrinho de compras HTML 

function AddCarrinho(produto, quantidade, valor, posicao)
	{
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("quantidade" + posicao, quantidade);
		valor = valor * quantidade;
		localStorage.setItem("valor" + posicao, valor);
		alert("Produto adicionado ao carrinho!");
	}

//  Java esquema do carrinho de compras CARRINHO