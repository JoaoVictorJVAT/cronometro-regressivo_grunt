document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-contagem').addEventListener('submit', function(event){
        event.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        startCountdown(numeroMaximo);
    });
    function startCountdown(seconds) {
        let counter = seconds;

        const interval = setInterval(() => {
            document.getElementById('contagem-regressiva').innerText = counter;
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                alert("Tempo esgotado!");
            }
        }, 1000);
        document.getElementById('tempo-restante'). innerText = (counter)
    }
})