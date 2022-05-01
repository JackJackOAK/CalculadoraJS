
function calc(tipo, valor) {
    //console.log(tipo, valor);
    //console.log(document.getElementById('resultado').value);

    if(tipo === 'acao') {
        if(valor === 'c') {
            document.getElementById('resultado').value = '';
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }
        
        if(valor === '=') {
            var valorCampo = eval(document.getElementById('resultado').value);

            document.getElementById('resultado').value = valorCampo;

            console.log(valorCampo);
        }
    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }

}
