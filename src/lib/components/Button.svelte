<script lang="ts">
  export let as: "link" | "button" = "button";
  export let type: "primary" | "outline" = "primary";
  export let href: string = "";
</script>

{#if as === "button"}
  <button
    on:click
    class="py-2 px-3 text-lg text-blueGray-200 font-bold rounded-md
    border-2 border-charcoal-base transition-all duration-200
    transform filter outline-none shadow-md
    hover:bg-charcoal-500 hover:brightness-125
    active:scale-90 focus:ring-2 focus:ring-charcoal-base
    {type === 'primary'
      ? 'bg-charcoal-base'
      : 'bg-transparent text-blueGray-200'}"
  >
    <slot />
  </button>
{:else}
  <a href="{href}">
    <slot />
  </a>
{/if}
