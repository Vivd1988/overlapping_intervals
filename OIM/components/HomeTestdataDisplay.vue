<template>
  <v-container
    ><v-card class="mx-auto" width="400">
      <v-toolbar color="blue" dense flat>
        <v-toolbar-title>
          <span class="text-subheading">TEST DATA</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{ testData }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="blue"
          rounded="xl"
          variant="flat"
          size="small"
          block
          @click="store.resolveTestData()"
          >Resolve</v-btn
        ></v-card-actions
      >
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIntervallStore } from "~/stores/store";
const store = useIntervallStore();
const { testData } = storeToRefs(store);
</script>
