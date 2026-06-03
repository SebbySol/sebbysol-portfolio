<template>
  <div class="project-card">
    <!-- Thumbnail -->
    <div class="card-thumbnail">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
      />
      <div v-else class="card-thumbnail-placeholder">
        <span>{{ project.title }}</span>
      </div>
    </div>

    <!-- Title -->
    <h5 class="card-title">{{ project.title }}</h5>
    <hr class="card-divider" />

    <!-- Description -->
    <p class="card-description">{{ project.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
}

/* Thumbnail */
.card-thumbnail {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: #1a1a2e;
}

.card-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Placeholder for cards without images */
.card-thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e, #2d2d44);
  color: #aaa;
  font-size: 0.9rem;
  padding: 1rem;
}

/* Title */
.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #111;
}

/* Divider */
.card-divider {
  width: 100%;
  border: none;
  border-top: 2px solid #111;
  margin: 0 0 1.2rem 0;
}

/* Description */
.card-description {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.7;
  max-width: 380px;
}
</style>