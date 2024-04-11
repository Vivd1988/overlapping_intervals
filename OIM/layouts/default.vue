<template>
  <v-layout ref="app" class="rounded rounded-md">
    <AppBar />

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
    </v-main>

    <AppFooter />
  </v-layout>
</template>
