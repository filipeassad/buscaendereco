# Projeto Busca de Endereço por CEP 

![index](https://github.com/filipeassad/buscaendereco/blob/master/img/buscaEndereco.PNG)

### O Projeto

A busca de endereço é um projeto criado para testar a funcionalidade de buscar o endereço pelo cep da ViaCEP. A página é feita em Html, Css e JavaScript. 

### Como Funciona

Existe um formulário com os campos CEP, rua, bairro, cidade e estado onde o unico campo habilitado é o campo de CEP. Além dos campos de texto, também existem um botão que quando é ativado envia o que foi escrito no campo cep para uma função que busca o endereço. Se a busca for executada com sucesso, os outros campos disabilitados serão preenchidos com as suas determinadas informações.

### Ferramentas Utilizadas

* HTML
* CSS
* JavaScript
* BootStrap
* GoogleFonts

### Estrutura do Projeto

| buscaendereco  
|----|--css  
|--------|--index.css  
|----|--page  
|--------|--index.html  
|----|--scripts  
|--------|--buscacep.js  

### Desenvolvimento

Existe duas funções que são as duas mais importantes do projeto. São elas a buscaEndereco() e callbackBusca().

#### buscaEndereco(valor)

```js

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

```

Essa função é responsável por validar o cep que foi informado e envia-lo para a função do ViaCEP com o callback para receber o resultado da busca.

#### callbackBusca(retorno)

```js

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

```

Essa função é responsável por receber o resultado da busca da ViaCEP e validar as informções para mostrar na tela.

### Observação

Para desenvolver esse projeto, como já foi citado, foi utilizado a função de busca da ViaCEP. Para mais informações segue o link abaixo:

https://viacep.com.br/exemplo/javascript/


### Contato

**Email:** filipeassad@gmail.com

**Skype:** filipe.assad

### Minhas redes sociais

[![Face](https://github.com/filipeassad/portifolio/blob/master/Imagens/facebook.png)](https://www.facebook.com/filipe.assad "Perfil do Facebook") [![Twitter](https://github.com/filipeassad/portifolio/blob/master/Imagens/twitter.png)](https://twitter.com/lipeassad "Perfil do Twitter")
