<script lang="ts">
  export let title: String = "";
  export let subtitle: String = "";
  export let status: String = "";
  export let contributors: Array<String> = [];
  export let techStack: Array<String> = [];
</script>

<div
  class="flex flex-col divide-y space-y-2 divide-charcoal-600 text-gray-100 bg-black-800 p-4 rounded-md border-2 border-black-750 flex-1"
>
  <div class="flex flex-row justify-between">
    <div class="flex flex-col space-y-1 items-start">
      <h3 class="font-bold text-lg">{title}</h3>
      <p class="text-gray-400 text-sm">{subtitle}</p>
    </div>
    <div><p class="text-charcoal-base italic font-semibold">{status}</p></div>
  </div>
  <div class="flex flex-col space-y-3 pt-2">
    <div>
      <p class="font-semibold inline text-sm">Contributors:</p>
      <p class="text-gray-400 inline text-sm">{contributors.join(", ")}</p>
    </div>
    <div class="flex flex-row space-x-2">
      {#each techStack as tech}
        <div
          class="text-xs font-bold py-1.5 px-2 rounded border border-charcoal-600 bg-black-750 text-gray-300"
        >
          {tech}
        </div>
      {/each}
    </div>
  </div>
</div>
