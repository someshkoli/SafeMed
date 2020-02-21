<template>
  <v-container>
    <v-timeline dense class="pb-4">
      <v-timeline-item
        v-for="(y, index2) in records"
        :key="index2"
        color="teal lighten--1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="teal lighten--1">
            <v-layout column>
              <v-flex xs6 justify-end align-end>
                <h2 class="display-1 white--text">{{ y[0] }}</h2>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-container>
            <v-layout column>
              <v-flex v-for="(n, index) in y[index2]" :key="index" xs4>
                <div v-if="index == 3">{{ Date(y[index]) }}</div>
                <div v-else>{{ y[index] }}</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import patient from "../../../util/patient";
import web3 from "../../../util/getWeb3";
export default {
  async mounted() {
    console.log(this.contractAddress);
    let patientIn = patient(this.contractAddress);
    let accounts = await web3.eth.getAccounts();
    let numberofRec = await patientIn.methods._totalRecords().call();
    let returned;
    for (let i = numberofRec - 1; i >= 0; i--) {
      returned = await patientIn.methods.get_record(i).call({
        from: accounts[0]
      });
      this.records.push(returned);
    }
    console.log("sadasdasdsaad");
    console.log(this.records);

    // doctorsName: "",
    // hospital: "",
    // diagnose: "",
    // time: "",
    // dateIn: "",
    // dateOut: ""
  },
  data() {
    return {
      records: []
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
