<template>
  <v-container>
    <v-timeline dense class="pb-4">
      <v-timeline-item v-for="y in 4" :key="y" color="teal lighten--1" fill-dot right>
        <v-card>
          <v-card-title class="teal lighten--1">
            <v-layout row>
              <v-flex xs6 justify-end align-end>
                <h2 class="display-1 white--text">B. R. Batra</h2>
              </v-flex>
              <v-flex xs6>
                <h2 class="display-0.5 white--text font-weight-light">B. R. Batra</h2>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex
                v-for="n in 3"
                :key="n"
                xs4
              >Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.</v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import web3 from "/home/regalstreak/development/web/safemed/safemed/src/util/getWeb3.js";
import factory from "/home/regalstreak/development/web/safemed/safemed/src/util/factory.js";
export default {
  async mounted() {
    let accounts = await web3.eth.getAccounts();
    let patientAddress = await factory.methods._patientMapping(accounts[0]);
    console.log(patientAddress);
  },
  data() {
    return {
      records: {
        doctorsName: "",
        hospital: "",
        diagnose: "",
        time: "",
        dateIn: "",
        dateOut: ""
      }
    };
  },
  computed: {
    contractAddress: {
      get() {
        return this.$store.getters.contractAddressState;
      },

      set() {}
    }
  }
};
</script>

<style>
</style>
