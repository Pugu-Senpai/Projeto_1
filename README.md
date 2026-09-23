Currículo Pessoal em HTML & CSS

Página pessoal em formato de currículo/portfólio, desenvolvida em HTML semântico e CSS, como projeto de avaliação.
Autor: Bruno Morais (GitHub)

---
Sobre o projeto

A página apresenta o meu percurso de forma organizada e interativa, dividida em cinco secções:
Sobre mim: perfil e objetivos
Educação: percurso académico em formato de timeline
Experiência: percurso profissional em formato de timeline
Competências: barras de nível de confiança por área
Hobbies: cartões com os meus interesses pessoais
Cada item das timelines, das competências e dos hobbies abre uma janela (modal) com mais detalhes.
Estrutura de ficheiros

---
Funcionalidades (HTML & CSS)

HTML semântico: `header`, `nav`, `main`, `section`, `figure`, `figcaption`, `footer`, `iframe`
Layout responsivo (mobile first) com um breakpoint aos `768px`
CSS Grid (grelha de 12 colunas e grelha de hobbies) e Flexbox (cabeçalho, navegação, rodapé)
Variáveis CSS (`:root`) para toda a paleta de cores
Modo escuro automático com `@media (prefers-color-scheme: dark)`
Navegação fixa no topo (`position: sticky`) com scroll suave (`scroll-behavior: smooth`)
Modais feitos só com CSS, usando a pseudo-classe `:target`
Timelines verticais (esquerda e direita) criadas com `::before` e `::after`
Barras de competências cuja largura vem de uma variável CSS (`--percentagem`)
Efeitos de hover e active em botões, links e cartões
Botão de download do CV em PDF (atributo `download`)
Acessibilidade: `aria-label` nos links com ícone, `alt` nas imagens e `lang="pt-pt"`

---
JavaScript (Opcional)

O ficheiro `script.js` tem apenas duas pequenas funções de conveniência. A página funciona toda sem ele.
Destaca na barra de navegação a secção que está a ser vista (`IntersectionObserver`)
Fecha o modal quando se clica fora da caixa
Pausa o vídeo quando se fecha o modal

---
Como abrir

Não é preciso instalar nada. Basta abrir `pagina/index.html` num browser (Chrome, Firefox, Edge).
É necessária ligação à internet para carregar os ícones do Google Fonts.

---
Recursos externos

Ícones: Material Symbols (Google Fonts)
Logótipos de software, bandas, filmes e jogos: pertencem aos respetivos donos e são usados apenas para fins académicos

---
Tecnologias

HTML5 · CSS3 · JavaScript (opcional)

