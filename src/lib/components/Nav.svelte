<script lang="ts">
  import Icon, { Menu, ChevronDown } from "svelte-hero-icons";
  import { slide } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import _links from "$lib/data/navigation.yml";
  import type { NavLink } from "$lib/types";

  const links = _links as NavLink[];

  let showNavigation = false;
  const toggleNavigation = () => (showNavigation = !showNavigation);
</script>

<header class="sticky top-0 z-10 border-b bg-sec-700 border-sec-400 ">
  <Container className="flex items-center justify-between py-4">
    <a href="/">
      <div class="flex flex-col items-center">
        <Logo backgroundColor="black" size="sm" />
        <span class="text-xs text-blueGray-400">develop@iiitd</span>
      </div>
    </a>
    <nav
      class="hidden space-x-5 text-sm font-semibold sm:flex text-blueGray-300"
    >
      {#each links as link}
        <a href="{link.href}">{link.name}</a>
      {/each}
    </nav>
    <button
      on:click="{toggleNavigation}"
      class="self-center sm:hidden text-blueGray-500"
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
      class="flex flex-col py-3 text-xl bg-opacity-50 border-t bg-sec-400 text-blueGray-300 border-sec-400 "
    >
      {#each links as link}
        <a
          href="{link.href}"
          class="transition-all duration-150 transform outline-none active:scale-95 hover:text-white focus:text-white"
        >
          <Container className="py-3">{link.name}</Container>
        </a>
      {/each}
    </nav>
  {/if}
</header>
