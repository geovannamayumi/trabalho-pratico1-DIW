/* app.js
   Estrutura de dados (JSON-like) e funções para:
   - montar carousel de destaques
   - montar cards na home
   - montar página de detalhes (a partir de ?id=)
*/

const acervo = [
  {
    id: 1,
    titulo: "Verity",
    descricao: "Uma escritora descobre um manuscrito chocante que revela segredos sombrios de uma família, transformando o luto em um jogo perigoso de sedução e mentiras.",
    conteudo: "Verity é um thriller psicológico que acompanha Lowen Ashleigh, uma escritora que é contratada para completar uma série de livros de uma famosa autora, Verity Crawford, que está incapaz de continuar devido a um acidente. Enquanto investiga os manuscritos de Verity, Lowen descobre segredos perturbadores que colocam em risco sua sanidade e segurança. O livro é uma história intensa e cheia de suspense, explorando os limites entre a verdade e a ficção.",
    genero: "Thriller Psicológico",
    ano: 2018,
    paginas: 320,
    destaque: true,
    imagem_principal: "IMG/verity.jpg",
    fotos: [
      { id: 1, nome: "Capa - Verity", imagem: "IMG/verity.jpg" },
      { id: 2, nome: "Ilustração 1 Verity", imagem: "IMG/verity-2.jpg" }
    ]
  },
  {
    id: 2,
    titulo: "É Assim que Acaba (It Ends with Us)",
    descricao: "Diante da violência, uma mulher deve decidir entre o amor presente e a coragem de quebrar um ciclo doloroso, honrando seu passado.",
    conteudo: "É Assim que Acaba é um dos romances mais impactantes de Colleen Hoover, abordando temas delicados como violência doméstica e resiliência. A história segue Lily Bloom, uma jovem que se muda para Boston e abre sua própria floricultura. Lá, ela conhece Ryle Kincaid, um neurocirurgião charmoso e determinado, com quem desenvolve um relacionamento intenso. No entanto, o passado de Lily retorna quando Atlas Corrigan, seu primeiro amor, reaparece em sua vida, trazendo à tona memórias dolorosas. Este romance poderoso explora as difíceis escolhas que Lily deve fazer para proteger a si mesma e aos que ama.",
    genero: "Romance Contemporâneo/Drama",
    ano: 2016,
    paginas: 384,
    destaque: true,
    imagem_principal: "IMG/assim_acaba.jpg",
    fotos: [
      { id: 1, nome: "Capa - É Assim que Acaba", imagem: "IMG/assim_acaba.jpg" }
    ]
  },
  {
    id: 3,
    titulo: "Todas as Suas (Im)Perfeições",
    descricao: "Romance sobre casamento, imperfeições e fertilidade.",
    conteudo: "Quinn e Graham lutam para manter a relação enquanto enfrentam desafios pessoais e médicos.",
    genero: "Romance",
    ano: 2018,
    paginas: 305,
    destaque: true,
    imagem_principal: "IMG/imperfeicoes.jpg",
    fotos: [
      { id: 1, nome: "Capa - Imperfeições", imagem: "IMG/imperfeicoes.jpg" }
    ]
  },
  {
    id: 4,
    titulo: "Confess",
    descricao: "Confissões anônimas se tornam a arte de um relacionamento, revelando a verdade e expondo segredos perigosos que ameaçam o amor.",
    conteudo: "Em Confesse, seguimos a vida de Auburn Reed, uma jovem determinada a reconstruir sua vida e a recuperar tudo o que perdeu. Ela conhece Owen Gentry, um artista com um segredo único: ele cria suas obras a partir de confissões anônimas deixadas em sua galeria. Conforme Auburn e Owen se envolvem, segredos do passado ameaçam separá-los. O livro é uma exploração tocante do poder da verdade e da necessidade de enfrentar os próprios demônios para alcançar a felicidade.",
    genero: "Romance",
    ano: 2015,
    paginas: 352,
    destaque: true,
    imagem_principal: "IMG/confess.jpg",
    fotos: [
      { id: 1, nome: "Capa - Confess", imagem: "IMG/confess.jpg" }
    ]
  },
  {
    id: 5,
    titulo: "Métrica (Slammed)",
    descricao: "Um amor inesperado usa a poesia como linguagem, mas uma revelação esmagadora testa a força de suas promessas.",
    conteudo: "Métrica é o primeiro romance de Colleen Hoover e marca o início da série Slammed. A história acompanha Layken, uma jovem de 18 anos que, após a morte do pai, muda-se com a mãe e o irmão para uma nova cidade.Lá, ela conhece Will Cooper, seu vizinho charmoso e poeta. A conexão entre eles é imediata, mas diversos obstáculos se colocam em seu caminho, incluindo segredos familiares e responsabilidades inesperadas.",
    genero: "New Adult/Romance",
    ano: 2012,
    paginas: 352,
    destaque: false,
    imagem_principal: "IMG/metrica.jpg",
    fotos: [
      { id: 1, nome: "Capa - Métrica", imagem: "IMG/metrica.jpg" }
    ]
  },
  {
    id: 6,
    titulo: "Pausa (Point of Retreat)",
    descricao: "Layken e Will lutam para manter seu amor intacto, provando que o primeiro amor exige sacrifício e renovação diária.",
    conteudo: "Pausa é a continuação de Métrica e aprofunda a história de Layken e Will. Agora juntos, eles enfrentam novos desafios enquanto tentam consolidar seu relacionamento.O livro destaca a luta de Will para proteger aqueles que ama e a força de Layken ao enfrentar as adversidades. A narrativa é repleta de momentos intensos e emocionantes, com ênfase na importância da resiliência e do apoio mútuo. Pausa solidifica a série como uma das mais queridas entre os fãs de Colleen Hoover.",
    genero: "New Adult/Romance",
    ano: 2012,
    paginas: 352,
    destaque: false,
    imagem_principal: "IMG/pausa.jpg",
    fotos: [
      { id: 1, nome: "Capa - Pausa (Point of Retreat)", imagem: "IMG/pausa.jpg" }
    ]
  },
  {
    id: 7,
    titulo: "Essa Garota (This Girl)",
    descricao: "O reencontro com o passado de Layken, narrado pelo olhar de Will, revela a profundidade de sua dor e a força de sua devoção.",
    conteudo: "Essa Garota é o terceiro livro da série Slammed e oferece uma nova perspectiva sobre os eventos dos dois primeiros livros. Narrado principalmente do ponto de vista de Will, o romance revisita momentos-chave de Métrica e Pausa, ao mesmo tempo em que revela novos detalhes sobre o passado de Will.Além disso, a história avança para mostrar os desafios que o casal enfrenta ao planejar seu futuro juntos.",
    genero: "New Adult/Romance",
    ano: 2013,
    paginas: 320,
    destaque: false,
    imagem_principal: "IMG/essa_garota.jpg",
    fotos: [
      { id: 1, nome: "Capa - Essa Garota", imagem: "IMG/essa_garota.jpg" }
    ]
  },
  {
    id: 8,
    titulo: "Um Caso Perdido (Hopeless)",
    descricao: "Memórias reprimidas vêm à tona quando um amor enigmático confronta a escuridão de uma infância marcada por segredos e abuso.",
    conteudo: "Um Caso Perdido é o primeiro livro da série Hopeless e acompanha a vida de Sky Davis, uma adolescente que sempre viveu uma vida tranquila e afastada das redes sociais. Sua vida muda drasticamente quando ela conhece Dean Holder, um jovem com um passado misterioso. Conforme Sky se aproxima de Holder, segredos do seu próprio passado começam a emergir, mudando para sempre a sua percepção sobre si mesma e sobre aqueles ao seu redor.",
    genero: "New Adult/Drama",
    ano: 2013,
    paginas: 384,
    destaque: false,
    imagem_principal: "IMG/um_caso_perdido.jpg",
    fotos: [
      { id: 1, nome: "Capa - Um Caso Perdido", imagem: "IMG/um_caso_perdido.jpg" }
    ]
  },
  {
    id: 9,
    titulo: "Sem Esperança (Losing Hope)",
    descricao: "O passado traumático de Holder e sua busca por perdão e redenção são expostos em sua perspectiva da história de amor com Sky.",
    conteudo: "Sem Esperança é a continuação de Um Caso Perdido, narrado do ponto de vista de Dean Holder. Este livro oferece uma nova perspectiva sobre os eventos de Um Caso Perdido, revelando os pensamentos e sentimentos de Holder enquanto ele lida com seu passado conturbado e seu amor por Sky. A narrativa é profunda e emocional, proporcionando aos leitores uma compreensão mais rica da história e dos personagens. ",
    genero: "New Adult/Drama",
    ano: 2013,
    paginas: 302,
    destaque: false,
    imagem_principal: "IMG/sem_esperança.jpg",
    fotos: [
      { id: 1, nome: "Capa - Sem Esperança", imagem: "IMG/sem_esperança.jpg" }
    ]
  },
  {
    id: 10,
    titulo: "Em Busca de Cinderela (Finding Cinderella)",
    descricao: "Um romance de reencontros que prova que o amor pode resistir ao tempo e ao destino, se a conexão for mágica.",
    conteudo: "Em Busca de Cinderela é uma novela spin-off da série Hopeless, que segue a história de Daniel Wesley, melhor amigo de Holder. Daniel encontra uma garota misteriosa em um armário escuro na escola, e eles compartilham uma conexão instantânea. No entanto, a garota desaparece, deixando Daniel com apenas uma lembrança de sua “Cinderela”. Um ano depois, Daniel se apaixona por Six, uma amiga de Sky, mas logo descobre que ela pode estar ligada ao seu encontro passado..",
    genero: "New Adult/Novela",
    ano: 2013,
    paginas: 160,
    destaque: false,
    imagem_principal: "IMG/cinderela.jpg",
    fotos: [
      { id: 1, nome: "Capa - Em Busca de Cinderela", imagem: "IMG/cinderela.jpg" }
    ]
  },
  {
    id: 11,
    titulo: "Talvez Um Dia (Maybe Someday)",
    descricao: "Traição e atração proibida se misturam quando uma conexão musical inegável força a redefinição de amor e lealdade.",
    conteudo: "Talvez Um Dia é o primeiro livro da série Maybe. A história gira em torno de Sydney, uma jovem que descobre a traição de seu namorado e de sua melhor amiga no dia do seu aniversário. Desolada, ela encontra apoio em Ridge, seu vizinho músico que a ajuda a transformar suas emoções em música. Juntos, eles descobrem uma conexão profunda, mas enfrentam muitos obstáculos, incluindo o fato de que Ridge tem uma namorada.",
    genero: "New Adult/Romance",
    ano: 2016,
    paginas: 368,
    destaque: false,
    imagem_principal: "IMG/talvez_dia.jpg",
    fotos: [
      { id: 1, nome: "Capa - Talvez Um Dia", imagem: "IMG/talvez_dia.jpg" }
    ]
  },
  {
    id: 12,
    titulo: "Talvez Não (Maybe Not)",
    descricao: "O ódio e a paixão se unem em um conto irônico onde a convivência forçada transforma a rivalidade em um romance inesperado.",
    conteudo: "Talvez Não é uma novela spin-off da série Maybe, focada na vida de Warren, o melhor amigo de Ridge. A trama se desenrola a partir do momento em que ele divide o apartamento com Bridgette, uma garota complicada e aparentemente fria. Apesar das constantes brigas, Warren sente uma atração irresistível por ela e decide descobrir o que está por trás de sua fachada. O livro é uma exploração divertida e apaixonante do relacionamento tumultuado entre os dois, proporcionando uma visão mais leve e cômica do universo de Talvez Um Dia.",
    genero: "New Adult/Novela",
    ano: 2014,
    paginas: 132,
    destaque: false,
    imagem_principal: "IMG/maybe_not.jpg",
    fotos: [
      { id: 1, nome: "Capa - Talvez Não", imagem: "IMG/maybe_not.jpg" }
    ]
  },
  {
    id: 13,
    titulo: "Talvez Agora (Maybe Now)",
    descricao: "O final da história dos casais que se apaixonaram pela música, explorando a realidade de um 'felizes para sempre' cheio de desafios.",
    conteudo: "Talvez Agora é a continuação direta de Talvez Um Dia e acompanha a evolução do relacionamento de Sydney e Ridge. Após superar os obstáculos iniciais, eles agora enfrentam novos desafios que colocam à prova sua união. Maggie, a ex-namorada de Ridge, também busca seu próprio caminho, lidando com questões pessoais e novas descobertas sobre si mesma. Talvez Agora aprofunda as histórias dos personagens, explorando temas como perdão, crescimento pessoal e as complexidades do amor. É uma sequência cativante que oferece closure e novas oportunidades para todos os envolvidos.",
    genero: "New Adult/Romance",
    ano: 2018,
    paginas: 352,
    destaque: false,
    imagem_principal: "IMG/maybe_now.jpg",
    fotos: [
      { id: 1, nome: "Capa - Talvez Agora", imagem: "IMG/maybe_now.jpg" }
    ]
  },
  {
    id: 14,
    titulo: "É Assim que Começa (It Starts with Us)",
    descricao: "A aguardada continuação sobre a vida de Lily e Atlas, que focam na cura e na construção de um amor incondicional após quebrarem o ciclo de violência.",
    conteudo: "É Assim que Começa é a continuação direta de É Assim que Acaba, proporcionando uma nova perspectiva sobre a vida de Lily após os eventos traumáticos do primeiro livro. Agora divorciada e cuidando de sua floricultura, Lily está tentando construir uma vida melhor para si e para sua filha, Emerson. Quando ela reencontra Atlas Corrigan, seu amor de juventude, surge a possibilidade de um novo começo. No entanto, Ryle Kincaid, seu ex-marido, ainda exerce uma influência complicada sobre sua vida. Este livro oferece uma narrativa emocionante e esperançosa sobre segundas chances e a luta para encontrar a felicidade apesar dos obstáculos.",
    genero: "Romance Contemporâneo/Drama",
    ano: 2022,
    paginas: 336,
    destaque: false,
    imagem_principal: "IMG/assim_comeca.jpg",
    fotos: [
      { id: 1, nome: "Capa - É Assim que Começa", imagem: "IMG/assim_comeca.jpg" }
    ]
  },
  {
    id: 15,
    titulo: "O Lado Feio do Amor (Ugly Love)",
    descricao: "Um acordo de sexo casual é destruído pelo poder avassalador de um amor que se recusa a ignorar um passado de profunda dor.",
    conteudo: "O Lado Feio do Amor é uma narrativa intensa e emocional que segue a história de Tate Collins e Miles Archer. Tate é uma enfermeira que se muda para o apartamento de seu irmão e conhece Miles, um piloto de avião que carrega um passado sombrio. Eles concordam em manter um relacionamento puramente físico, sem envolvimento emocional. No entanto, conforme Tate começa a se apaixonar por Miles, ela descobre que ele tem segredos profundos que o impedem de amar novamente. O Lado Feio do Amor explora as dificuldades do amor e a necessidade de superação pessoal.",
    genero: "Romance Contemporâneo",
    ano: 2014,
    paginas: 336,
    destaque: false,
    imagem_principal: "IMG/lado_feio.jpg",
    fotos: [
      { id: 1, nome: "Capa - O Lado Feio do Amor", imagem: "IMG/lado_feio.jpg" }
    ]
  },
  {
    id: 16,
    titulo: "November 9",
    descricao: "Um romance de encontros anuais que prova que o destino é poderoso, mas a verdade oculta tem o poder de quebrar todas as promessas.",
    conteudo: "Novembro, 9 narra a história de Fallon e Ben, que se conhecem por acaso em um dia marcante: 9 de novembro. Fallon é uma jovem atriz que sofreu um acidente que deixou cicatrizes visíveis e emocionais, enquanto Ben é um escritor aspirante. Eles concordam em se encontrar todos os anos, no mesmo dia, sem contato durante o restante do tempo. Ao longo dos anos, eles enfrentam desafios pessoais e amadurecem, desenvolvendo uma conexão intensa e lutando para superar seus medos e segredos.",
    genero: "Romance",
    ano: 2015,
    paginas: 336,
    destaque: false,
    imagem_principal: "IMG/november_9.jpg",
    fotos: [
      { id: 1, nome: "Capa - November 9", imagem: "IMG/november_9.jpg" }
    ]
  },
  {
    id: 17,
    titulo: "Tarde Demais (Too Late)",
    descricao: "Presa em um relacionamento tóxico e perigoso, uma mulher luta pela sua liberdade e encontra uma chance de salvação onde menos espera.",
    conteudo: "Tarde Demais acompanha a vida de Sloan, uma jovem presa em um relacionamento abusivo com Asa, um homem manipulador e perigoso. Quando Sloan conhece Carter, um misterioso vizinho, ela se sente atraída por ele e descobre um amor diferente de tudo que já experimentou. Sloan precisa encontrar coragem para escapar do controle de Asa e buscar um novo começo com Carter, enfrentando desafios emocionais e segredos perturbadores ao longo do caminho..",
    genero: "Romance/Thriller",
    ano: 2016,
    paginas: 432,
    destaque: false,
    imagem_principal: "IMG/tarde_demais.jpg",
    fotos: [
      { id: 1, nome: "Capa - Tarde Demais", imagem: "IMG/tarde_demais.jpg" }
    ]
  },
  {
    id: 18,
    titulo: "As Mil Partes do Meu Coração",
    descricao: "Uma adolescente lida com a depressão e a disfunção familiar ao desvendar segredos de sua casa que ameaçam expor sua própria fragilidade.",
    conteudo: "As Mil Partes do Meu Coração é centrado em Merit Voss, uma adolescente que vive com sua família disfuncional em uma antiga igreja convertida em casa. Merit guarda segredos profundos e sente-se invisível em sua própria casa. Quando um estranho chamado Sagan entra em sua vida, segredos começam a ser revelados, forçando Merit a enfrentar as complexidades de sua família e suas próprias emoções. O livro aborda temas como segredos familiares, relações complicadas e a busca pela verdadeira identidade.",
    genero: "Romance Young Adult/Drama Familiar",
    ano: 2017,
    paginas: 336,
    destaque: false,
    imagem_principal: "IMG/mil_partes.jpg",
    fotos: [
      { id: 1, nome: "Capa - As Mil Partes do Meu Coração", imagem: "IMG/mil_partes.jpg" }
    ]
  },
  {
    id: 19,
    titulo: "Se Não Fosse Você (Regretting You)",
    descricao: "Um acidente expõe segredos familiares, forçando uma mãe e uma filha a navegar pelo luto e a reconstruir seu complexo relacionamento.",
    conteudo: "Se Não Fosse Você segue Morgan e sua filha Clara, que tentam reconstruir suas vidas após a perda trágica do marido de Morgan. Enquanto Morgan lida com os segredos do passado de seu marido, Clara se envolve em um relacionamento complicado com Miller, cujo passado cria obstáculos. O livro explora temas como luto, amor, confiança e crescimento pessoal, apresentando uma narrativa envolvente sobre superação e a importância da família.",
    genero: "Romance Contemporâneo/Drama Familiar",
    ano: 2019,
    paginas: 400,
    destaque: false,
    imagem_principal: "IMG/se_nvoce.jpg",
    fotos: [
      { id: 1, nome: "Capa - Se Não Fosse Você", imagem: "IMG/se_nvoce.jpg" }
    ]
  },
  {
    id: 20,
    titulo: "Layla",
    descricao: "Um amor abalado por um ataque precisa lutar contra a realidade e o sobrenatural para salvar sua conexão de uma presença fantasmagórica.",
    conteudo: "Em Layla, seguimos a história de Leeds, um músico que se apaixona por Layla. Após um trágico acidente, Layla muda drasticamente, deixando Leeds confuso e preocupado. Ele conhece Willow, uma mulher que desperta seu interesse, mas Layla parece estar sempre presente, mesmo quando não está. Leeds se encontra envolvido em eventos inexplicáveis enquanto tenta descobrir a verdade sobre o que aconteceu com Layla e o que isso significa para o seu próprio futuro. Layla explora o amor, o destino e os mistérios sobrenaturais.",
    genero: "Romance Paranormal/Drama",
    ano: 2020,
    paginas: 320,
    destaque: false,
    imagem_principal: "IMG/layla.jpg",
    fotos: [
      { id: 1, nome: "Capa - Layla", imagem: "IMG/layla.jpg" }
    ]
  },
  {
    id: 21,
    titulo: "Até o Verão Terminar",
    descricao: "Uma jovem cética de origens humildes encontra um amor de verão com um rapaz rico, desafiando barreiras sociais e a fragilidade do destino.",
    conteudo: "Até o Verão Terminar acompanha Beyah Grim, uma adolescente que lida com problemas familiares e a morte de sua mãe. Enviada para passar o verão com seu pai distante em uma praia, ela conhece Samson, um jovem enigmático com seus próprios segredos. Juntos, eles embarcam em uma jornada de autodescoberta, cura emocional e aprendizado sobre confiança e enfrentamento dos medos. O livro aborda temas de família, perda, superação e amor, oferecendo uma história envolvente e emocionalmente profunda.",
    genero: "New Adult/Romance",
    ano: 2020,
    paginas: 368,
    destaque: false,
    imagem_principal: "IMG/verao_terminar.jpg",
    fotos: [
      { id: 1, nome: "Capa - Até o Verão Terminar ", imagem: "IMG/verao_terminar.jpg" }
    ]
  },
  {
    id: 22,
    titulo: "Uma Segunda Chance",
    descricao: "Uma ex-presidiária luta por uma segunda chance com a filha que nunca conheceu, encontrando perdão e amor onde menos esperava.",
    conteudo: "Uma Segunda Chance segue Kenna Rowan, que busca desesperadamente uma segunda chance para reconstruir sua vida após um trágico acidente. Depois de passar cinco anos na prisão, ela retorna à cidade onde tudo deu errado, determinada a ficar perto de sua filha. No entanto, os moradores locais a rejeitam, exceto Ledger Ward, proprietário de um bar e um dos poucos que ainda a apoiam. O relacionamento deles corre perigo se a cidade descobrir. O livro explora os efeitos dos julgamentos precipitados e a importância de dar às pessoas a oportunidade de se reinventarem.",
    genero: "Romance Contemporâneo/Drama",
    ano: 2022,
    paginas: 352,
    destaque: false,
    imagem_principal: "IMG/segunda_chance.jpg",
    fotos: [
      { id: 1, nome: "Capa - Uma Segunda Chance", imagem: "IMG/segunda_chance.jpg" }
    ]
  },
  {
    id: 23,
    titulo: "The Kiss (A Father’s Kiss)",
    descricao: "Um epílogo que celebra a beleza dos novos começos e a força inabalável da família e do amor.",
    conteudo: "A Father’s Kiss é um conto comovente que explora a complexidade das relações familiares e o impacto duradouro de um simples gesto. A narrativa é curta, mas profundamente emocional, destacando a habilidade de Hoover em capturar a essência das emoções humanas em poucas páginas.",
    genero: "Conto/Epílogo",
    ano: 2014,
    paginas: 358,
    destaque: false,
    imagem_principal: "IMG/the_kiss.jpg",
    fotos: [
      { id: 1, nome: "Capa - The Kiss)", imagem: "IMG/the_kiss.jpg" }
    ]
  },
  {
    id: 24,
    titulo: "Never Never (com Tarryn Fisher)",
    descricao: "Um casal perde a memória do seu relacionamento e precisa se apaixonar novamente para desvendar o quebra-cabeça de seus segredos.",
    conteudo: "Never Never é uma série escrita em colaboração com Tarryn Fisher e é composta por três partes. A trama gira em torno de Charlie e Silas, que misteriosamente perdem todas as suas memórias e precisam descobrir quem são e o que aconteceu. Conforme investigam o mistério de sua amnésia, eles se deparam com segredos sombrios e revelações chocantes sobre seu passado. Cada volume traz novos elementos e reviravoltas, mantendo o leitor ansioso pelo desfecho. Never Never é uma história intrigante que combina suspense, romance e mistério de forma magistral.",
    genero: "Romance/Mistério",
    ano: 2014,
    paginas: 464,
    destaque: false,
    imagem_principal: "IMG/nunca_jamais.jpg",
    fotos: [
      { id: 1, nome: "Capa - Never Never", imagem: "IMG/nunca_jamais.jpg" }
    ]
  },


];

