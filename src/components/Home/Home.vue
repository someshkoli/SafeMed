<template>
  <v-container fluid fill-height>
    <v-layout column text-xs-center fill-height>
      <v-flex xs4></v-flex>
      <v-flex xs2>
        <v-layout column>
          <v-img aspect-ratio="5" :src="require('../../assets/logo.png')" class="display-2 mb-3"></v-img>
          <v-btn to="/new-patient" color="black" dark>New Patient</v-btn>
          <v-btn to="/new-doctor" color="blue" dark>New Doctor</v-btn>
          <v-btn @click="login" color="red" dark>Login</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import web3 from "../../util/getWeb3";
import factory from "../../util/factory.js";
export default {
  methods: {
    async login() {
      let accounts = await web3.eth.getAccounts();
      console.log(accounts);
      // if (factory.methods.login) {
      //   alert("user not present please register");
      // } else {
      //   this.$router.push("/patients");
      //   console.log("Some shit not working lmao f");
      // }
      try {
        var contractAddress = await factory.methods.login().call({
          from: accounts[0]
        });
        console.log("Succ")
      } catch (err) {
        console.log(err);
      }
      console.log(contractAddress);
    }
  },
  mounted() {
    async () => {
      try {
        // Get network provider and web3 instance.

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // For debugging purposes
        console.log(accounts);

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({ web3, account: accounts[0], contract: factory });
        this.runExample();
      } catch (error) {
        // Catch any errors for any of the above operations.
        console.log(
          "Failed to load web3, accounts, or contract. Check console for details."
        );
        console.error(error);
      }
    };
  }
};
</script>
