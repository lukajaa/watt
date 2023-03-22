<template>
  <div class="bg-yellow-50 h-full">
    <div class="p-10 mx-auto min-h-screen h-full lg:w-9/12 xl:w-6/12 text-center">
      <h1 class="text-4xl font-bold text-gray-800">⚡ Watt ⚡</h1>
      <div class="flex flex-row">
        <input 
          type="text" 
          class="w-full p-2 justify-center text-xl text-gray-800 border border-gray-300 rounded focus:outline-yellow-300 flex flex-col" 
          placeholder="Power Output (watts)" 
          v-model="watts"
        />
        <button class="flex flex-col justify-center ml-5 bg-yellow-300 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded text-lg" @click="random_wattage">🔄</button>
      </div>

      <div class="mt-10">
        <p v-if="can_power.length == 0" class="text-xl text-gray-800">You can't power anything :(</p>
        <p v-else class="text-xl text-gray-800">You can power:</p>
        <p
          v-for="appliance in can_power" 
          :key="appliance"
          class="text-md"
        >
          {{ appliance }}
        </p>
      </div>
      <div class="p-10">Created by <a href="https://www.lucaskchang.com" target="_blank">Lucas Chang</a> | Made with <a href="" target="_blank">Tailwind CSS and Nuxt.js</a></div>
    </div>
  </div>
</template>

<script type="ts" setup>
// import appliances
import appliances from './assets/data/appliances.json'

const watts = ref();

const can_power = computed(function () {
  var output = [];
  var temp_watts = Number(watts.value);
  for (const [appliance, wattage] of Object.entries(appliances)) {
    if (temp_watts / wattage >= 1) {
      let times = Math.floor(temp_watts / wattage);
      output.push(`${appliance} x${times}`);
      temp_watts -= wattage * times;
    }
  }
  return output;
});

function random_wattage() {
  watts.value = Math.floor(Math.random() * 10000);
}
</script>

<style scoped>
a {
  color: #f6ad55;
}
</style>