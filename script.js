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
      titulo: "Aspectos da partida: Penguins 7, Flyers 0",
      imagem: "assets/7a0.png",
      link: "aspectos_da_partida_penguins_7_flyers_0/"
    },
    {
      titulo: "Penguins abrem a temporada fora de casa contra os Flyers",
      imagem: "assets/pensvsflyers.jpg",
      link: "penguins_abrem_a_temporada_fora_de_casa_contra_os_flyers/"
    },
    {
      titulo: "Resumo da pré-temporada dos Penguins: 2 vitórias e 2 derrotas",
      imagem: "assets/preseason.png",
      link: "resumo_da_pre_temporada_dos_penguins/"
    },
    {
      titulo: "Penguins terminam torneio de prospects com duas vitórias e uma derrota",
      imagem: "assets/prospects.jpg",
      link: "penguins_terminam_torneio_de_prospects_com_duas_vitorias_e_uma_derrota/"
    },
    {
      titulo: "Crosby deve renovar com os Penguins ainda antes da temporada, segundo jornalistas",
      imagem: "assets/crosby.png",
      link: "crosby_deve_renovar_com_os_penguins_antes_da_temporada/"
    },
    {
      titulo: "Penguins renovam com Ville Koivunen em contrato histórico",
      imagem: "assets/koivunen.png",
      link: "penguins_renovam_com_ville_koivunen_em_contrato_historico/"
    },
  ];

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

const jogos = [
    {
        time1: "MTL",
        logo1: "https://assets.nhle.com/logos/nhl/svg/MTL_light.svg",
        gols1: 5,

        time2: "PIT",
        logo2: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        gols2: 6,

        link: "https://www.nhl.com/gamecenter/mtl-vs-pit/2026/10/03/2026020026"
    },

    {
        time1: "PIT",
        logo1: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        gols1: 7,

        time2: "PHI",
        logo2: "https://assets.nhle.com/logos/nhl/svg/PHI_light.svg",
        gols2: 0,

        link: "https://www.nhl.com/gamecenter/pit-vs-phi/2026/09/30/2026020006"
    },

    {
        time1: "PIT",
        logo1: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        gols1: 3,

        time2: "BUF",
        logo2: "https://assets.nhle.com/logos/nhl/svg/BUF_light.svg",
        gols2: 1,

        link: "https://www.nhl.com/gamecenter/pit-vs-buf/2026/09/26/2026010055"
    },

    {
        time1: "PIT",
        logo1: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        gols1: 0,

        time2: "CBJ",
        logo2: "https://assets.nhle.com/logos/nhl/svg/CBJ_light.svg",
        gols2: 4,

        link: "https://www.nhl.com/gamecenter/pit-vs-cbj/2026/09/24/2026010046"
    },

    {
        time1: "DET",
        logo1: "https://assets.nhle.com/logos/nhl/svg/DET_light.svg",
        gols1: 7,

        time2: "PIT",
        logo2: "https://assets.nhle.com/logos/nhl/svg/PIT_light.svg",
        gols2: 4,

        link: "https://www.nhl.com/gamecenter/det-vs-pit/2026/09/22/2026010025"
    },
];

const container = document.querySelector(".cards-jogos");

jogos.forEach(jogo => {

    const resultado1 = jogo.gols1 > jogo.gols2 ? "vitoria" : "derrota";
    const resultado2 = jogo.gols2 > jogo.gols1 ? "vitoria" : "derrota";

    const card = `
        <a class="jogo" href="${jogo.link}" target="_blank">

            <div class="time" id="${resultado1}">
                <div class="equipe">
                    <img src="${jogo.logo1}" alt="${jogo.time1}" width="100%">
                    <p>${jogo.time1}</p>
                </div>

                <div class="resultado">
                    <p class="placar">${jogo.gols1}</p>
                </div>
            </div>

            <div class="time" id="${resultado2}">
                <div class="equipe">
                    <img src="${jogo.logo2}" alt="${jogo.time2}" width="100%">
                    <p>${jogo.time2}</p>
                </div>

                <div class="resultado">
                    <p class="placar">${jogo.gols2}</p>
                </div>
            </div>

        </a>
    `;

    container.innerHTML += card;

});