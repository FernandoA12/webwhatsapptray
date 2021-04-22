const image = require('../image/logo')

module.exports = `
  /* IMAGEM INICIAL */
  .G8bNp {
    background-image: ${image}!important;
    border-radius: 0px!important;
    width: 400px!important;
    height: 180px!important;
  }
  
  /* BORDA BOTTOM DA TELA INICIAL */
  ._2zkCi::after {
    border-top: 6px solid #8257e6!important;
  }
  
  /* APAGA INFORMAÇÕES INICIAIS */
  .WG7wG {
    display: none!important;
  }

  /* COLOCA A COR ROXA NO TOP DA LISTA DE CONVERSAS E TOP PERFIL */
  ._1R3Un, ._2heqZ {
    background-color: #8257e6!important;
  }

  /* COR DE ITENS DO PERFIL */
  ._3weD7._1AJnI._29Iga {
    color: #8257e6!important;
  }
  
  /* COLOCA A COR BRANCA NOS ICONES DO TOP DA LISTA DE CONVERSAS */
  ._1R3Un svg {
    color: white!important;
  }

  /* PROGRESS */
  #startup div progress::-webkit-progress-inner-element {
    background-color: #8257e6!important;
  }
  #startup div progress::-webkit-progress-value {
    background-color: #8257e6!important;
  }
  #startup div progress::-webkit-progress-bar{
    background-color: #DADBD3!important;
  }

  /* MENSAGENS NOSSA */
  .message-out ._20zqk {
    background-color: #8257e6!important;
    color: white!important;
  }
  /* PONTA DO BALÃO */
  .message-out ._1bUzr {
    color: #8257e6!important;
  }
  /* OPTIONS MESSAGE */
  ._3qSKL._39Lm1 {
    background: #8257e6!important;
  }
  .two {
    overflow-y: scroll;
  }
  #side > div.SgIJV > div > button > div._1rPZq._2w7RB > span svg{
    color: #9061ff!important;
  }
  #pane-side > div:nth-child(1) > div > div > div:nth-child(11) > div > div > div._2Z4DV > div.TbtXF::after {
    color: #9061ff!important;
  }

  #app > div._3h3LX.app-wrapper-web.font-fix > div > div > div > div > div > div._1uJw_ > div._1dwBj._3xWLK {
    background-color: #8257e6!important;
  }

  #app > div._3h3LX.app-wrapper-web.font-fix > div > div > div > div > div > div._3SRfO > div > span > span {
    color: #9061ff!important;
  }
  
  #app > div._3h3LX.app-wrapper-web.font-fix > div > div > div > div > div > div._1uJw_ > div._1dwBj._3Pd9_ > div > div {
    color: #9061ff!important;
  }

  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div::before, #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > div.O1rXL > div > span > button {
    background-color: #8257e6!important;
  }

  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-header > div,
  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-header > span,
  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > div._29lv_,
  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div._3UUj0,
  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > a,
  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main > div > div.O1rXL > div > div > span{
    display: none;
  }

  #app > div._3h3LX._1dqoA.app-wrapper-web.font-fix > div > div.landing-window > div.landing-main {
    margin-right: 45px!important;
  }
`
