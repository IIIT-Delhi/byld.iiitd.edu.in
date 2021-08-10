<script lang="ts">
  import _positions from "$lib/data/positions.yml";
  import type { Position } from "$lib/types";

  const positions = _positions as Position[];

  export let className = "";
</script>

<div
  class="grid grid-cols-3 grid-rows-2 py-5 gap-y-10 md:grid-rows-1 md:grid-cols-5 {className}"
>
  {#each positions as admin}
    <div class="flex flex-col items-center space-y-3">
      <img
        class="w-20 h-20 rounded-full"
        src="{admin.image}"
        alt="{admin.name}"
      />
      <div class="space-y-1 text-center">
        <p class="text-sm font-bold text-white">{admin.name}</p>
        <p class="text-xs text-blueGray-300">{admin.position}</p>
      </div>
    </div>
  {/each}
</div>
