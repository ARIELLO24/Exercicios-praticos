// Validação do Formulário de Imagens
document.getElementById('formulario-imagem').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputImagem = document.getElementById('input-imagem');
    const mensagemErro = document.getElementById('mensagem-erro');
    const arquivo = inputImagem.files[0];

    // Resetar mensagem de erro
    mensagemErro.textContent = '';

    if (!arquivo) {
        mensagemErro.textContent = 'Por favor, selecione um arquivo.';
        return;
    }

    // Validar tipo de arquivo
    if (!arquivo.type.match('image.*')) {
        mensagemErro.textContent = 'Apenas imagens são permitidas (JPG, PNG, GIF).';
        return;
    }

    // Validar tamanho (2MB)
    if (arquivo.size > 2 * 1024 * 1024) {
        mensagemErro.textContent = 'O arquivo é muito grande (máx. 2MB).';
        return;
    }

    alert('Imagem válida! Pronto para enviar.');
    // Aqui você pode adicionar o envio para o servidor
});

// Efeito de scroll suave para o menu
document.querySelectorAll('.menu-navegacao a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});