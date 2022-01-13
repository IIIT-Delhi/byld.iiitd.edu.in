<script>
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import { Icon, UserGroup } from "svelte-hero-icons";
</script>

<section class="py-14 bg-sec-800">
  <Container className="space-y-5" heading="Who are we?">
    <p class="text-xl leading-normal text-gray-400">
      We’re a bunch of students who love building apps and hacks using various
      tools and technologies.
    </p>

    <Button as="button-link" href="/members">
      <div class="flex items-center justify-center space-x-2">
        <Icon src="{UserGroup}" size="20" />
        <span>All members</span>
      </div>
    </Button>
  </Container>
</section>
