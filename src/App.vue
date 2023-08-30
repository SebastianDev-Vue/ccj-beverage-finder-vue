<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import Modal from '@/components/ModalComponent.vue'
import Notification from '@/components/NotificationComponent.vue'
</script>

<template>
  <Header />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <Modal />
  <Notification />
</template>

<style scoped></style>
