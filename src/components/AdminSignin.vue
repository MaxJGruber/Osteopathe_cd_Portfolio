<template>
  <div>
    <v-form @submit.prevent="$emit('signin', logins)">
      <v-container class="form signin">
        <v-col cols="5" class="mx-0 px-0">
          <v-text-field
            label="identifiant"
            type="text"
            v-model="logins.username"
          ></v-text-field>
        </v-col>
        <div class="pin-grid">
          <button
            v-for="index in order"
            :key="index"
            type="button"
            @click="logins.pin += index"
          >
            {{ index }}
          </button>
          <button
            type="button"
            @click="logins.pin = logins.pin.slice(0, logins.pin.length - 1)"
          >
            &lt;
          </button>

          <button type="button" @click="logins.pin = ''">C</button>
        </div>
        <div class="button-group">
          <v-btn type="submit" id="confirm" class="mx-12"> Valider </v-btn>
        </div>
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
  justify-content: space-evenly;
}
.pin-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-auto-rows: auto;
  grid-gap: 10px;
  margin: auto 2em;
}

.pin-grid > div > * {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2em;
  height: 33%;
  width: 33%;
}
</style>