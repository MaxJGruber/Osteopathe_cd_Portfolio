<template>
  <div class="contact-card">
    <h4
      class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl title-name"
    >
      Charles Dumeige
    </h4>
    <div class="business-hours-dropdown text-center" data-app>
      <v-menu open-on-hover bottom offset-x>
        <template v-slot:activator="{ on, attrs }"
          ><span>Aujourd'hui: </span>
          <v-btn
            v-bind="attrs"
            v-on="on"
            id="timetable-open"
            v-show="(isOpen = true)"
            >OUVERT
            <font-awesome-icon icon="door-open" class="icon-open" /></v-btn
          ><v-btn
            v-bind="attrs"
            v-on="on"
            id="timetable-closed"
            v-show="(isOpen = false)"
            >FERME<font-awesome-icon icon="door-closed" class="icon-closed"
          /></v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(day, index) in times"
            :key="index"
            class="hover:bg-gray-100 times"
          >
            <v-list-item-title>{{ day.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <h4 v-show="(isOpen = false)">
      Le cabinet reouvre {{ tomorrowDay }} à {{ tomorrowHour }} heure.
    </h4>
    <h6><span>Adresse: </span>19 Rue Madame Dassy, 77100 Meaux</h6>
    <h6>
      <span>Moyens de Transports:</span>
      <ul>
        <li>Transilien - Gare de Meaux (ligne P)</li>
        <li>Bus - Marché (lignes 4, 69, 3, 19, 64 et 18)</li>
        <li>Bus - Médiathèque (lignes 12, 3 et 69)</li>
      </ul>
    </h6>
    <h6>
      <span>Informations d'accès: </span>Cabinet situé au 1er étage avec
      ascenseur
    </h6>
    <a
      href="https://www.google.fr/maps/place/19+Rue+Madame+Dassy,+77100+Meaux/@48.9552123,2.8778515,17z/data=!3m1!4b1!4m5!3m4!1s0x47e8a104aa1c7251:0x7c587a186f9a2b9b!8m2!3d48.9552088!4d2.8800402"
      class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-logo-blue bg-white hover:bg-indigo-50"
    >
      Plannifiez votre itinéraire
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    // BUSINESS HOURS OF CABINET
    times: [
      {
        title: "Lundi: 8:00-20:00",
        businessHours: ["Lundi", 8.0, 20.0],
      },
      {
        title: "Mardi: 8:00-20:00",
        businessHours: ["Mardi", 8.0, 20.0],
      },
      {
        title: "Mercredi: 8:00-20:00",
        businessHours: ["Mercredi", 8.0, 20.0],
      },
      {
        title: "Jeudi: 8:00-20:00",
        businessHours: ["Jeudi", 8.0, 20.0],
      },
      {
        title: "Vendredi: 8:00-20:00",
        businessHours: ["Vendredi", 8.0, 20.0],
      },
      {
        title: "Samedi: 8:00-20:00",
        businessHours: ["Samedi", 8.0, 20.0],
      },
      {
        title: "Dimanche: 10:00-15:00",
        businessHours: ["Dimanche", 10.0, 15.0],
      },
    ],
    offset: true,
    isOpen: null,
    tomorrowDay: null,
    tomorrowHour: null,
  }),
  methods: {
    // FUNCTION rendering OPEN/CLOSED sign depending on time of day
    openCheck() {
      var d = new Date();
      var n = d.getDay();
      var now = d.getHours() + "." + d.getMinutes();
      var day = this.times[n - 1];
      var nextDay = this.times[n];
      if (now > day.businessHours[1] && now < day.businessHours[2]) {
        console.log("We're open right now!");
        this.isOpen = !this.isOpen;
        this.tomorrowDay = nextDay.businessHours[0];
        this.tomorrowHour = nextDay.businessHours[1];
        console.log(this.tomorrowDay);
      } else {
        console.log("Sorry, we're closed!");
        this.isOpen = !this.isOpen;
        this.tomorrowDay = nextDay.businessHours[0];
        this.tomorrowHour = nextDay.businessHours[1];
        console.log(this.tomorrowDay);
      }
    },
  },
  created() {
    // Performs openCheck on page render
    this.openCheck();
  },
};
</script>

<style scoped>
.contact-card * {
  margin-top: 15px;
}

.title-name {
  margin-bottom: 4%;
}

#timetable-open {
  color: white;
  margin-top: 0;
  background-color: rgb(25, 163, 25);
}

.icon-open,
.icon-closed {
  margin-top: 0;
  margin-left: 7px;
}

#timetable-closed {
  color: white;
  margin-top: 0;
  background-color: rgb(211, 58, 58);
}
#name {
  font-size: 2rem;
}

span {
  font-weight: bolder;
}

.business-hours-dropdown {
  margin: 0;
}
</style>