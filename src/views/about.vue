<template>
  <div class="about pa-8">
    <h1>
      About TODO
    </h1>
    <br />
    <p>
      Regain clarity and calmness by getting all those tasks out of your head
      and onto your to-do list
    </p>
    <br />

    <p>
      Todoist gives you the confidence that everything’s organized and accounted
      for, so you can make progress on the things that are important to you.
    </p>
    <br />
    <v-card
    :loading="loading"
    class="mx-auto my-12 pt-4"
    max-width="374"
   
  >
    <li>Start each day feeling calm and in control</li>
    <br />
    <li>Focus your energy on the right things</li>
    <br />
    <li>Personalize your task views </li>
    <br />
    <li>Centralize all your work in one place</li>
    <br>
    <li>See tangible progress</li>
    <br>
    </v-card>
  </div>
</template>
