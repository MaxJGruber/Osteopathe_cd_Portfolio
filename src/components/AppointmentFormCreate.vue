<template>
  <div>
    <v-form @submit="confirmCreation">
      <v-container class="form">
        <v-col cols="3" >
          <v-text-field
            label="Nom de l'événement"
            type="text"
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
              v-model="inputs.start"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="Fin"
              type="text"
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
        <!-- <div class="radio-group">
          <div v-for="(type, index) in types" :key="index">
            <input
              type="radio"
              :checked="inputs.appointmentType === type"
              :value="type"
              v-model="inputs.type"
            />&nbsp;
            <label :for="type">{{ type }}</label>
          </div>
        </div> -->

        <v-btn type="submit" id="confirm"> Valider </v-btn>
      </v-container></v-form
    >
  </div>
</template>
<script>
import apiHandler from "../apiHandler";
export default {
  name: "AppointmentFormCreate",
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
    timeslots: Array,
  },
  methods: {
    getCorrectTimeInput(input) {
      switch (this.inputs.day) {
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
    confirmCreation() {
      if (!this.inputs.start.includes("-")) {
        const formattedStart = this.getCorrectTimeInput(this.inputs.start);
        this.inputs.start = formattedStart;
      }
      if (!this.inputs.end.includes("-")) {
        const formattedEnd = this.getCorrectTimeInput(this.inputs.end);
        this.inputs.end = formattedEnd;
      }
      apiHandler
        .createTimeSlot("/api/timetable/create", this.inputs)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      this.timeslots.push(this.inputs);
    },
  },
};
</script>
<style scoped>
</style>

