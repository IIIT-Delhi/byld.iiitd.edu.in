<script lang="ts">
  export let title: String = "";
  export let subtitle: String = "";
  export let status: String = "";
  export let contributors: Array<String> = [];
  export let techStack: Array<String> = [];
  export let link: string = "";
</script>

<div
  class="flex flex-1 p-4 text-gray-100 border-2 cursor-pointer transition-all duration-200 rounded-md group hover:-translate-y-1 hover:shadow-xl hover:bg-sec-600 bg-sec-700 border-sec-500 hover:border-sec-400"
>
  <a
    href="{link}"
    class="flex flex-col flex-1 space-y-2 transition-all duration-200 divide-y divide-sec-500 hover:divide-sec-300"
  >
    <div class="flex flex-row justify-between">
      <div class="flex flex-col items-start space-y-1">
        <h3 class="text-lg font-bold">{title}</h3>
        <p class="text-sm font-light text-gray-300">{subtitle}</p>
      </div>
      <div>
        <p class="italic font-semibold text-tert-900 group-hover:text-tert-700">
          {status}
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between flex-1 pt-2">
      <div>
        <p class="inline text-sm font-semibold">Contributors:</p>
        <p class="inline text-sm font-light text-gray-300">
          {contributors.join(", ")}
        </p>
      </div>
      <div class="flex flex-row mt-3 space-x-2">
        {#each techStack as tech}
          <div
            class="text-xs font-semibold py-1.5 px-2 rounded border bg-sec-400 border-sec-600 group-hover:border-sec-600 group-hover:bg-sec-300 text-tert-200"
          >
            {tech}
          </div>
        {/each}
      </div>
    </div>
  </a>
</div>