/* ---------- Helpers ---------- */

function formatarTexto(texto, max = 140) {
  if (!texto) return "";
  return texto.length > max ? texto.slice(0, max - 3) + "..." : texto;
}

/* ---------- Home: Carousel de destaques ---------- */

function montarCarouselDestaques() {
  const destaques = acervo.filter(i => i.destaque);
  const indicators = document.getElementById('carousel-indicators');
  const inner = document.getElementById('carousel-inner');

  if (!inner || !indicators) return;

  indicators.innerHTML = '';
  inner.innerHTML = '';

  destaques.forEach((item, idx) => {
    // indicadores
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('data-bs-target', '#destaqueCarousel');
    button.setAttribute('data-bs-slide-to', idx.toString());
    if (idx === 0) button.classList.add('active');
    button.setAttribute('aria-label', `Slide ${idx + 1}`);
    indicators.appendChild(button);

    // slide
    const slide = document.createElement('div');
    slide.className = 'carousel-item' + (idx === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="destaque-slide row align-items-center gx-4">
        <div class="col-md-4 text-center">
          <a href="detalhes.html?id=${item.id}">
            <img src="${item.imagem_principal}" class="d-block mx-auto destaque-img" alt="${item.titulo}">
          </a>
        </div>
        <div class="col-md-8">
          <h3>${item.titulo}</h3>
          <p>${formatarTexto(item.conteudo, 280)}</p>
          <a class="btn btn-rosa" href="detalhes.html?id=${item.id}">Ver detalhes</a>
        </div>
      </div>
    `;
    inner.appendChild(slide);
  });
}

/* ---------- Home: Cards de todos os itens ---------- */

function montarCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;

  container.innerHTML = '';
  acervo.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 mb-4';

    col.innerHTML = `
      <div class="card card-rosa h-100 shadow-sm">
        <a href="detalhes.html?id=${item.id}" class="card-img-top-link">
          <img src="${item.imagem_principal}" class="card-img-top" alt="${item.titulo}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${formatarTexto(item.descricao, 130)}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-outline-rosa">Ver detalhes</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

/* ---------- Detalhes: montar conteúdo da página de detalhes ---------- */

function montarDetalhes() {
  // pega id da query string
  const params = new URLSearchParams(window.location.search);
  const idParam = parseInt(params.get('id'), 10);
  if (Number.isNaN(idParam)) return;

  const item = acervo.find(x => x.id === idParam);
  const container = document.getElementById('detalhes-container');
  const fotosContainer = document.getElementById('fotos-container');

  if (!container) return;

  if (!item) {
    container.innerHTML = `<div class="alert alert-danger">Item não encontrado</div>`;
    if (fotosContainer) fotosContainer.innerHTML = '';
    return;
  }

  // Monta o bloco principal (imagem + meta + conteúdo)
  container.innerHTML = `
    <div class="row align-items-start p-3 rounded bg-light-rosa">
      <div class="col-md-4 text-center">
        <img src="${item.imagem_principal}" alt="${item.titulo}" class="img-fluid rounded detalhe-imagem-main">
      </div>
      <div class="col-md-8">
        <h2 class="mb-1">${item.titulo}</h2>
        <p class="text-muted small mb-2">${item.genero} • ${item.ano} • ${item.paginas} páginas</p>
        <p class="mb-2"><strong>Resumo:</strong> ${item.descricao}</p>
        <p>${item.conteudo}</p>

        <div class="mt-3">
          <a class="btn btn-rosa" href="index.html">Voltar à Home</a>
        </div>
      </div>
    </div>
  `;

  // Monta fotos vinculadas (entidade secundária)
  if (fotosContainer) {
    fotosContainer.innerHTML = '';
    if (Array.isArray(item.fotos) && item.fotos.length > 0) {
      item.fotos.forEach(f => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-3 mb-3';
        col.innerHTML = `
          <div class="card card-rosa h-100 text-center">
            <img src="${f.imagem}" class="card-img-top" alt="${f.nome}">
            <div class="card-body py-2">
              <p class="card-text small mb-0">${f.nome}</p>
            </div>
          </div>
        `;
        fotosContainer.appendChild(col);
      });
    } else {
      fotosContainer.innerHTML = '<p class="text-muted">Nenhuma foto associada.</p>';
    }
  }
}

/* ---------- Inicialização (determine qual página está ativa) ---------- */

document.addEventListener('DOMContentLoaded', () => {
  // se existir o carousel, estamos na home
  if (document.getElementById('destaqueCarousel')) {
    montarCarouselDestaques();
  }

  // se existir container de cards, montar
  if (document.getElementById('cards-container')) {
    montarCards();
  }

  // se estivermos na página de detalhes
  if (document.getElementById('detalhes-container')) {
    montarDetalhes();
  }
});
