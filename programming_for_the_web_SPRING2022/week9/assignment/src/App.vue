<script setup>

import { reactive } from 'vue';
import ItemRow from './components/ItemRow.vue'

const dogs = [
  {
                photo: "bichon.jpeg",
                name: "Bichon Frise",
                weight: "12-18 lbs",
                lifespan: "14-15 years",
                personality: "happy-go-lucky",
                 quote: "They are lovers, not fighters, and operate under the assumption that there are no strangers, just friends they haven't met yet."
                },
                {
                photo: "brussels.jpeg",
                name: "Brussels Griffon",
                weight: "8-10 lbs",
                lifespan: "12-15 years",
                personality: "comically self-important, yet sensitive",
                quote: "This humanlike toy of complex character has enough personality for 10 ordinary dogs."
                },
                {
                photo: "coton2.jpeg",
                name: "Coton de Tulear",
                weight: "8-15 lbs",
                lifespan: "15-19 years",
                personality: "naturally clownish and lighthearted",
                quote: "The Coton de Tulear, 'Royal Dog of Madagascar', is a bright, happy-go-lucky companion dog whose favorite activities include clowning, cavorting, and following their special human around the house."
                },
                {
                photo: "havanese.jpeg",
                name: "Havanese",
                weight: "7-13 lbs",
                lifespan: "14-16 years",
                personality: "cheerful, vivacious, and sociable",
                quote: "Havanese, smart and trainable extroverts with the comic instincts of a born clown, are natural trick dogs."
                },
                {
                photo: "lowchen2.jpeg",
                name: "Lowchen",
                weight: "15 lbs",
                lifespan: "13-15 years",
                personality: "affectionate, lively, and brave as a lion",
                quote: "A companion dog whose name is German for 'little lion', the Lowchen has been a popular pet among Continental Europeans for more than 500 years."
                }
];
const newDogObj = {
  newDogPhoto: "",
  newDogName: "",
  newDogWeight: "",
  newDogLifespan: "",
  newDogPersonality: "",
  newDogQuote: ""
};
const state = reactive ({dogs: dogs, newDogObj: newDogObj});

function handleSubmit() {
  state.dogs.push({
    photo: state.newDogObj.newDogPhoto,
    title: state.newDogObj.newDogName,
    weight: state.newDogObj.newDogWeight,
    lifespan: state.newDogObj.newDogLifespan,
    personality: state.newDogObj.newDogPersonality,
    quote: state.newDogObj.newDogQuote
  });
  state.newDogObj.newDogPhoto = "";
  state.newDogObj.newDogName = "";
  state.newDogObj.newDogWeight = "";
  state.newDogObj.newDogLifespan = "";
  state.newDogObj.newDogPersonality = "";
  state.newDogObj.newDogQuote = "";
}

</script>

<template>

  <div class="app-wrapper">
    
      <h1 class="dog-list-title">My Future Collection of Dogs</h1>
      
      <div class="list-container">
      <table>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Weight</th>
          <th>Lifespan</th>
          <th>Personality</th>
          <th>Quote</th>
        </tr>

        <ItemRow v-for="(entry, index) in state.dogs" v-bind:key="index" v-bind:class="{even: (index + 1) % 2 ===0, odd: (index + 1) % 2 !== 0}" v-bind:entry= "entry" />


      </table>
    </div>
    
    <form v-on:submit.prevent="handleSubmit">
      <fieldset>
        <legend>Add to my future collection</legend>
          <div class="form-input">
            <label for="dogPhoto">Photo of New Dog</label>
            <input v-model="newDogPhoto" id="dogPhoto" type="text">
          </div>
          <div class="form-input">
            <label for="dogName">Name of New Dog</label>
            <input v-model="newDogTitle" id="dogName" type="text">
          </div>
          <div class="form-input">
            <label for="dogWeight">Weight of New Dog</label>
            <input v-model="newDogWeight" id="dogWeight" type="text">
          </div>
          <div class="form-input">
            <label for="dogLifespan">Lifespan of New Dog</label>
            <input v-model="newDogLifespan" id="dogLifespan" type="text">
          </div>
          <div class="form-input">
            <label for="dogPersonality">Personality of New Dog</label>
            <input v-model="newDogPersonality" id="dogPersonality" type="text">
          </div>
          <div class="form-input">
            <label for="dogQuote">Quote about New Dog</label>
            <input v-model="newDogQuote" id="dogQuote" type="text">
          </div>
          <button class="form-add-button" type="submit">Add Doggo!</button>

      </fieldset>
    </form>  


  </div>

</template>

<style>

  .app-wrapper {
    font-family: 'Courier New', Courier, monospace;
  }

  .dog-list-title {
    border-bottom: 5px solid lightpink;
    margin: 25px auto;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    height: 75px;
    padding-top: 25px;
  }

  .list-container {
    padding: 5px;
    width: 1200px;
    margin: 0 auto;
  }

  img {
  max-width: 200px;
  }
  .even {
    background: mistyrose;
  }

  .odd {
    background: lightpink;
  }

  form {
    padding: 50px;
    width: 1200px;
    margin: 0 auto;
  }

  th {
    text-transform: uppercase;
    font-size: 15px;
  }

  td {
    padding: 20px;
  }

  button {
    background: white;
    border: none;
    border-radius: 50%;
  }

  legend {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
  }

  .form-input {
    margin: 35px;
  }

  .form-add-button {
    background: pink;
    border-radius: 0;
    font-family:'Courier New', Courier, monospace;
    font-size: 15px;
    margin: 20px;
    padding: 20px;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
  }

  label {
    padding-right: 20px;
  }

</style>
