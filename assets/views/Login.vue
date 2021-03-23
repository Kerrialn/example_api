<template>
  <div>
    <b-row class="h90" align-v="center" align-h="center">
      <b-col sm="10" md="5" lg="6">
        <b-card title="Login" style="width:100%" class="shadow">
          <b-form @submit.prevent="submit">
            <b-form-group id="email-input-group" label-for="email-input">
              <b-form-input
                id="email-input"
                v-model="form.email"
                type="email"
                placeholder="E-mail address"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="password-input-groupd" label-for="password-input">
              <b-form-input
                id="password-input"
                v-model="form.password"
                type="password"
                placeholder="Password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="password-input-groupd" label-for="password-input">
              <b-button block type="submit" variant="outline-primary"
                >contiune</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped></style>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submit() {
      await this.login(this.form).finally(() => {
        this.$router.replace({
          name: "dashboard",
        });
      });
    },
  },
};
</script>
