<script lang="ts">
  export let as: "link" | "button" = "button";
  export let type: "primary" | "outline" = "primary";
  export let href: string = "";
</script>

{#if as === "button"}
  <button
    on:click
    class="py-2 px-3 text-lg text-blueGray-200 font-bold rounded-md
    border-2 border-secondary-200 hover:border-secondary-100 transition-all duration-200
    outline-none shadow-md hover:bg-secondary-100 filter focus:brightness-125
    transform active:scale-95 hover:-translate-y-0.5
    {type === 'primary'
      ? 'bg-secondary-200'
      : 'bg-transparent text-blueGray-200'}"
  >
    <slot />
  </button>
{:else}
  <a href="{href}">
    <slot />
  </a>
{/if}
