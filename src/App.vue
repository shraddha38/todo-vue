<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> MindMapping</v-list-item-title>
          <v-list-item-subtitle> Think-Plan-Achieve <v-avatar color="indigo" width="20">
              <v-icon dark> mdi-calendar-check </v-icon>
            </v-avatar></v-list-item-subtitle>
          
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
         v-for="item in items"
          :key="item.title" 
          link 
          :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
  
      src="https://picsum.photos/1920/1080?random"
     prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Plan it now!</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>   
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "TODO", icon: "mdi-menu",to:'/'},
      { title: "About", icon: "mdi-book" ,to:'/about'},
      { title: "Calendar", icon:"mdi-label" ,to:'/calendar'},
    ],

    drawer: null,
  }),
};
</script>
