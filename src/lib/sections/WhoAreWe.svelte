<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import positions from "$lib/data/positions.json";
  import Icon, { UserGroup } from "svelte-hero-icons";
</script>

<section class="py-14 bg-black-850" style="background: #">
  <Container className="space-y-5" heading="Who are we?">
    <p class="text-xl leading-normal text-gray-400">
      We’re a bunch of students who love building apps and hacks using various
      tools and technologies.
    </p>

    <div
      class="
        py-5 grid gap-y-10
        grid-rows-2 md:grid-rows-1
        grid-cols-3 md:grid-cols-5
      "
    >
      {#each positions as member}
        <div class="flex flex-col items-center space-y-3">
          <img
            class="h-20 w-20 rounded-full"
            src="{member.image}"
            alt="{member.name}"
          />
          <div class="space-y-1 text-center">
            <p class="font-bold text-white text-sm">{member.name}</p>
            <p class="text-blueGray-300 text-xs">{member.position}</p>
          </div>
        </div>
      {/each}
    </div>
    <Button>
      <div class="flex items-center justify-center space-x-2">
        <Icon src="{UserGroup}" size="20" />
        <span>All members</span>
      </div>
    </Button>
  </Container>
</section>
