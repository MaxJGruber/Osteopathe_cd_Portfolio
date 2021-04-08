<template>
  <div>
    <v-form @submit.prevent="validateMessage">
      <v-container class="form my-5">
        <div class="">
          <h1>{{ message.location }}</h1>
        </div>
        <div class="form">
          <v-col cols="10" class="mx-10">
            <v-text-field
              label="Contenu (Message normal)"
              type="text"
              :placeholder="input.content"
              v-model="input.content"
            ></v-text-field>
            <v-text-field
              label="Contenu (Message court)"
              type="text"
              :placeholder="input.contentShort"
              v-model="input.contentShort"
            ></v-text-field>
          </v-col>
          <v-btn type="submit" id="modify">
            <font-awesome-icon icon="edit" />
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import apiHandler from "../apiHandler";

export default {
  data() {
    return {
      input: { content: "", contentShort: "" },
    };
  },
  props: {
    message: Object,
  },
  created() {
    this.input.content = this.message.content;
    this.input.contentShort = this.message.contentShort;
  },
  methods: {
    validateMessage() {
      apiHandler
        .editMessage(`/api/message/${this.message._id}/edit`, this.input)
        .then()
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>