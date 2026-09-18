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
}, { threshold: 0.5 });

secoes.forEach((secao) => observer.observe(secao));