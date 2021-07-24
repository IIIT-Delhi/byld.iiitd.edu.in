<script lang="ts">
  import { fly } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import { onMount } from "svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import LocationMarker from "svelte-icons-pack/hi/HiOutlineLocationMarker";

  let showHero = false;
  onMount(() => {
    showHero = true;
  });
</script>

<section class="bg-gradient-to-tl from-blueGray-900 to-black-900 relative">
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
