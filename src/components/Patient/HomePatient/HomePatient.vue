<template>
  <div>
    <v-btn block color="secondary" dark @click="onPickFile">Upload Record</v-btn>
    <input type="file" style="display: none" ref="fileInput" @change="onFilePicked">

    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed>
      <v-btn color="teal" @click="homeClicked" flat value="home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="teal" @click="qrClicked" flat value="QR">
        <span>QR</span>
        <v-icon>texture</v-icon>
      </v-btn>

      <v-btn color="teal" @click="historyClicked" flat value="history">
        <span>History</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" @click="accountClicked" flat value="account">
        <span>Account</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import store from "../../../store.js";
import web3 from "/home/regalstreak/development/web/safemed/safemed/src/util/getWeb3";
import patient from "/home/regalstreak/development/web/safemed/safemed/src/util/patient.js";

import ipfs from "./ipfs";
export default {
  data() {
    return {
      ourBuffer: null,
      encryptedArr: null
    };
  },
  methods: {
    homeClicked() {
      this.$store.commit("changeBottomNavState", "home");
      this.$router.push("/patient");
    },
    qrClicked() {
      this.$store.commit("changeBottomNavState", "QR");
      this.$router.push("/patient/qr");
    },
    historyClicked() {
      this.$store.commit("changeBottomNavState", "history");
      this.$router.push("/patient/history");
    },
    accountClicked() {
      this.$store.commit("changeBottomNavState", "account");
      this.$router.push("/patient/account");
    },

    onPickFile() {
      this.$refs.fileInput.click();
    },

    async onFilePicked(event) {
      let accounts = await web3.eth.getAccounts();
      let patientContract = patient(accounts[0]);
      let ourBuffer;
      const file = event.target.files[0]
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => {
        ourBuffer =reader.result
        console.log(ourBuffer);
      }
      setTimeout(() => {
        try{
          ipfs.add(ourBuffer, async (error, result) => { console.log("2")
        if(error) {
          console.error("1")
          return;
        }
        console.log(result[0].hash);
      await patientContract.upload_doc(result[0].hash).send({
        from: accounts[0]
      });
    })
        } catch{ err  => console.log(err)}
        
      }, 2000)
    }
  },
  computed: {
    bottomNav: {
      get() {
        return store.getters.bottomNavState;
      },
      set() {}
    },
    contractAddress: {
      get() {
        return store.getters.contractAddressState;
      },
      set() {}
    }
  }
};
</script>

<style>
</style>
