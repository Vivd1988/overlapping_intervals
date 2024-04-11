<template>
  <v-container
    ><v-card class="mx-auto" width="400">
      <v-toolbar color="green" dense flat>
        <v-toolbar-title>
          <span
            title="Result after computing the test data"
            class="text-subheading"
            >RESULT</span
          >
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{ props.data }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
const props = defineProps(["data"]);
</script>
