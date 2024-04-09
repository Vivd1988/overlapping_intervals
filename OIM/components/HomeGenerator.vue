<template>
  <v-container
    ><v-card class="mx-auto" width="400">
      <template v-slot:text>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn
              density="compact"
              icon="mdi-minus"
              @click="store.decrement()"
            ></v-btn>
          </v-col>
          <v-col cols="auto">
            <h1>{{ count }}</h1>
          </v-col>
          <v-col cols="auto">
            <v-btn
              density="compact"
              icon="mdi-plus"
              @click="store.increment()"
            ></v-btn>
          </v-col> </v-row
      ></template>
      <v-card-actions>
        <v-btn rounded="xl" variant="outlined" size="small" block
          >Generate</v-btn
        ></v-card-actions
      >
    </v-card>
    {{ testData }}
  </v-container>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIntervallStore } from "~/stores/store";
const store = useIntervallStore();
const { count, testData } = storeToRefs(store);
</script>
