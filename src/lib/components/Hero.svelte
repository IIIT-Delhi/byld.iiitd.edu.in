<script lang="ts" context="module">
  export interface HeaderInfo {
    element: HTMLElement;
    height: number;
    width: number;
  }
</script>

<script lang="ts">
  import { fly } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import { onMount } from "svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import LocationMarker from "svelte-icons-pack/hi/HiOutlineLocationMarker";
  import Graphics from "./Graphics.svelte";

  let showHero = false;
  onMount(() => {
    showHero = true;
  });

  const header: HeaderInfo = {
    element: undefined,
    height: 0,
    width: 0,
  };
</script>

<section
  bind:this="{header.element}"
  bind:clientWidth="{header.width}"
  bind:clientHeight="{header.height}"
  class="bg-black-900 relative"
>
  {#await new Promise((res) => setTimeout(res, 500))}
    <div></div>
  {:then}
    <Graphics
      header="{{
        element: header.element,
        height: header.element.clientHeight * 0.95,
        width: header.element.clientWidth,
      }}"
    />
  {/await}
  <Container
    className="py-20 space-y-10 flex flex-col items-center z-20 transform translate-y-0"
  >
    <Logo backgroundColor="black" size="lg" />
    {#if showHero}
      <div class="space-y-4">
        <p
          transition:fly="{{ y: -10, duration: 1000 }}"
          class="text-4xl text-gray-200 text-center font-bold leading-snug max-w-md"
        >
          The Software Development Club
        </p>
        <p
          transition:fly="{{ y: -10, duration: 1000, delay: 300 }}"
          class="text-2xl text-sky-200 text-center font-bold leading-snug max-w-md flex items-center justify-center space-x-2"
        >
          <Icon src="{LocationMarker}" size="25" className="animate-bounce" />
          <span>IIIT Delhi</span>
        </p>
      </div>
      <p
        transition:fly="{{ y: -10, duration: 1000, delay: 600 }}"
        class="text-xl text-gray-400 text-center leading-snug max-w-sm md:max-w-md"
      >
        Bringing together passionate individuals who love to collaborate,
        innovate, createand <span class="font-bold">byld</span>.
      </p>
    {/if}
  </Container>
</section>
