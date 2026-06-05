<template>
  <section id="featured" class="featured">
    <div class="featured-header d-flex justify-content-between align-items-center">
      <h1 class="featured-title">Featured Projects</h1>
      <a href="#projects" class="view-more">View More</a>
    </div>

    <div class="featured-grid">
        <div class="featured-item item-1">
            <img src="/images/soul-app.png" alt="SOUL" />
        </div>
        <div class="featured-item item-2">
            <img src="/images/skyflix.png" alt="Skyflix" />
        </div>
        <div class="featured-item item-3">
            <img src="/images/daily-write.png" alt="Daily Write" />
        </div>
        <div class="featured-item item-4">
            <img src="/images/expense-tracker.png" alt="Expense Tracker" />
        </div>
        <div class="featured-item item-5">
            <img src="/images/quiz-app.png" alt="Quiz App" />
        </div>
        <div class="featured-item item-6">
            <img src="/images/project-2.jpg" alt="Web Portfolio" />
        </div>
    </div>
  </section>
</template>

<style scoped>
#featured {
  background-color: #FF5500;
  padding: 2rem;
}

.featured-header {
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 4rem;
  font-weight: 800;
  color: #000;
}

.view-more {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 4px;
}

.featured-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Large left item spans 2 rows */
.item-1 {
  grid-row: span 2;
}

/* Large middle item spans 2 columns */
.item-2 {
  grid-column: span 2;
}
</style>