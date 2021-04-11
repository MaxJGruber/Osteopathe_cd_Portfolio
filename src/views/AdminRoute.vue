<template>
  <div class="mt-5">
    <div class="mobile-margin">
      <h1>ADMIN MODIFICATIONS PAGE</h1>
      <router-link to="/"
        ><strong>RETOURNER A LA PAGE D'ACCUEIL</strong></router-link
      >
      <div v-show="isLoggedIn === true" class="my-5">
        <h1><strong>Sign In:</strong></h1>
        <AdminSignin @signin="signin" :order="order" />
      </div>
      <div v-show="isLoggedIn === false">
        <div class="my-5">
          <h1><strong>Modifier un message:</strong></h1>
          <div v-for="(message, index) in messages" :key="index">
            <MessageForm :message="message" />
          </div>
        </div>
        <div class="mt-5 flex items-center justify-center post">
          <h1><strong>Créer un nouvel interval:</strong></h1>
          <AppointmentFormCreate :timeslots="timeslots" />
        </div>
        <div class="mt-5">
          <h1><strong>Modifier un interval:</strong></h1>
          <div class="date-links mt-5">
            <a href="#mon"><strong>Lundi</strong></a
            ><a href="#tue"><strong>Mardi</strong></a
            ><a href="#wed"><strong>Mercredi</strong></a
            ><a href="#thu"><strong>Jeudi</strong></a>
            <a href="#fri"><strong>Vendredi</strong></a>
            <a href="#sat"><strong>Samedi</strong></a>
            <a href="#sun"><strong>Dimanche</strong></a>
          </div>
        </div>
        <div id="mon">Lundi</div>
        <div v-for="(timeslot, index) in timeslotsMon" :key="index" id="mon">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="tue">Mardi</div>
        <div v-for="(timeslot, index) in timeslotsTue" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="wed">Mercredi</div>
        <div v-for="(timeslot, index) in timeslotsWed" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="thu">Jeudi</div>
        <div v-for="(timeslot, index) in timeslotsThu" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="fri">Vendredi</div>
        <div v-for="(timeslot, index) in timeslotsFri" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="sat">Samedi</div>
        <div v-for="(timeslot, index) in timeslotsSat" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
        <div id="sun">Dimanche</div>
        <div v-for="(timeslot, index) in timeslotsSun" :key="index">
          <AppointmentForm
            :timeslot="timeslot"
            @delete-timeslot="deleteTimeSlot(timeslot, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentFormCreate from "../components/AppointmentFormCreate";
import MessageForm from "../components/MessageForm";
import AdminSignin from "../components/AdminSignin";

export default {
  components: {
    AppointmentForm,
    AppointmentFormCreate,
    MessageForm,
    AdminSignin,
  },
  data() {
    return {
      timeslots: [],
      messages: [],
      isLoggedIn: false,
      order: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      timeslotsMon: [],
      timeslotsTue: [],
      timeslotsWed: [],
      timeslotsThu: [],
      timeslotsFri: [],
      timeslotsSat: [],
      timeslotsSun: [],
    };
  },
  methods: {
    deleteTimeSlot(timeslot, key) {
      apiHandler
        .deleteTimeSlot(`/api/timetable/${timeslot._id}/delete`)
        .then(() => {
          switch (timeslot.day) {
            case "lundi":
              this.timeslotsMon.splice(key, 1);
              break;
            case "mardi":
              this.timeslotsTue.splice(key, 1);
              break;
            case "mercredi":
              this.timeslotsWed.splice(key, 1);
              break;
            case "jeudi":
              this.timeslotsThu.splice(key, 1);
              break;
            case "vendredi":
              this.timeslotsFri.splice(key, 1);
              break;
            case "samedi":
              this.timeslotsSat.splice(key, 1);
              break;
            case "dimanche":
              this.timeslotsSun.splice(key, 1);
              break;
          }
        })
        .catch((error) => console.log(error));
    },
    signin(data) {
      apiHandler
        .adminSignin("/api/admin/signin", data)
        .then((res) => {
          this.isLoggedIn = true;
          console.log(res);
        })
        .catch((error) => console.log(error));
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
  },
  created() {
    this.order = this.shuffle(this.order);
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        res.map((elem) => {
          switch (elem.day) {
            case "lundi":
              this.timeslotsMon.push(elem);
              break;
            case "mardi":
              this.timeslotsTue.push(elem);
              break;
            case "mercredi":
              this.timeslotsWed.push(elem);
              break;
            case "jeudi":
              this.timeslotsThu.push(elem);
              break;
            case "vendredi":
              this.timeslotsFri.push(elem);
              break;
            case "samedi":
              this.timeslotsSat.push(elem);
              break;
            case "dimanche":
              this.timeslotsSun.push(elem);
              break;
          }
        });
      })
      .catch((error) => console.log(error));

    apiHandler
      .getMessages("/api/message/all")
      .then((res) => {
        this.messages = res;
      })
      .catch((error) => console.log(error));
  },
  // updated() {
  //   if (this.timeslots.length !== this.timeslots.length) {
  //     apiHandler
  //       .getTimeTable("/api/timetable/all")
  //       .then((res) => {
  //         this.timeslots = res;
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // },
};
</script>

<style>
.form {
  border-radius: 0.5em;
  border: 3px solid gray;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.date-links > * {
  margin: auto 10px;
}

.form > .select-area {
  display: flex;
}

.times {
  display: flex;
  justify-content: center;
}

.select {
  border: 1px solid black;
  border-radius: 0.5em;
}
.button-group {
  display: flex;
}
.button-group > * {
  margin: 0 10px;
}

#modify {
  background-color: royalblue;
  color: white;
}
#delete {
  background-color: rgb(212, 6, 6);
  color: white;
}
#confirm {
  background-color: green;
  color: white;
}
.post {
  flex-direction: column;
}

@media screen and (max-device-width: 430px) {
  .button-group #confirm {
    font-size: 0.5em;
    height: 25px;
    widows: auto;
  }

  .form {
    border-radius: 0.5em;
    border: 3px solid gray;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 450px) {
  .form {
    border-radius: 0.5em;
    border: 3px solid gray;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>