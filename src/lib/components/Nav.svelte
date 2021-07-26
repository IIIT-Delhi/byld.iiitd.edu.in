<script lang="ts">
  import Icon, { Menu } from "svelte-hero-icons";
  import { slide } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import links from "$lib/data/navigation.json";

  let showNavigation = false;
  const toggleNavigation = () => (showNavigation = !showNavigation);
</script>

<header
  class="
    bg-black-750 bg-opacity-70 backdrop-filter backdrop-blur
      sticky top-0 z-10
    "
>
  <Container className="flex items-baseline justify-between py-4">
    <Logo backgroundColor="black" size="sm" />
    <nav class="hidden sm:flex text-gray-400 space-x-5 text-sm font-semibold">
      {#each links as link}
        <a href="{link.href}">{link.name}</a>
      {/each}
    </nav>
    <div class="sm:hidden">
      <button on:click="{toggleNavigation}" class="text-gray-500">
        <Icon src="{Menu}" size="20" />
      </button>
    </div>
  </Container>
  {#if showNavigation}
    <nav
      transition:slide="{{ duration: 200 }}"
      class="bg-gray-900 bg-opacity-50 py-10 space-y-5 text-gray-400 text-md font-semibold flex flex-col items-center"
    >
      {#each links as link}
        <a href="{link.href}">{link.name}</a>
      {/each}
    </nav>
  {/if}
</header>
