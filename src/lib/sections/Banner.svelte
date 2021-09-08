<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Container from "$lib/components/Container.svelte";

  let mounted = false;
  onMount(() => (mounted = true));
</script>

{#if mounted}
  <section
    class="border-b bg-gradient-to-bl from-sec-500 to-sec-850 border-sec-500"
  >
    <Container className="py-5">
      <h2
        class="text-2xl font-black text-center duration-100 text-sec-100"
        in:fade="{{ duration: 1000, delay: 800 }}"
      >
        Build, hack, learn.
      </h2>
    </Container>
  </section>
{/if}
