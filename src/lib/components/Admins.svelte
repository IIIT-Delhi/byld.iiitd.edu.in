<script>
  import positions from "$lib/data/positions.json";
</script>

<div
  class="py-5
  grid gap-y-10
 grid-rows-2 md:grid-rows-1
 grid-cols-3 md:grid-cols-5
"
>
  {#each positions as admin}
    <div class="flex flex-col items-center space-y-3">
      <img
        class="w-20 h-20 rounded-full"
        src="{admin.image}"
        alt="{admin.name}"
      />
      <div class="text-center space-y-1">
        <p class="text-sm font-bold text-white">{admin.name}</p>
        <p class="text-xs text-blueGray-300">{admin.position}</p>
      </div>
    </div>
  {/each}
</div>
