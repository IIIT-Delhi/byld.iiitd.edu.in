<script lang="ts">
  export let className: string = "";
</script>

<div class="max-w-4xl mx-auto w-11/12 {className}">
  <slot />
</div>
