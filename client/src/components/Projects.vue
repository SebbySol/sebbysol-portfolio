<template>
  <section id="projects" class="projects pt-5">
    <div class="container pb-5">

      <div class="mb-5">
        <h1 class="mt-5 mb-5 pb-3 display-4 fw-medium text-center">Projects</h1>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-5 text-danger">
        <p>{{ error }}</p>
      </div>

      <!-- Projects grid -->
      <div v-else class="row g-5">
        <div
          v-for="project in projects"
          :key="project._id"
          class="col-12 col-md-6 col-lg-4"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    projects.value = await res.json();
  } catch (err) {
    error.value = 'Could not load projects. Please try again later.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>