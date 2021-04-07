<template>
  <v-row>
    <v-col>
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="value"
          type="week"
          color="#3abfd6"
          :events="events"
          :event-color="getEventColor"
          :event-text-color="getEventTextColor"
          locale="fr"
          start="2021-04-05"
          :weekdays="[1, 2, 3, 4, 5, 6, 0]"
          :first-interval="6"
          :interval-count="16"
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
    // Performs openCheck on page render
    apiHandler
      .getTimeTable("/api/timetable/all")
      .then((res) => {
        // console.log(res);
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
          return "red";
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
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>