<template>
  <div>
    <b-overlay :show="isLoading">
      <navbar />
      <b-container>
        <router-view />
      </b-container>
    </b-overlay>
  </div>
</template>

<style scoped></style>

<script>
import Navbar from "./Navbar";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      isLoading: "getLoading",
    }),
  },
};
</script>
