document.addEventListener("DOMContentLoaded", function () {
    const livros = document.querySelectorAll(".book-cover");
    const botoesSalvar = document.querySelectorAll(".save-page");

    // Adiciona evento de clique para abrir o PDF na última página lida
    livros.forEach(livro => {
        livro.addEventListener("click", function () {
            const pdfUrl = this.getAttribute("data-pdf");
            if (!pdfUrl) {
                console.error("Erro: O atributo data-pdf não foi encontrado.");
                return;
            }

            const ultimaPagina = localStorage.getItem(pdfUrl) || 1;
            window.open(`${pdfUrl}#page=${ultimaPagina}`, "_blank");
        });
    });

    // Adiciona evento de clique para salvar a página atual
    botoesSalvar.forEach(botao => {
        botao.addEventListener("click", function () {
            const livro = this.closest(".book").querySelector(".book-cover");
            const pdfUrl = livro.getAttribute("data-pdf");

            if (!pdfUrl) {
                console.error("Erro: O atributo data-pdf não foi encontrado.");
                return;
            }

            let pagina = prompt("Digite o número da página atual:");
            if (pagina && !isNaN(pagina) && Number(pagina) > 0) {
                localStorage.setItem(pdfUrl, pagina);
                alert(`Página ${pagina} salva com sucesso!`);
            } else {
                alert("Número de página inválido.");
            }
            function abrirPDF(url) {
                window.open(url, "_blank");
            }
            
        });
    });
});
