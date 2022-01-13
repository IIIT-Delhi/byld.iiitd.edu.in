<script lang="ts">
  import { Icon, Link } from "svelte-hero-icons";
  export let id: string;
  export let size = "20";
</script>

<div class="relative flex items-center mb-5 group">
  <a
    class="absolute pr-2 opacity-0 group-hover:opacity-100 right-full transition-opacity"
    href="#{id}"
  >
    <Icon src="{Link}" size="{size}" class="text-gray-300" />
  </a>
  <slot />
</div>
