document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  const noticias = [
    {
      titulo: "Penguins renovam contrato com atacante Connor Dewar e defensor Ilya Solovyov",
      imagem: "assets/placeholder.avif",
      link: "penguins_renovam_contrato_com_atacante_connor_dewar_e_defensor_ilya_solovyov/"
    },
    {
      titulo: "Promessa dos Pens, Bill Zonnon se destaca nos Playoffs da Calder Cup",
      imagem: "assets/zonnon.png",
      link: "link1.html"
    },
    {
      titulo: "Mason McTavish, dos Ducks, pode interessar aos Penguins nessa temporada",
      imagem: "assets/mctavish.jpg",
      link: "link3.html"
    },
    {
      titulo: "Sidney Crosby jogará o mundial de 2026 pela Seleção Canadense",
      imagem: "assets/sid.png",
      link: "link4.html"
    },
    {
      titulo: "Kyle Dubas fala sobre conversas de renovação com Evgeni Malkin",
      imagem: "assets/dubas.png",
      link: "link5.html"
    },
    {
      titulo: "Tommy Novak e Connor Clifton representarão os EUA no mundial de 2026",
      imagem: "assets/novak.png",
      link: "link6.html"
    }
  ];

  // Últimas notícias list
  const listaContainer = document.querySelector(".noticias-secundarias");
  if (listaContainer) {
    listaContainer.innerHTML = "<h2>Últimas notícias</h2>";
    noticias.forEach(noticia => {
      listaContainer.innerHTML += `
        <a href="noticias/${noticia.link}" class="link-noticia-secundaria flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
               fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
          <span>${noticia.titulo}</span>
        </a>
      `;
    });
  }

  // Noticias cards grid
  const cardsContainer = document.querySelector(".noticias-cards");
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
    noticias.forEach(noticia => {
      cardsContainer.innerHTML += `
        <a href="noticias/${noticia.link}" class="card">
          <img src="${noticia.imagem}" alt="Imagem da notícia">
          <h3>${noticia.titulo}</h3>
        </a>
      `;
    });
  }

  // Outras notícias sidebar
  const outrasNoticiasCards = document.querySelector(".cards-outras-noticias");
  if (outrasNoticiasCards) {
    outrasNoticiasCards.innerHTML = "";

    noticias.forEach(noticia => {
      outrasNoticiasCards.innerHTML += `
        <a class="card-outras-noticias flex" href="../${noticia.link}">
          <div class="foto-card-outras-noticias">
            <img src="../../${noticia.imagem}" alt="Imagem da notícia">
          </div>
          <p>${noticia.titulo}</p>
        </a>
      `;
    });
  }
});
