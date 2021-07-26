<script lang="ts">
  import { fade } from "svelte/transition";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import { onMount } from "svelte";
  import Icon, { Code } from "svelte-hero-icons";

  let mounted = false;
  onMount(() => (mounted = true));
</script>

<Hero />

{#if mounted}
  <section class="border-t border-b bg-black-850 border-charcoal-600">
    <Container className="py-5">
      <h2
        class="text-2xl font-black text-center duration-100 text-charcoal-500"
        transition:fade="{{ duration: 1000, delay: 800 }}"
      >
        Build, hack, learn.
      </h2>
    </Container>
  </section>
{/if}

<section class="who-are-we py-14 bg-black-900" style="background: #">
  <Container className="space-y-5">
    <h2 class="text-3xl font-black text-gray-100">Who are we?</h2>
    <p class="text-xl leading-normal text-gray-400">
      We’re a bunch of students who love building apps and hacks using various
      tools and technologies.
    </p>
    <Button>Members</Button>
  </Container>
</section>

<section class="py-14 bg-black-800">
  <Container className="space-y-5">
    <h2 class="text-3xl font-black text-gray-100">How to join</h2>
    <p class="text-lg leading-normal text-gray-400">
      Byld organizes a Hackathon once every month of the semester. The members
      of the teams which finish at the top in the Hackathons are recruited into
      the club.
    </p>
    <p class="text-lg leading-normal text-gray-400">
      Byld membership is not permanent and the members of the club need to have
      at least 50% attendance in Byld events to stay a part of the club.
    </p>
    <Button>When's the next hack?</Button>
  </Container>
</section>

<section class="border-t bg-black-900 border-charcoal-600">
  <Container className="py-7">
    <div class="flex flex-col space-y-3 text-sm">
      <Logo size="sm" backgroundColor="black" />
      <p class="text-gray-500">Bylt by Mihir Chaturvedi and Ananya Lohani</p>
      <a
        class="flex items-center space-x-2 text-gray-500"
        href="https://github.com/IIIT-Delhi/byld.iiitd.edu.in"
      >
        <Icon src="{Code}" size="17" solid />
        <span> Source on GitHub</span>
      </a>
    </div>
  </Container>
</section>

<style>
  .who-are-we {
    background: #020303;
  }
</style>
