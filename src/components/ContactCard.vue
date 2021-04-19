<template>
  <div class="contact-card sm:mb-5 mobile-margin">
    <h4
      class="mb-3 text-3xl leading-6 font-extrabold tracking-tight text-gray-900 sm:text-3xl title-name"
    >
      Charles Dumeige
    </h4>
    <div class="mt-5 business-hours-dropdown text-center" data-app>
      <v-menu>
        <template v-slot:activator="{ on, attrs }"
          ><span>Actuellement: </span>
          <v-btn
            v-bind="attrs"
            v-on:click="gotToSection('.calendar-frame')"
            id="timetable-open"
            v-show="isOpen === true"
            >OUVERT <font-awesome-icon icon="door-open" class="icon-open"
          /></v-btn>
          <v-btn
            v-bind="attrs"
            v-on="on"
            id="timetable-closed"
            v-show="isOpen === false"
            >FERME<font-awesome-icon icon="door-closed" class="icon-closed"
          /></v-btn>
        </template>
      </v-menu>
    </div>
    <h4
      v-show="isOpen === false"
      class="text-md leading-6 font-medium text-gray-900"
    >
      Le cabinet reouvre <strong>{{ tomorrowDay }}</strong> à
      <strong>{{ tomorrowHour }}</strong
      >.
    </h4>
    <h6 class="text-md text-base text-gray-500">
      <span class="text-gray-900">Adresse: </span>19 Rue Madame Dassy, 77100
      Meaux
    </h6>
    <h6 class="text-md text-base text-gray-500">
      <span class="text-gray-900">Moyens de Transports:</span>
      <ul>
        <li>Transilien - Gare de Meaux (ligne P)</li>
        <li>Bus - Marché (lignes 4, 69, 3, 19, 64 et 18)</li>
        <li>Bus - Médiathèque (lignes 12, 3 et 69)</li>
      </ul>
    </h6>
    <h6 class="text-md text-base text-gray-500">
      <span class="text-gray-900">Informations d'accès: </span>Cabinet situé au
      1er étage avec ascenseur
    </h6>
    <a
      href="https://www.google.fr/maps/place/19+Rue+Madame+Dassy,+77100+Meaux/@48.9552123,2.8778515,17z/data=!3m1!4b1!4m5!3m4!1s0x47e8a104aa1c7251:0x7c587a186f9a2b9b!8m2!3d48.9552088!4d2.8800402"
      target="_blank"
      class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-logo-blue md:py-4 md:text-lg md:px-10 itinerary-button"
    >
      Plannifiez votre itinéraire
    </a>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";

export default {
  data: () => ({
    // BUSINESS HOURS OF CABINET
    times: [],
    offset: true,
    isOpen: null,
    tomorrowDay: null,
    tomorrowHour: null,
  }),
  methods: {
    // FUNCTION formatting a date string into a number to use in OPEN/CLOSED logic
    formatTime(targetDay) {
      var hoursFromString = targetDay.name.split(" ");
      var workingHours = hoursFromString[1].split("-");
      var formattedWorkingHours = workingHours.map((elem) =>
        elem.replace(":", ".")
      );
      return formattedWorkingHours;
    },
    // FUNCTION rendering OPEN/CLOSED sign depending on time of day
    openCheck() {
      var d = new Date();
      var n = d.getDay();
      n === 0 ? (n = 7) : n;
      var now = d.getHours() + "." + d.getMinutes();
      var day = this.times[n - 1];
      n === 7 ? (n = 0) : n;
      var nextDay = this.times[n];

      if (
        Number(now) > Number(this.formatTime(day)[0]) &&
        Number(now) < Number(this.formatTime(day)[1])
      ) {
        console.log("We're open right now!");
        this.isOpen = true;
      } else {
        console.log("Sorry, we're closed!");
        this.isOpen = false;
        this.tomorrowDay = nextDay.day;

        this.tomorrowHour = this.formatTime(nextDay)[0].replace(".", ":");
      }
    },
    gotToSection(element) {
      document.querySelector(element).scrollIntoView({ behavior: "smooth" });
    },
  },
  created() {
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].type === "Secretariat") {
            this.times.push(res[i]);
          }
        }
        // Performs openCheck on page render
        this.openCheck();
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>

.contact-card{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.itinerary-button{
  width: 65%;
  margin: 0;
  padding: 5px;
}
.contact-card > *,
.contact-card li {
  margin-top: 15px;
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

.grid-timetable {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.day-times:hover {
  background-color: #3abfd6;
}

.day-times:hover > * {
  color: white;
}


</style>
