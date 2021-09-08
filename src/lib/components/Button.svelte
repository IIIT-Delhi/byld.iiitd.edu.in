<script lang="ts">
  export let as: "link" | "button" | "button-link" = "button";
  export let type: "primary" | "outline" = "primary";
  export let href: string = "";

  const newTab = !href.startsWith("/");
</script>

{#if as === "button" || as === "button-link"}
  <button
    on:click
    class="py-2 px-3 text-lg text-blueGray-200 font-bold rounded-md
    border-2 border-sec-200 hover:border-sec-100 transition-all duration-200
    outline-none shadow-md hover:bg-sec-100 filter focus:brightness-125
    transform active:scale-95 hover:-translate-y-0.5
    {type === 'primary' ? 'bg-sec-200' : 'bg-transparent text-blueGray-200'}"
  >
    {#if as === "button-link"}
      <a href="{href}" target="{newTab ? '_blank' : ''}" rel="noopener">
        <slot />
      </a>
    {:else}
      <slot />
    {/if}
  </button>
{:else}
  <a href="{href}">
    <slot />
  </a>
{/if}
