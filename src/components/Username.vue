<template>
  <div>
    <input type="input" @input="setFirstName" />
    <input type="input" @input="setLastName" />
    <div>{{ firstName }}</div>
    <div>{{ lastName }}</div>
    <div>{{ fullName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["firstName", "lastName"]),
    ...mapGetters(["fullName"])
  },
  methods: {
    ...mapMutations(["setFirstName", "setLastName"])
  }
};
</script>
