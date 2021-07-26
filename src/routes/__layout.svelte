<script>
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../app.postcss";
</script>

<Nav />

<main>
  <slot />
</main>

<Footer />
