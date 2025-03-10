/*Modal*/
document.querySelector(".form-agendar").addEventListener("submit", function(event) {
    // Obter todas as caixas de seleção
    const checkboxes = document.querySelectorAll('input[name="idcheck"]:checked');
    
    // Se nenhuma checkbox foi selecionada, impedir o envio
    if (checkboxes.length === 0) {
        alert("Você precisa marcar pelo menos um serviço.");
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const agendarButtons = document.querySelectorAll('.btn-agendar');
    const overlay = document.querySelector('.overlay');
    const form = document.querySelector('.form-agendar');
    const modalCloseButton = document.querySelector('.btn-close-modal');

    // Exibir o modal quando um botão de agendar for clicado
    agendarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const barbeiroName = button.getAttribute('data-barbeiro'); 
            const barbeiroInput = document.getElementById('inputBarbeiro');
            
            // Procurar o option com o nome do barbeiro e selecionar ele
            for (let option of barbeiroInput.options) {
                if (option.textContent === barbeiroName) {
                    option.selected = true;
                    break;
                }
            }

            overlay.style.display = 'flex'; 
        });
    });

    // Fechar o modal quando o botão de fechar for clicado
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    }

    // Impedir o fechamento do modal quando o formulário for clicado
    form.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Fechar o modal no envio do formulário
    form.addEventListener('submit', function(event) {
        // Verificar se pelo menos um serviço foi selecionado
        const checkboxes = document.querySelectorAll('input[name="idcheck"]:checked');
        if (checkboxes.length === 0) {
            alert("Você precisa marcar pelo menos um serviço.");
            event.preventDefault();
        } else {
            overlay.style.display = 'none'; 
        }
    });

    // Fechar o modal se o usuário clicar fora dele
    document.querySelector('.overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });
});
