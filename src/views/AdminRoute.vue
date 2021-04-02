<template>
  <div class="mt-5">
    <h1>ADMIN MODIFICATIONS PAGE</h1>
    <v-form>
      <v-container>
        <h1><strong>HORAIRES</strong></h1>
        <tbody>
          <tr v-for="(day, index) in days" :key="index">
            <td class="day">{{ day.day }}:</td>
            <td>
              <v-col>
                <v-text-field
                  label="Ouverture"
                  type="text"
                  :placeholder="day.openingTime"
              
                ></v-text-field>
              </v-col>
            </td>
            <td>
              <v-col>
                <v-text-field
                  label="Fermeture"
                  type="text"
                  :placeholder="day.closingTime"
                 
                ></v-text-field>
              </v-col>
            </td>
            <td>
              <button
                @submit.prevent="validateTimeTable(timesToChange)"
                class="bg-logo-blue px-5 py-2 confirm-button"
              >
                Valider
              </button>
            </td>
          </tr>
        </tbody>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";
export default {
  data() {
    return {
      days: [],
      timetableId: "",
      timesToChange: {
        monday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        tuesday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        wednesday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        thursday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        friday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        saturday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
        sunday: {
          day: "",
          openTime: "",
          closingTime: "",
        },
      },
    };
  },
  methods: {
    validateTimeTable(body) {
      console.log(">>>>>", body);
      apiHandler
        .editTimeTable(`/api/timetable/${this.timetableId}/edit`, body)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
  created() {
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        Object.values(res[0]).map((elem) =>
          res[0]._id === elem || res[0].__v === elem
            ? (this.timetableId = res[0]._id)
            : this.days.push(elem)
        );
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
td {
  border: 1px solid black;
}
tbody {
  background-color: whitesmoke;
}
tbody tr {
  width: 100%;
}

tbody td {
  width: 500px;
}

.day {
  font-size: 3em;
}

.confirm-button {
  border-radius: 3em;
  color: white;
}
</style>