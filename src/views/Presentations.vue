<template>
  <div>
    <ExtendedNavbar :page="'presentations'" />
    <div class="presentation-pic-cover slide-in-bottom"></div>
    <AttentionTab :page="`Page des présentations`" />
    <div class="mobile-margin-presentations">
      <Disclaimer />
      <hr />
      <PresentationsAboutRight :segment="osteopathie" />
      <hr />
      <PresentationsAboutLeft :segment="practioner" />
      <!-- <div class="elfsight-app-20fce0e0-f9ef-427d-bbff-3b4df952898d"></div> -->
      <hr />
      <AboutRight :segment="profession" />
    </div>
    <Footer />
  </div>
</template>

<script>
import ExtendedNavbar from "../components/ExtendedNavbar.vue";
import Disclaimer from "../components/Disclaimer";
import PresentationsAboutRight from "../components/Presentations-About-Right";
import PresentationsAboutLeft from "../components/Presentations-About-Left";
import AboutRight from "../components/About-Right";
import AttentionTab from "../components/AttentionTab";
import Footer from "../components/Footer";

import { osteopathie } from "../PresentationsFolder/Osteopathie";
import { practioner } from "../PresentationsFolder/Practioner";
import { profession } from "../PresentationsFolder/Profession";

export default {
  components: {
    ExtendedNavbar,
    Disclaimer,
    PresentationsAboutRight,
    AboutRight,
    PresentationsAboutLeft,
    AttentionTab,
    Footer,
  },
  data: () => {
    return {
      osteopathie: osteopathie,
      practioner: practioner,
      profession: profession,
    };
  },
};
</script>

<style>
.presentation-pic-cover {
  background-image: url("../assets/photo-gallery/shooting12.jpg");
  background-size: cover;
  background-position: center;
  height: 20rem;
}

.about {
  height: auto;
}

.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
}

#grid-client {
  display: grid;
  grid-template-columns: 55% 45%;
  grid-gap: 10px;
}

.about-pic-frame {
  width: fit-content;
  max-height: 100%;
  /* display: flex; */
}
.about-pic {
  border-radius: 0.5em;
  border: 2px solid #3abfd6;
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 450px) {
  #grid-client {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  #grid-client .about-pic {
    height: 80%;
  }
  .mobile-margin-presentations {
    margin: auto 1.2em;
  }
}
</style>