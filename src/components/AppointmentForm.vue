<template>
  <div class="form">
    <v-form @submit.prevent="modifyTimeSlot(timeslot._id, inputs)">
      <v-container>
        <v-col cols="12">
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

        <!-- <v-col cols="10">
          <v-text-field
            label="Jour"
            type="text"
            :placeholder="timeslot.day"
            v-model="inputs.day"
          ></v-text-field>
        </v-col> -->
        <div class="form-grid">
          <v-col cols="10">
            <v-text-field
              label="Début"
              type="text"
              :placeholder="getOnlyTime(timeslot.start)"
              v-model="inputs.start"
            ></v-text-field>
            <v-text-field
              label="Fin"
              type="text"
              :placeholder="getOnlyTime(timeslot.end)"
              v-model="inputs.end"
            ></v-text-field>
          </v-col>
          <div class="radio-group">
            <div v-for="(type, index) in types" :key="index">
              <input
                type="radio"
                :checked="inputs.appointmentType === type"
                :value="type"
                v-model="inputs.type"
              />&nbsp;
              <label :for="type">{{ type }}</label>
            </div>
          </div>
        </div>
        <v-btn type="submit" id="modify"> Modifier </v-btn>&nbsp;&nbsp;
        <v-btn @click="$emit('delete-timeslot')" type="button" id="delete">
          Supprimer
        </v-btn>
      </v-container></v-form
    >
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
  updated() {
    // this.name = this.timeslot.name;
    // this.day = this.timeslot.day;
    // this.inputs.start = this.getCorrectTimeInput(this.inputs.start);
    // this.end = this.getOnlyTime(this.timeslot.end);
    // this.appointmentType = this.timeslot.type;
  },
  watch: {},
  methods: {
    getOnlyTime(date) {
      console.log(date);
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
      if (!this.inputs.start.includes("-")) {
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
.form {
  border-radius: 0.5em;
  border: 3px solid gray;
  width: 400px;
}

.select-area {
  display: flex;
  justify-content: center;
}

.select {
  border: 1px solid black;
  border-radius: 0.5em;
  height: 2em;
  width: 8em;
}
.form-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

#modify {
  background-color: royalblue;
  color: white;
}
#delete {
  background-color: rgb(212, 6, 6);
  color: white;
}
</style>