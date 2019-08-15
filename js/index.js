var nul = parseFloat(prompt("Digite um valor"));

function value (nul) {
	if (isNaN(nul)) {
		return document.body.append("O valor é nulo");
	}else {
		return document.body.append("O valor não é nulo")
	}
}

value(nul);