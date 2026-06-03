<template>
  <section id="projects" class="projects pt-5">
    <div class="container pb-5">

      <div class="mb-5">
        <h1 class="mt-5 mb-5 pb-3 display-4 fw-medium text-center">Projects</h1>
      </div>

      <div class="row g-5">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.json';
</script>

<style scoped>
.projects {
  background-color: #ddeeff; /* light blue from your design */
}
</style>