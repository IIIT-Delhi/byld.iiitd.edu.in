<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Container from "$lib/components/Container.svelte";

  let mounted = false;
  onMount(() => (mounted = true));
</script>

{#if mounted}
  <section
    class="border-b bg-gradient-to-bl from-charcoal-600 to-black-850 border-charcoal-600"
  >
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
