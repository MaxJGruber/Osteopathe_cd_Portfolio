<template>
  <div>
    <ExtendedNavbar :page="'patients'" />
    <div class="patients-pic-cover"></div>
    <AttentionTab :message="message1" />
    <Disclaimer />
    <hr />
    <AboutRight :segment="nourissons" />
    <hr />
    <AboutLeft :segment="enfants" />
    <hr />
    <AboutRight :segment="femmesEnceintes" />
    <hr />
    <AboutLeft :segment="adultes" />
    <hr />
    <AboutRight :segment="sportifs" />
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar";
import Disclaimer from "../components/Disclaimer";
import AboutRight from "../components/About-Right";
import AboutLeft from "../components/About-Left";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";

export default {
  components: {
    ExtendedNavbar,
    Disclaimer,
    AboutRight,
    AboutLeft,
    AttentionTab,
    Footer,
  },
  data: () => {
    return {
      message1: {
        long: "En cas d'urgence, veuillez appeler le 15.",
        short: "En cas d'urgence, appelez le 15.",
      },
      nourissons: {
        id: "nourissons",
        title: "La prise en charge ostéopathique des nourissons",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting2.jpg"),
      },
      enfants: {
        id: "enfants",
        title: "La prise en charge ostéopathique des enfants & adolescents",
        intro: `L'ostéopathie chez les enfants et adolescents est adaptée et recommandée pour différents motifs semblables à l'adulte. Cependant, des troubles de la statique sont plus fréquents à ces âges comme risque de lordoses et dysfonctions au niveau des courbures rachidiennes. Elles sont souvent dues à une mauvaise adaptation du corps par rapport à la croissance ou bien encore des troubles posturaux avec les sacs à dos lourd et mauvaise assise pendant les cours.`,
        subtext1: `Votre ostéopathe Charles Dumeige emploiera des techniques ostéopathiques adaptées en fonction de l'âge (3-14 ans pour les enfants et 14-18 ans pour les adolescents). Il vous procurera des conseils au niveau hygiéno-diététique (pratiquer un sport régulier par exemple) ou encore vous expliquera les gestes et postures afin d'éviter ses troubles de la statique.`,
        subtext2: `
Il est recommandé de consulter une fois par an maximum, en fonction des besoins de l'enfant (bien rester attentif à ses plaintes et anticiper l'apparition de douleurs associées). Un parent devra être obligatoirement présent lors de la consultation et des conseils lui seront donnés également pour sensibiliser à surveiller l'évolution de la croissance de l'enfant. En effet, il devra surveiller l'évolution des courbures rachidiennes afin de détecter des possibles apparition de scoliose, pour qu'une prise en charge multidisciplinaire adaptée soit mise en place avant un stade trop avancé (séances de kinésithérapeute fortement recommandées à ce moment là en complément). L'ostéopathie participe à l'efficacité et à la stabilité du traitement.`,
        img: require("../assets/photo-gallery/shooting5.jpg"),
      },
      femmesEnceintes: {
        id: "enceinte",
        title: "La prise en charge ostéopathique de la femme enceinte",
        intro: `Durant la grossesse, le corps s'adapte en fonction du développement de l'enfant in utéro. Cela aura un impact sur les forces réparties dans le corps au niveau des charnières, des vertèbres pivot ainsi que sur les courbures (lordoses, cyphoses). Le bassin aussi se modèle et d'autres changements mécaniques et physiologiques se manifestent. L'ostéopathie est recommandée pour rééquilibrer le corps face à ces changements, en utilisant des techniques adaptées en fonction des trimestres de grossesse.`,
        subtext1Title: `L'ostéopathie durant la grossesse et prévenir l'apparition de douleurs.`,
        subtext1: `Parfois le corps n'arrive pas à s'adapter face à ces changements et les douleurs apparaissent. Elles peuvent être sous-jacentes à des adaptations avant la grossesse qui se décompensent à un moment donné de cette dernière. En général, il s'agit de douleurs au niveau lombaire, de sciatalgies et de douleurs au niveau du bassin (sacrum-coccyx). Il peut y avoir des également des dysfonctionnements sur la sphère viscérale (troubles du transit, ballonnements, douleurs abdominales) et sur la sphère crânienne (céphalées, migraines).

Dans ces cas, il est recommandé de consulter durant la grossesse, chaque trimestre pour faire des suivis et s'orienter un axe de prévention pré et post accouchement.`,
        subtext2Title: `L'ostéopathie après la grossesse.`,
        subtext2: `On ne pense pas forcément à la phase de post partum pour la femme et son bien-être. Il est pourtant primordial de rester sur une bonne impression pour de nouvelles expériences à l'avenir et de soulager dans le nouveau rôle de maman. 

Durant la phase de grossesse, le corps de la femme enceinte change constamment et même après l'accouchement il subit encore des modifications sur les mêmes sphères évoquées précédemment et il peut y avoir des douleurs persistantes. Il est recommandé de consulter un mois après la naissance ou après la rééducation périnéale (sans se substituer d'un suivi gynéco-obstétrical).`,
        subtext3: `Votre ostéopathe Charles Dumeige prend en charge les premières consultations de femmes enceintes ainsi que les suivis de grossesse.`,
        img: require("../assets/photo-gallery/shooting11.jpg"),
      },
      adultes: {
        id: "adultes",
        title: "La prise en charge ostéopathique des adultes & séniors",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting12.jpg"),
      },
      sportifs: {
        id: "sportifs",
        title: "La prise en charge ostéopathique des sportifs",
        intro: `L'ostéopathie est une pratique manuelle traitant les pertes de
            mobilité des structures corporelles tel que les articulations
            musculo-squelettiques, les viscères, les tissus... Les techniques de
            manipulation permettent de corriger les dysfonctions dans les
            respects des barrières anatomiques et physiologiques du corps.
            L'objectif est de réguler l'homéostasie du corps et de permettre
            l'autorégulation de celui-ci.`,
        img: require("../assets/photo-gallery/shooting11.jpg"),
      },
    };
  },
};
</script>

<style>
.patients-pic-cover {
  background-image: url("../assets/photo-gallery/shooting14.jpg");
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>