<script lang="ts">
  import Icon, {
    LocationMarker,
    AcademicCap,
    Calendar,
  } from "svelte-hero-icons";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Container from "$lib/components/Container.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import Button from "$lib/components/Button.svelte";

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<section class="relative bg-gradient-to-tl from-sec-500 to-sec-900">
  <Container
    className="z-20 flex flex-col items-center py-20 space-y-10 transform translate-y-0"
  >
    <Logo backgroundColor="black" size="lg" />
    {#if mounted}
      <div class="space-y-4">
        <p
          in:fly="{{ y: -10, duration: 1000 }}"
          class="max-w-md text-4xl font-bold leading-snug text-center text-gray-200"
        >
          The Software Development Club
        </p>
        <p
          in:fly="{{ y: -10, duration: 1000, delay: 300 }}"
          class="flex items-center justify-center max-w-md text-2xl font-bold leading-snug text-center space-x-2 text-sky-200"
        >
          <span class="animate-bounce">
            <Icon src="{LocationMarker}" size="25" />
          </span>
          <span>IIIT Delhi</span>
        </p>
      </div>
      <p
        in:fly="{{ y: -10, duration: 1000, delay: 600 }}"
        class="max-w-sm text-xl leading-snug text-center text-gray-400 md:max-w-md"
      >
        Bringing together passionate individuals who love to collaborate,
        innovate, createand <span class="font-bold">byld</span>.
      </p>
      <div in:fly="{{ y: -10, duration: 1000, delay: 800 }}" class="space-x-3">
        <Button>
          <div class="flex items-center space-x-2">
            <Icon src="{Calendar}" size="20" />
            <span>Events</span>
          </div>
        </Button>
        <Button type="outline">
          <div class="flex items-center space-x-2">
            <Icon src="{AcademicCap}" size="20" />
            <span>Byld Fellowship</span>
          </div></Button
        >
      </div>
    {/if}
  </Container>
</section>
