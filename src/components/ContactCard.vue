<template>
  <div class="contact-card">
    <h4
      class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl"
    >
      Charles Dumeige
    </h4>
    <h6><span>Adresse: </span>19 Rue Madame Dassy, 77100 Meaux</h6>
    <div class="text-center" data-app>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#3abfd6" v-bind="attrs" v-on="on" id="timetable"
            >Aujourdh'hui:&nbsp;
            <span id="closed" v-show="(isOpen = false)"> FERME</span
            ><span id="open" v-show="(isOpen = true)"> OUVERT</span></v-btn
          >
        </template>
        <v-list>
          <v-list-item v-for="(day, index) in times" :key="index">
            <v-list-item-title>{{ day.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <h6>
      <span>Moyens de Transports:</span>
      <ul>
        <li>Transilien - Gare de Meaux (ligne P)</li>
        <li>Bus - Marché (lignes 4, 69, 3, 19, 64 et 18)</li>
        <li>Bus - Médiathèque (lignes 12, 3 et 69)</li>
      </ul>
    </h6>
    <h6><span>Informations pratiques: </span>1er étage avec ascenseur</h6>
    <a
      href="https://www.google.fr/maps/place/19+Rue+Madame+Dassy,+77100+Meaux/@48.9552123,2.8778515,17z/data=!3m1!4b1!4m5!3m4!1s0x47e8a104aa1c7251:0x7c587a186f9a2b9b!8m2!3d48.9552088!4d2.8800402"
      class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-logo-blue bg-white hover:bg-indigo-50"
    >
      Plannifiez votre itinéraire
    </a>
  </div>
</template>

<script>
// var weekdays = [
//   ["Sunday", 9.3, 12.0, 15.3, 22.0],
//   ["Monday", 8.3, 12.0, 15.3, 19.0],
//   ["Tuesday", 8.3, 12.0, 15.3, 19.0],
//   ["Wednesday", 8.3, 12.0, 15.3, 19.0],
//   ["Thursday", 8.3, 12.0, 15.3, 19.0],
//   ["Friday", 8.3, 11.3],
//   ["Saturday"], // we are closed, sorry!
// ];
// var day = weekdays[n];

// if (now > day[1] && now < day[2]) {
//   console.log("We're open right now!");
// } else {
//   console.log("Sorry, we're closed!");
// }
export default {
  data: () => ({
    times: [
      {
        title: "Lundi: 8H-20H",
        businessHours: ["Monday", 8.0, 20.0],
      },
      {
        title: "Mardi: 8H-20H",
        businessHours: ["Tuesday", 8.0, 20.0],
      },
      {
        title: "Mercredi: 8H-20H",
        businessHours: ["Wednesday", 8.0, 20.0],
      },
      {
        title: "Jeudi: 8H-20H",
        businessHours: ["Thursday", 8.0, 20.0],
      },
      {
        title: "Vendredi: 8H-20H",
        businessHours: ["Friday", 8.0, 20.0],
      },
      {
        title: "Samedi: 8H-20H ",
        businessHours: ["Saturday", 8.0, 20.0],
      },
      {
        title: "Dimanche: 11H-15H",
        businessHours: ["Sunday", 11.0, 15.0],
      },
    ],
    offset: true,
    isOpen: null,
  }),
  methods: {
    openCheck() {
      var d = new Date();
      var n = d.getDay();
      var now = d.getHours() + "." + d.getMinutes();
      var day = this.times[n - 1];
      if (now > day.businessHours[1] && now < day.businessHours[2]) {
        console.log("We're open right now!");
        this.isOpen = !this.isOpen;
      } else {
        console.log("Sorry, we're closed!");
        this.isOpen = !this.isOpen;
      }
    },
  },
  created() {
    this.openCheck();
  },
};
</script>

<style scoped>
.contact-card * {
  margin-top: 15px;
}

#timetable {
  color: white;
}

#closed {
  margin-top: 0;
  color: red;
}

#open {
  margin-top: 0;
  color: rgb(11, 240, 11);
}

#name {
  font-size: 2rem;
}

span {
  font-weight: bolder;
}

.panel {
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  /* opacity: 0%; */
}
</style>