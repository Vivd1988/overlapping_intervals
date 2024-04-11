<template>
  <v-container
    ><v-card class="mx-auto" width="400">
      <v-toolbar color="red" dense flat>
        <v-toolbar-title>
          <span class="text-subheading">GENERATOR</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row align="center" justify="space-between">
          <v-col cols="auto">AMOUNT</v-col>
          <v-col cols="auto">
            <v-row>
              <v-col cols="auto">
                <v-btn
                  density="compact"
                  color="red"
                  icon="mdi-minus"
                  @click="store.decrement()"
                  data-testid="decrement"
                ></v-btn>
              </v-col>
              <v-col cols="auto">
                <h1 title="Amount of test data">{{ amount }}</h1>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  density="compact"
                  color="red"
                  icon="mdi-plus"
                  @click="store.increment()"
                  data-testid="increment"
                ></v-btn> </v-col></v-row
          ></v-col>
        </v-row>
        <v-divider class="mt-3 mb-3" />
        <v-row
          ><v-col cols="auto">MAX LIMIT</v-col
          ><v-col
            ><v-slider
              v-model="limit"
              color="red"
              step="1"
              show-ticks
              thumb-label="always"
            ></v-slider></v-col></v-row
      ></v-card-text>
      <v-card-actions>
        <v-col
          ><v-btn
            rounded="xl"
            color="red"
            variant="flat"
            size="small"
            block
            @click="store.generateRandomTestData()"
            >Generate</v-btn
          ></v-col
        ><v-col>
          <v-btn
            rounded="xl"
            color="red"
            variant="outlined"
            size="small"
            block
            @click="store.resetGenerator()"
            >Reset</v-btn
          ></v-col
        >
      </v-card-actions>
    </v-card>
    <v-divider class="mt-5"></v-divider>
    <HomeTestdataDisplay />
    <v-divider class="mt-5"></v-divider>
    <HomeResultDisplay :data="result" />
  </v-container>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIntervallStore } from "~/stores/store";
const store = useIntervallStore();
const { amount, result, limit } = storeToRefs(store);
</script>
