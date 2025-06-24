// Define uma função para atualizar a hora exibida na página da web.
function actualizarHora() {
// Obtém o elemento HTML com o ID 'clock'.
    const reloj = document.getElementById('reloj');
    
    // Cria um novo objeto Date contendo a data e hora atuais.
    const ahora = new Date();
    
    // Obtém as horas da data atual e adiciona um zero à esquerda, se necessário.
    const horas = agregarCero(ahora.getHours());
    
    // Obtenha os minutos da data atual e adicione um zero à esquerda, se necessário.
    const minutos = agregarCero(ahora.getMinutes());
    
   // Obtenha os segundos da data atual e adicione um zero à esquerda, se necessário.
    const segundos = agregarCero(ahora.getSeconds());
    
    // Atualiza o conteúdo do elemento 'clock' com a hora atual no formato HH:MM:SS.
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Defina uma função para adicionar um zero à esquerda a números menores que 10.
function agregarCero(numero) {
   // Se o número for menor que 10, retorna o número com um '0' à esquerda.
   // Caso contrário, retorna o número como está.
    return numero < 10 ? '0' + numero : numero;
}

// Define um temporizador que chama a função `updateTime` a cada 1000 milissegundos (1 segundo),
// para atualizar continuamente o horário exibido na página da web.
setInterval(actualizarHora, 1000);

// Chame a função `updateTime` imediatamente no carregamento da página para exibir a hora atual sem esperar pelo primeiro intervalo de 1 segundo.
actualizarHora();
