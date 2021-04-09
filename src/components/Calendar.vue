<template>
  <div class="calendar-frame">
    <div id="legend">
      <p>RDV au cabinet:</p>
      <div id="cabinet" class="color"></div>
      <p>RDV à domicile:</p>
      <div id="domicile" class="color"></div>
      <p>Secrétariat:</p>
      <div id="secretariat" class="color"></div>
      <p>Autre:</p>
      <div id="autre" class="color"></div>
    </div>
    <div id="calendar">
      <v-row id="calendar">
        <v-col>
          <v-sheet height="750">
            <v-calendar
              ref="calendar"
              v-model="value"
              type="week"
              :events="events"
              :event-color="getEventColor"
              :event-text-color="getEventTextColor"
              locale="fr"
              start="2021-04-05"
              :weekdays="[1, 2, 3, 4, 5, 6, 0]"
              :first-interval="7"
              :interval-count="14"
            >
              <template v-slot:day-label-header="{}">{{ "" }}</template>
              <template v-slot:day-body="{ date, week }">
                <div
                  class="v-current-time"
                  :class="{ first: date === week[0].date }"
                  :style="{ top: nowY }"
                ></div>
              </template>
            </v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import apiHandler from "../apiHandler";

export default {
  data: () => ({
    value: "",
    events: [],
    ready: false,
  }),
  computed: {
    cal() {
      return this.ready ? this.$refs.calendar : null;
    },
    nowY() {
      return this.cal ? this.cal.timeToY(this.cal.times.now) + "px" : "-10px";
    },
  },
  mounted() {
    this.ready = true;
    this.scrollToTime();
    this.updateTime();
  },
  created() {
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        this.events = res;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    getCurrentTime() {
      return this.cal
        ? this.cal.times.now.hour * 60 + this.cal.times.now.minute
        : 0;
    },
    scrollToTime() {
      const time = this.getCurrentTime();
      const first = Math.max(0, time - (time % 30) - 30);

      this.cal.scrollToTime(first);
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000);
    },
    getEventColor(event) {
      switch (event.type) {
        case "Cabinet":
          return "#3abfd6";
        case "Domicile":
          return "#21556d";
        case "Secretariat":
          return "#FFD700";
        case "Autre":
          return "rgb(150, 41, 150)";
      }
    },
    getEventTextColor(event) {
      if (event.type === "Secretariat") {
        return "black";
      } else {
        return "#FFFFFF";
      }
    },
  },
};
</script>
<style scoped>
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;
}
#legend {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

#legend > * {
  margin: auto 5px;
}

#legend .color {
  height: 1rem;
  width: 1rem;
  border: 1px solid black;
}

#secretariat {
  background-color: #ffd700;
}
#domicile {
  background-color: #21556d;
}
#cabinet {
  background-color: #3abfd6;
}
#autre {
  background-color: rgb(150, 41, 150);
}
.calendar-frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#calendar {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 450px) {
  #calendar {
    width: 80%;
  }
}
@media screen and (max-width: 430px) {
  #calendar {
    width: 100%;
  }
  #legend > p {
    font-size: 0.7em;
  }

  #legend {
    margin-top: 2%;
  }
}
</style>