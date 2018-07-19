<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <div>
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button v-on:click="submitName">Add</button>
    </div>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import namesRef from '../main'
  export default {
    name: 'hello',
    data () {
      return {
        name: 'Paul'
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      submitName: function () {
        namesRef.push({name: this.name, edit: false})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  button{
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
  }
</style>
