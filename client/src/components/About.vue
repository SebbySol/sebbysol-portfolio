<template>

    <section id="about" class="about pt-2">
        <div class="container pb-5">

            <div class="mt-5 mb-5 d-flex align-items-start justify-content-between gap-4">
    
            <div>
                <h1 class="mb-lg-5 mb-3 custom-heading">
                    Discover my projects and see the story of each works.
                </h1>
                <p class="text-white discover-p ">Every feature, workflow, and detail is built with purpose to create smooth, reliable experiences that bring ideas to life. I focus on performance, usability, and clean implementation to deliver solutions that solve real problems and support business goals.</p>
            </div>

            <button class="mt-2 flex-shrink-0" @click="downloadResume">My Resume</button>

        </div>

            <div class="pt-3 pb-5 mt-5 mb-5 d-flex align-items-start justify-content-between gap-5">
                <img class="dev-img" src="/images/menew.jfif" alt="sebastian">
                <div class="text-end">
                    <h1 class="text-black about-me pb-2">About Me</h1>
                    <p class="text-white about-prg">I’m Sebastian, a visual creator who traded "static frames" for "living code." After years of crafting user-centric designs in Adobe Photoshop and Figma, I’m now focused on building those experiences from the ground up. I’m currently specializing in front-end development with a roadmap leading toward the full-stack. I don't just design interfaces; I engineer them.</p>
                </div>
            </div>

        </div>
    </section>

</template>

<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/files/AngelesSebastian_Resume.pdf'
  link.download = 'AngelesSebastian_Resume.pdf'
  link.click()
}
</script>