
function limpaCampos() {
	document.getElementById('rua').value=("");
	document.getElementById('bairro').value=("");
	document.getElementById('cidade').value=("");
	document.getElementById('estado').value=("");
}


function callbackBusca(retorno){

	if(!("erro" in retorno)){

		document.getElementById('rua').value=(retorno.logradouro);
		document.getElementById('bairro').value=(retorno.bairro);
		document.getElementById('cidade').value=(retorno.localidade);
		document.getElementById('estado').value=(retorno.uf);

	}else{
		limpaCampos();
		alert("Cep Não Encontrado!");
	}

}

function buscaEndereco(valor){

	var cep = valor.replace(/\D/g,'');

	if(cep != ""){

		var validaCep = /^[0-9]{8}$/;

		if(validaCep.test(cep)){

			document.getElementById('rua').value="...";
			document.getElementById('bairro').value="...";
			document.getElementById('cidade').value="...";
			document.getElementById('estado').value="...";

			var script = document.createElement('script');

			script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callbackBusca';
			document.body.appendChild(script);

		}else{
			limpaCampos();
			alert("CEP Inválido!")
		}

	}else{
		limpaCampos();
		alert("Informe o CEP!")
	}

}