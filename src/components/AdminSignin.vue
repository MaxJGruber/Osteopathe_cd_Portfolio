<template>
  <div>
    <v-form @submit.prevent="$emit('signin', logins)">
      <v-container class="form signin">
        <v-col cols="3" class="mx-5">
          <v-text-field
            label="identifiant"
            type="text"
            v-model="logins.username"
          ></v-text-field>
        </v-col>
        <div>{{ logins.pin }}</div>
        <div class="pin-grid">
          <button
            v-for="index in order"
            :key="index"
            type="button"
            @click="logins.pin += index"
          >
            {{ index }}
          </button>
          <!-- <div>
            <button type="button" @click="logins.pin += '1'">1</button>
            <button type="button" @click="logins.pin += '2'">2</button>
            <button type="button" @click="logins.pin += '3'">3</button>
          </div>
          <div>
            <button type="button" @click="logins.pin += '4'">4</button>
            <button type="button" @click="logins.pin += '5'">5</button>
            <button type="button" @click="logins.pin += '6'">6</button>
          </div>
          <div>
            <button type="button" @click="logins.pin += '7'">7</button>
            <button type="button" @click="logins.pin += '8'">8</button>
            <button type="button" @click="logins.pin += '9'">9</button>
          </div>
          <div> -->
          <!-- </div> -->
          <button
            type="button"
            @click="logins.pin = logins.pin.slice(0, logins.pin.length - 1)"
          >
            &lt;
          </button>

          <button type="button" @click="logins.pin = ''">C</button>
        </div>

        <v-btn type="submit" id="confirm" class="mx-12"> Valider </v-btn>
      </v-container></v-form
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      logins: {
        pin: "",
        username: "",
      },
    };
  },
  props: {
    order: Array,
  },
};
</script>

<style>
.signin {
  justify-content: center;
}
.pin-grid {
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-auto-rows: auto;
  grid-gap: 10px;
  margin: 2em;
}

.pin-grid > div > * {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2em;
  height: 40px;
  width: 40px;
}
</style>