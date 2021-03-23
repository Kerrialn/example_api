<template>
  <div>
    <h1>{{ user.name }}</h1>
  </div>
</template>

<style scoped></style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters({
      user: "auth/getUser",
    }),
  },
};
</script>
