const secoes = document.querySelectorAll("section");
const linksNav = document.querySelectorAll(".text-nav");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            const id = entrada.target.getAttribute("id");
            linksNav.forEach((link) => {
                link.classList.toggle("ativo", link.getAttribute("href") === `#${id}`);
            });
        }
    });
}, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

secoes.forEach((secao) => observer.observe(secao));

/* SCRIPT PARA CLICAR FORA DO MODAL E FECHAR */
document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (evento) => {
        if (evento.target === overlay) {
            window.location.hash = '#!';
        }
    });
});