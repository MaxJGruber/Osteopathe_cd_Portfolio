<template>
  <div class="mt-5">
    <h1>ADMIN MODIFICATIONS PAGE</h1>
    <router-link to="/"
      ><strong>RETOURNER A LA PAGE D'ACCUEIL</strong></router-link
    >
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
    </div>
    <div class="grid-timeslots mx-5 mt-5">
      <div v-for="(timeslot, index) in timeslots" :key="index">
        <AppointmentForm
          :timeslot="timeslot"
          @delete-timeslot="deleteTimeSlot(timeslot._id, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentFormCreate from "../components/AppointmentFormCreate";
import MessageForm from "../components/MessageForm";

export default {
  components: {
    AppointmentForm,
    AppointmentFormCreate,
    MessageForm,
  },
  data() {
    return {
      timeslots: [],
      messages: [],
      order: [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
      ],
    };
  },
  methods: {
    deleteTimeSlot(id, key) {
      console.log(id);
      apiHandler
        .deleteTimeSlot(`/api/timetable/${id}/delete`)
        .then()
        .catch((error) => console.log(error));
      this.timeslots.splice(key, 1);
    },
  },
  created() {
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        this.timeslots = res;
      })
      .catch((error) => console.log(error));

    apiHandler
      .getMessages("/api/message/all")
      .then((res) => {
        this.messages = res;
      })
      .catch((error) => console.log(error));
  },
  updated() {
    if (this.timeslots.length !== this.timeslots.length) {
      apiHandler
        .getTimeTable("/api/timetable/all")
        .then((res) => {
          this.timeslots = res;
        })
        .catch((error) => console.log(error));
    }
  },
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
}

.form > .select-area {
  margin: 0 1em;
  display: flex;
}

.times {
  display: flex;
  justify-content: center;
}

.select {
  border: 1px solid black;
  border-radius: 0.5em;
  height: 2em;
  width: 8em;
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
</style>