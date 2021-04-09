<template>
  <div>
    <v-form @submit.prevent="modifyTimeSlot(timeslot._id, inputs)">
      <v-container class="form my-5">
        <v-col cols="3">
          <v-text-field
            label="Nom de l'événement"
            type="text"
            :placeholder="timeslot.name"
            v-model="inputs.name"
          ></v-text-field>
        </v-col>
        <div class="select-area">
          <p>Jour:</p>
          &nbsp;&nbsp;
          <select v-model="inputs.day" class="select mx-5">
            <option v-for="(day, index) in days" :value="day" :key="index">
              {{ day }}
            </option>
          </select>
        </div>
        <div class="times">
          <v-col cols="5">
            <v-text-field
              label="Début"
              type="text"
              :placeholder="getOnlyTime(timeslot.start)"
              v-model="inputs.start"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="Fin"
              type="text"
              :placeholder="getOnlyTime(timeslot.end)"
              v-model="inputs.end"
            ></v-text-field>
          </v-col>
        </div>
        <div class="select-area">
          <p>Type:</p>
          &nbsp;&nbsp;
          <select v-model="inputs.type" class="select mx-5">
            <option v-for="(type, index) in types" :value="type" :key="index">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="button-group">
          <v-btn type="submit" id="modify">
            <font-awesome-icon icon="edit" /> </v-btn
          >&nbsp;&nbsp;
          <v-btn @click="$emit('delete-timeslot')" type="button" id="delete">
            <font-awesome-icon icon="trash-alt" />
          </v-btn></div></v-container
    ></v-form>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";
export default {
  name: "AppointmentForm",
  data() {
    return {
      types: ["Cabinet", "Domicile", "Secretariat", "Autre"],
      days: [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
      ],
      inputs: {
        name: "",
        day: "",
        start: "",
        end: "",
        type: "",
      },
    };
  },
  props: {
    timeslot: Object,
  },
  created() {
    this.inputs.name = this.timeslot.name;
    this.inputs.day = this.timeslot.day;
    this.inputs.start = this.getOnlyTime(this.timeslot.start);
    this.inputs.end = this.getOnlyTime(this.timeslot.end);
    this.inputs.type = this.timeslot.type;
  },
  methods: {
    getOnlyTime(date) {
      if (date === undefined) {
        return;
      } else if (!date.includes(" ")) {
        return this.timeslot.day;
      }
      if (date.includes(" ")) {
        const dateAndTime = date.split(" ");
        return dateAndTime[1];
      } else {
        return date;
      }
    },
    getCorrectTimeInput(input) {
      switch (this.timeslot.day) {
        case "lundi":
          return "2021-04-05 " + input;
        case "mardi":
          return "2021-04-06 " + input;
        case "mercredi":
          return "2021-04-07 " + input;
        case "jeudi":
          return "2021-04-08 " + input;
        case "vendredi":
          return "2021-04-09 " + input;
        case "samedi":
          return "2021-04-10 " + input;
        case "dimanche":
          return "2021-04-11 " + input;
      }
    },
    modifyTimeSlot() {
      if (!this.inputs.start.includes("-")) {
        const formattedStart = this.getCorrectTimeInput(this.inputs.start);
        this.inputs.start = formattedStart;
      }
      if (!this.inputs.end.includes("-")) {
        const formattedEnd = this.getCorrectTimeInput(this.inputs.end);
        this.inputs.end = formattedEnd;
      }
      apiHandler
        .editTimeSlot(`/api/timetable/${this.timeslot._id}/edit`, this.inputs)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>