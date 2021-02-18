<template>
  <sui-form>
    <sui-header dividing>Information</sui-header>
    <sui-form-field>
      <label>Name</label>
      <sui-form-fields fields="two">
        <sui-form-field>
          <input
            type="text"
            name="shipping[first-name]"
            placeholder="First Name"
          />
        </sui-form-field>
        <sui-form-field>
          <input
            type="text"
            name="shipping[last-name]"
            placeholder="Last Name"
          />
        </sui-form-field>
      </sui-form-fields>
    </sui-form-field>
    <sui-form-fields fields="two">
      <sui-form-field>
        <label>Gender</label>
        <sui-dropdown
          placeholder="Gender"
          selection
          :options="options"
          v-model="current"
        />
      </sui-form-field>
      <sui-form-field>
        <label>Type of Profession</label>
        <sui-dropdown
          placeholder="Profession"
          selection
          :options="professions"
          v-model="currentProf"
        />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-field>
      <label>Text</label>
      <textarea></textarea>
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  data() {
    return {
      current: null,
      options: [
        {
          text: "Male",
          value: 1,
        },
        {
          text: "Female",
          value: 2,
        },
        {
          text: "Prefer not to say",
          value: 3,
        },
      ],
      currentProf: null,
      professions: [
        {
          text: "Sitting (Desk, Couch, etc)",
          value: 1,
        },
        {
          text: "Standing (Security, etc)",
          value: 2,
        },
        {
          text: "Constant Movement (F&B)",
          value: 3,
        },
        {
          text: "Sports",
          value: 4,
        },
      ],
    };
  },
};
</script>

<style>
</style>