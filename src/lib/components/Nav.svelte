<script lang="ts">
  import Icon, { Menu, ChevronDown } from "svelte-hero-icons";
  import { slide } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import links from "$lib/data/navigation.json";

  let showNavigation = false;
  const toggleNavigation = () => (showNavigation = !showNavigation);
</script>

<header
  class="
    bg-black-750 bg-opacity-70 backdrop-filter backdrop-blur-lg
      sticky top-0 z-10 border-b border-charcoal-600
    "
>
  <Container className="flex items-center justify-between py-4">
    <div class="flex flex-col items-center">
      <Logo backgroundColor="black" size="sm" />
      <span class="text-blueGray-400 text-xs">develop@iiitd</span>
    </div>
    <nav
      class="hidden sm:flex text-blueGray-300 space-x-5 text-sm font-semibold"
    >
      {#each links as link}
        <a href="{link.href}">{link.name}</a>
      {/each}
    </nav>
    <button
      on:click="{toggleNavigation}"
      class="sm:hidden self-center text-blueGray-500"
    >
      <Icon
        src="{ChevronDown}"
        size="24"
        class="transition-transform duration-200 transform {showNavigation &&
          'rotate-180'}"
        solid
      />
    </button>
  </Container>
  {#if showNavigation}
    <nav
      transition:slide="{{ duration: 200 }}"
      class="
        bg-charcoal-600 bg-opacity-50 py-3 text-blueGray-300
        text-xl flex flex-col border-t border-charcoal-600
      "
    >
      {#each links as link}
        <a
          href="{link.href}"
          class="
            transform active:scale-95 hover:text-white focus:text-white
            transition-all duration-150 outline-none
          "
        >
          <Container className="py-3">{link.name}</Container>
        </a>
      {/each}
    </nav>
  {/if}
</header>
