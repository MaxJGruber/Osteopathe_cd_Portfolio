<template>
  <div class="mt-5">
    <h1>ADMIN MODIFICATIONS PAGE</h1>
    <router-link to="/"
      ><strong>RETOURNER A LA PAGE D'ACCEUIL</strong></router-link
    >
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

export default {
  components: {
    AppointmentForm,
  },
  data() {
    return {
      timeslots: [],
      sortedTimeSlots: [],
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
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      this.timeslots.splice(key, 1);
    },
  },
  created() {
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        console.log(">>>>>", res);
        this.timeslots = res;
      })
      .catch((error) => console.log(error));
  },
  updated() {
    if (this.timeslots.length !== this.timeslots.length) {
      apiHandler
        .getTimeTable("/api/timetable/all")
        .then((res) => {
          console.log(">>>>>", res);
          this.timeslots = res;
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>

<style>
.grid-timeslots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
}
</style>