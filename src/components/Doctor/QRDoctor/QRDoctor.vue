<template>
  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">
      Last result:
      <b>{{ result }}</b>
    </p>

    <qrcode-stream @decode="onDecode" @init="onInit"/>

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
import web3 from "../../../util/getWeb3";
import patient from "../../../util/patient";
import factory from "../../../util/factory";
export default {
  methods: {
    homeClicked() {
      this.$store.commit("changeBottomNavState", "home");
      this.$router.push("/doctor");
    },
    qrClicked() {
      this.$store.commit("changeBottomNavState", "QR");
      this.$router.push("/doctor/qr");
    },
    historyClicked() {
      this.$store.commit("changeBottomNavState", "history");
      this.$router.push("/doctor/history");
    },
    accountClicked() {
      this.$store.commit("changeBottomNavState", "account");
      this.$router.push("/doctor/account");
    },
    onDecode(result) {
      this.result = result;
      console.log(this.result);
      this.addInContract();
    },

    async addInContract() {
      if (this.result != "0x0000000000000000000000000000000000000000") {
        let result_contract = await factory.methods
          ._patientsMapping(this.result)
          .call();
        // let patientInst = patient(result_contract);
        this.login(result_contract);
        this.result = "0x0000000000000000000000000000000000000000";
      }
    },

    async login(add) {
        this.contractAddress=add;
        this.$store.commit("changeContractAddressState",this.contractAddress);
        this.$router.push("/patient");
        return;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
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
    },
  },
  data() {
    return {
      result: "",
      error: ""
    };
  }
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
