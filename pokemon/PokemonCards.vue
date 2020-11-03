<template>
  <div class="card-family">
    <div class="cards">
      <card
       :key="pokemon"
       v-for="pokemon in pokemons"
       @click="click(pokemon)"
       :class="{ opace: selectedId && pokemon.id !== selectedId }"
       class="card"
      >
        <template v-slot:title>
          {{ pokemon.name }} # {{ pokemon.id}}
        </template>
        <template v-slot:content>
          <img :src="pokemon.sprite">
        </template>
        <template v-slot:description>
          <div :key="type" v-for="type in pokemon.types">
            {{ type }}
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  props: {
    pokemons: {
      type: Array
    },
    selectedId: {
      type: Number
    }
  },
  methods: {
    click(pokemon) {
      this.$emit('pokemonClicked', pokemon)
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}
img {
  width: 100%;
}
.opace {
  opacity: 0.5
}
.card:hover {
  opacity: 1.0;
}
</style>