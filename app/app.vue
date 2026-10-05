<template>
  <div class="w-full max-w-6xl mx-auto">
    <div class="mt-5 flex flex-col md:flex-row p-5 justify-center gap-12">
      <div
        class="w-full text-center md:text-left space-y-3 md:w-1/4 md:border-r md:border-r-hover"
      >
        <div class="">
          <h1 class="font-serif text-3xl">
            Toby Nguyen
          </h1>
          <p class="text-muted">
            Software Engineer
          </p>
        </div>
        <div class="">
          <NuxtLink to="mailto:work@tobynguyen.net" class="link">
            work@tobynguyen.net
          </NuxtLink>
        </div>
        <SocialMedia />
      </div>
      <div class="w-full md:w-3/4 space-y-8">
        <AboutMe />
        <Projects />
        <WorkExperience />
        <Stacks />
        <Languages />

        <div class="text-center">
          <a href="/resume.pdf" class="link" target="_blank">PDF Version</a>
        </div>
      </div>
    </div>
  </div>
</template>
