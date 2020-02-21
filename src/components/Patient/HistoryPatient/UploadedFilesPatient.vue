<template>
  <v-container>
    <v-timeline dense class="pb-4">
      <v-timeline-item
        v-for="(y, index2) in images"
        :key="index2"
        color="teal lighten--1"
        fill-dot
        right
      >
        <v-card>
          <v-card-title class="teal lighten--1">
            <v-layout column>
              <v-flex xs6 justify-end align-end>
                <h2 class="display-1 white--text">{{ y[1] }}</h2>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-container>
            <v-layout column>
              <v-img :src="fetchData(y[1])" aspect-ratio="1.7"></v-img>
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
    console.log("232332434");
    console.log(this.contractAddress);
    let patientIn = patient(this.contractAddress);
    let accounts = await web3.eth.getAccounts();
    let _totalhashes = await patientIn.methods._totalHashes().call({});
    console.log(_totalhashes)
    let returned;
    for (let i = _totalhashes - 1; i >= 0; i--) {
      console.log("someshloli");
      returned = await patientIn.methods.getHash(i).call({
        from: accounts[0]
      });

      this.images.push(returned);
    }
    console.log(this.images);

    // doctorsName: "",
    // hospital: "",
    // diagnose: "",
    // time: "",
    // dateIn: "",
    // dateOut: ""
    this.fetchData();
  },
  data() {
    return {
      images: [],
      buffermera: null
    };
  },
  computed: {
    contractAddress: {
      get() {
        return this.$store.getters.contractAddressState;
      },

      set() {}
    }
  },
  methods: {
    fetchData(data) {
      fetch(`https://ipfs.io/ipfs/${data}`).then(res => {
        res.arrayBuffer().then(buffer => {
          buffer = new Uint8Array(buffer);
          this.buffermera =
            "data:image/jpeg;base64," + buffer.toString("base64");
          console.log("sp,esjlp;o");
          return this.buffermera;
        });
      });
    }
  }
};
</script>

<style>
</style>
