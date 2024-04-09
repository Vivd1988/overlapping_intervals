<template>
  <v-navigation-drawer theme="dark" permanent rail>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
      nav
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
        to="/"
      ></v-list-item>

      <v-list-item
        prepend-icon="mdi-forum"
        value="messages"
        to="documentation"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
